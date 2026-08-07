<script setup lang="ts">
import type { VerbEntry, VerbExample, VerbFamily } from '../../../shared/types/verbs';

interface FamilyResponse {
  familyId: string;
  found: boolean;
  family: VerbFamily | null;
  baseEntry: VerbEntry | null;
  variants: VerbEntry[];
  examplesByEntryId: Record<string, VerbExample[]>;
}

interface VariantWordParts {
  prefix: string | null;
  stem: string;
  isSeparable: boolean;
}

interface EntryFormPayload {
  word: string;
  translationRu?: string;
  explanationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
}

interface EntryMutationResponse {
  ok: boolean;
  familyId: string;
  entryId: string;
  deleted?: 'entry' | 'family';
}

type EntrySubmitMode = 'close' | 'continue';
type EntryModalMode = 'create-variant' | 'edit-base' | 'edit-variant';

const route = useRoute();
const router = useRouter();
const lastCollectionRoute = useLastCollectionRoute();
const familyId = computed(() => String(route.params.id));
const isEntryModalOpen = ref(false);
const isSubmittingEntry = ref(false);
const isDeletingEntry = ref(false);
const entryModalErrorMessage = ref('');
const entryFormResetKey = ref(0);
const entryModalMode = ref<EntryModalMode>('create-variant');
const selectedEntry = ref<VerbEntry | null>(null);

const { data, pending, error, refresh } = await useFetch<FamilyResponse>(
  () => `/api/families/${familyId.value}`,
  {
    default: () => ({
      familyId: familyId.value,
      found: false,
      family: null,
      baseEntry: null,
      variants: [],
      examplesByEntryId: {}
    }),
    watch: [familyId]
  }
);

const family = computed(() => data.value?.family ?? null);
const baseEntry = computed(() => data.value?.baseEntry ?? null);
const variants = computed(() => data.value?.variants ?? []);
const found = computed(() => data.value?.found ?? false);
const isEditMode = computed(() => entryModalMode.value !== 'create-variant');
const modalTitle = computed(() => {
  if (entryModalMode.value === 'edit-base') {
    return 'Редактировать базовый глагол';
  }

  if (entryModalMode.value === 'edit-variant') {
    return 'Редактировать вариант';
  }

  return 'Новый вариант';
});
const modalSubmitLabel = computed(() => {
  return isEditMode.value ? 'Сохранить изменения' : 'Сохранить';
});
const modalDeleteLabel = computed(() => {
  return entryModalMode.value === 'edit-base' ? 'Удалить семейство' : 'Удалить вариант';
});
const shouldShowContinueButton = computed(() => entryModalMode.value === 'create-variant');
const shouldShowDeleteButton = computed(() => isEditMode.value && !!selectedEntry.value);
const modalContextWord = computed(() => {
  if (entryModalMode.value === 'edit-base') {
    return '';
  }

  return baseEntry.value?.word || '';
});
const modalMode = computed<'base' | 'variant'>(() => {
  return entryModalMode.value === 'edit-base' ? 'base' : 'variant';
});
const selectedExample = computed<VerbExample | null>(() => {
  if (!selectedEntry.value?._id) {
    return null;
  }

  return getPrimaryExample(selectedEntry.value._id);
});

function getExamples(entryId?: string): VerbExample[] {
  if (!entryId) {
    return [];
  }

  return data.value?.examplesByEntryId?.[entryId] ?? [];
}

function getPrimaryExample(entryId?: string): VerbExample | null {
  return getExamples(entryId)[0] ?? null;
}

function getExampleSectionTitle(examples: VerbExample[]): string {
  return examples.length > 1 ? 'Примеры' : 'Пример';
}

function getVariantWordParts(variant: VerbEntry): VariantWordParts {
  const prefix = variant.prefix?.trim();

  if (!prefix || !variant.word.startsWith(prefix)) {
    return {
      prefix: null,
      stem: variant.word,
      isSeparable: false
    };
  }

  return {
    prefix,
    stem: variant.word.slice(prefix.length),
    isSeparable: variant.isSeparable === true
  };
}

async function handleBackNavigation(): Promise<void> {
  if (import.meta.client) {
    const backTarget = window.history.state?.back;

    if (typeof backTarget === 'string' && backTarget.startsWith('/')) {
      await router.back();
      return;
    }
  }

  await router.push(lastCollectionRoute.value || '/');
}

function openCreateVariantForm(): void {
  entryModalMode.value = 'create-variant';
  selectedEntry.value = null;
  entryModalErrorMessage.value = '';
  entryFormResetKey.value += 1;
  isEntryModalOpen.value = true;
}

function openEditBaseForm(): void {
  if (!baseEntry.value) {
    return;
  }

  entryModalMode.value = 'edit-base';
  selectedEntry.value = baseEntry.value;
  entryModalErrorMessage.value = '';
  entryFormResetKey.value += 1;
  isEntryModalOpen.value = true;
}

function openEditVariantForm(entry: VerbEntry): void {
  entryModalMode.value = 'edit-variant';
  selectedEntry.value = entry;
  entryModalErrorMessage.value = '';
  entryFormResetKey.value += 1;
  isEntryModalOpen.value = true;
}

function closeEntryModal(): void {
  if (isSubmittingEntry.value || isDeletingEntry.value) {
    return;
  }

  entryModalErrorMessage.value = '';
  isEntryModalOpen.value = false;
}

async function handleCreateVariant(
  payload: EntryFormPayload,
  submitMode: EntrySubmitMode
): Promise<void> {
  await $fetch<EntryMutationResponse>('/api/entries', {
    method: 'POST',
    body: {
      familyId: familyId.value,
      ...payload
    }
  });

  await refresh();

  if (submitMode === 'continue') {
    entryModalErrorMessage.value = '';
    entryFormResetKey.value += 1;
    return;
  }

  isEntryModalOpen.value = false;
}

async function handleUpdateEntry(payload: EntryFormPayload): Promise<void> {
  if (!selectedEntry.value?._id) {
    throw new Error('Не удалось определить запись для редактирования.');
  }

  await $fetch<EntryMutationResponse>(`/api/entries/${selectedEntry.value._id}`, {
    method: 'PUT',
    body: payload
  });

  await refresh();
  isEntryModalOpen.value = false;
}

async function handleSubmitEntry(
  payload: EntryFormPayload,
  submitMode: EntrySubmitMode
): Promise<void> {
  if (isSubmittingEntry.value) {
    return;
  }

  isSubmittingEntry.value = true;
  entryModalErrorMessage.value = '';

  try {
    if (entryModalMode.value === 'create-variant') {
      await handleCreateVariant(payload, submitMode);
      return;
    }

    await handleUpdateEntry(payload);
  } catch (error) {
    entryModalErrorMessage.value =
      error instanceof Error ? error.message : 'Не удалось сохранить изменения.';
  } finally {
    isSubmittingEntry.value = false;
  }
}

async function handleDeleteEntry(): Promise<void> {
  if (!selectedEntry.value?._id || isDeletingEntry.value) {
    return;
  }

  const isBaseEntry = selectedEntry.value.role === 'base';
  const confirmMessage = isBaseEntry
    ? 'Удалить всё семейство вместе со всеми вариантами и примерами?'
    : `Удалить вариант ${selectedEntry.value.word}?`;

  if (typeof window !== 'undefined' && !window.confirm(confirmMessage)) {
    return;
  }

  isDeletingEntry.value = true;
  entryModalErrorMessage.value = '';

  try {
    const response = await $fetch<EntryMutationResponse>(
      `/api/entries/${selectedEntry.value._id}`,
      {
        method: 'DELETE'
      }
    );

    if (response.deleted === 'family') {
      await router.push('/');
      return;
    }

    await refresh();
    isEntryModalOpen.value = false;
  } catch (error) {
    entryModalErrorMessage.value =
      error instanceof Error ? error.message : 'Не удалось удалить запись.';
  } finally {
    isDeletingEntry.value = false;
  }
}

useSeoMeta({
  title: () =>
    baseEntry.value
      ? `${baseEntry.value.word} | WordPanda`
      : `Семейство ${familyId.value} | WordPanda`,
  description: () =>
    baseEntry.value ? `Семейство глагола ${baseEntry.value.word}` : 'Страница семейства глагола'
});
</script>

<template>
  <main class="page-shell page-stack">
    <button class="back-link back-link--button" type="button" @click="handleBackNavigation">
      ← Назад
    </button>

    <section v-if="pending" class="info-card surface-calm">
      <p class="muted-text">Загружаем данные семейства...</p>
    </section>

    <section v-else-if="error" class="info-card surface-calm">
      <h1>Не удалось загрузить семейство</h1>
      <p class="error-text">Проверь вывод сервера, чтобы увидеть точную ошибку.</p>
    </section>

    <section v-else-if="!found || !family || !baseEntry" class="info-card surface-calm">
      <h1>Семейство не найдено</h1>
      <p class="muted-text">API не нашёл семейство с id `{{ familyId }}`.</p>
    </section>

    <template v-else>
      <section class="hero-card surface-calm">
        <p class="eyebrow">Семейство глагола</p>
        <h1>{{ baseEntry.word }}</h1>
        <p class="hero-copy">Здесь собраны базовый глагол, его варианты и связанные примеры.</p>
      </section>

      <section class="page-stack-sm">
        <div class="section-row section-row--actions">
          <h2 class="section-title">Базовый глагол</h2>
          <AppButton variant="ghost" size="sm" @click="openEditBaseForm">Редактировать</AppButton>
        </div>

        <article class="entry-card surface-calm">
          <div class="entry-card__main">
            <p class="result-word">{{ baseEntry.word }}</p>
            <p v-if="baseEntry.translationRu" class="entry-card__translation">
              {{ baseEntry.translationRu }}
            </p>
          </div>

          <div v-if="baseEntry.explanationRu" class="entry-card__detail-section">
            <p class="entry-card__detail-title">Пояснение</p>
            <p class="entry-card__detail-text muted-text">{{ baseEntry.explanationRu }}</p>
          </div>

          <div v-if="getExamples(baseEntry._id).length" class="entry-card__example-section">
            <p class="entry-card__example-title">
              {{ getExampleSectionTitle(getExamples(baseEntry._id)) }}
            </p>

            <ul class="example-list example-list--inline">
              <li
                v-for="example in getExamples(baseEntry._id)"
                :key="example._id"
                class="example-item"
              >
                <strong>{{ example.textDe }}</strong>
                <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section class="page-stack-sm">
        <div class="section-row">
          <h2 class="section-title">Варианты</h2>
          <AppButton size="sm" @click="openCreateVariantForm">Добавить вариант</AppButton>
        </div>

        <p v-if="variants.length === 0" class="muted-text">Варианты пока не добавлены.</p>

        <div v-else class="entry-grid">
          <article v-for="variant in variants" :key="variant._id" class="entry-card surface-calm">
            <div class="entry-card__main">
              <div class="section-row">
                <p class="result-word variant-word">
                  <template v-if="getVariantWordParts(variant).prefix">
                    <span class="variant-word__prefix">{{
                      getVariantWordParts(variant).prefix
                    }}</span>
                    <span
                      v-if="getVariantWordParts(variant).isSeparable"
                      class="variant-word__separator"
                      >·</span
                    >
                    <span
                      class="variant-word__stem"
                      :class="{
                        'variant-word__stem--separable': getVariantWordParts(variant).isSeparable
                      }"
                    >
                      {{ getVariantWordParts(variant).stem }}
                    </span>
                  </template>
                  <template v-else>
                    {{ variant.word }}
                  </template>
                </p>
                <span v-if="variant.isSeparable === true" class="entry-note">отделяемая</span>
                <span v-else-if="variant.isSeparable === false" class="entry-note"
                  >неотделяемая</span
                >
              </div>

              <p v-if="variant.translationRu" class="entry-card__translation">
                {{ variant.translationRu }}
              </p>

              <div class="entry-card__actions">
                <AppButton variant="ghost" size="sm" @click="openEditVariantForm(variant)"
                  >Редактировать</AppButton
                >
              </div>
            </div>

            <div v-if="variant.explanationRu" class="entry-card__detail-section">
              <p class="entry-card__detail-title">Пояснение</p>
              <p class="entry-card__detail-text muted-text">{{ variant.explanationRu }}</p>
            </div>

            <div v-if="getExamples(variant._id).length" class="entry-card__example-section">
              <p class="entry-card__example-title">
                {{ getExampleSectionTitle(getExamples(variant._id)) }}
              </p>

              <ul class="example-list example-list--inline">
                <li
                  v-for="example in getExamples(variant._id)"
                  :key="example._id"
                  class="example-item"
                >
                  <strong>{{ example.textDe }}</strong>
                  <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </template>

    <AppModal :open="isEntryModalOpen" :title="modalTitle" @close="closeEntryModal">
      <EntryCreateForm
        :mode="modalMode"
        :loading="isSubmittingEntry"
        :deleting="isDeletingEntry"
        :error-message="entryModalErrorMessage"
        :context-word="modalContextWord"
        :reset-key="entryFormResetKey"
        :initial-entry="selectedEntry"
        :initial-example="selectedExample"
        :submit-label="modalSubmitLabel"
        :show-continue-button="shouldShowContinueButton"
        :show-delete-button="shouldShowDeleteButton"
        :delete-label="modalDeleteLabel"
        @delete="handleDeleteEntry"
        @submit="handleSubmitEntry"
      />
    </AppModal>
  </main>
</template>
