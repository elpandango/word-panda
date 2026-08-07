<script setup lang="ts">
import type { VerbEntry, VerbEntryKind, VerbExample, VerbFamily } from '~~/shared/types/verbs';
import { getApiErrorMessage } from '../../utils/api-errors';
import { isBaseEntryKind, resolveVerbEntryKind } from '~~/shared/utils/verb-entry-kind';

interface FamilyResponse {
  familyId: string | null;
  found: boolean;
  family: VerbFamily | null;
  baseEntry: VerbEntry | null;
  derivedEntries: VerbEntry[];
  collocations: VerbEntry[];
  examplesByEntryId: Record<string, VerbExample[]>;
}

interface EntryFormPayload {
  kind?: VerbEntryKind;
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
type EntryModalMode =
  'create-derived' | 'create-collocation' | 'edit-base' | 'edit-derived' | 'edit-collocation';

const isClientReady = ref(false);
const route = useRoute();
const router = useRouter();
const lastCollectionRoute = useLastCollectionRoute();
const familySlug = computed(() => String(route.params.id));
const targetEntryAnchor = computed(() => {
  const hash = route.hash?.trim();

  return hash?.startsWith('#entry-') ? hash.slice(1) : '';
});
const familyData = ref<FamilyResponse>({
  familyId: null,
  found: false,
  family: null,
  baseEntry: null,
  derivedEntries: [],
  collocations: [],
  examplesByEntryId: {}
});
const isFamilyPending = ref(false);
const familyError = ref<unknown>(null);
const hasLoadedFamily = ref(false);
const isEntryModalOpen = ref(false);
const isSubmittingEntry = ref(false);
const isDeletingEntry = ref(false);
const entryModalErrorMessage = ref('');
const entryFormResetKey = ref(0);
const entryModalMode = ref<EntryModalMode>('create-derived');
const selectedEntry = ref<VerbEntry | null>(null);

const family = computed(() => familyData.value.family ?? null);
const resolvedFamilyId = computed(() => String(familyData.value.familyId || ''));
const baseEntry = computed(() => familyData.value.baseEntry ?? null);
const derivedEntries = computed(() => familyData.value.derivedEntries ?? []);
const collocations = computed(() => familyData.value.collocations ?? []);
const found = computed(() => familyData.value.found ?? false);
const isPageLoading = computed(() => !hasLoadedFamily.value || isFamilyPending.value);
const isEditMode = computed(() => !entryModalMode.value.startsWith('create-'));
const modalTitle = computed(() => {
  if (entryModalMode.value === 'edit-base') {
    return 'Редактировать базовый глагол';
  }

  if (entryModalMode.value === 'edit-derived') {
    return 'Редактировать глагол семейства';
  }

  if (entryModalMode.value === 'edit-collocation') {
    return 'Редактировать сочетание';
  }

  return entryModalMode.value === 'create-derived' ? 'Новый глагол семейства' : 'Новое сочетание';
});
const modalSubmitLabel = computed(() => {
  return 'Сохранить';
});
const modalDeleteLabel = computed(() => {
  if (entryModalMode.value === 'edit-base') {
    return 'Удалить семейство';
  }

  return entryModalMode.value === 'edit-collocation' ? 'Удалить сочетание' : 'Удалить глагол';
});
const shouldShowContinueButton = computed(() => entryModalMode.value.startsWith('create-'));
const shouldShowDeleteButton = computed(() => isEditMode.value && !!selectedEntry.value);
const modalContextWord = computed(() => {
  if (entryModalMode.value === 'edit-base') {
    return '';
  }

  return baseEntry.value?.word || '';
});
const modalMode = computed<'base' | 'derived' | 'collocation'>(() => {
  if (entryModalMode.value === 'edit-base') {
    return 'base';
  }

  if (
    entryModalMode.value === 'create-collocation' ||
    entryModalMode.value === 'edit-collocation'
  ) {
    return 'collocation';
  }

  return 'derived';
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

  return familyData.value.examplesByEntryId?.[entryId] ?? [];
}

function getPrimaryExample(entryId?: string): VerbExample | null {
  return getExamples(entryId)[0] ?? null;
}

async function scrollToTargetEntry(): Promise<void> {
  if (
    !targetEntryAnchor.value ||
    isPageLoading.value ||
    typeof document === 'undefined' ||
    typeof window === 'undefined'
  ) {
    return;
  }

  await nextTick();

  const element = document.getElementById(targetEntryAnchor.value);

  if (!element) {
    return;
  }

  const header = document.querySelector('.site-header');
  const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
  const viewportOffset = window.innerWidth >= 801 ? 20 : 12;
  const targetTop =
    window.scrollY + element.getBoundingClientRect().top - headerHeight - viewportOffset;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth'
  });
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

function openCreateDerivedForm(): void {
  entryModalMode.value = 'create-derived';
  selectedEntry.value = null;
  entryModalErrorMessage.value = '';
  entryFormResetKey.value += 1;
  isEntryModalOpen.value = true;
}

function openCreateCollocationForm(): void {
  entryModalMode.value = 'create-collocation';
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

function openEditRelatedForm(entry: VerbEntry): void {
  entryModalMode.value =
    resolveVerbEntryKind(entry) === 'collocation' ? 'edit-collocation' : 'edit-derived';
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

async function fetchFamily(): Promise<void> {
  if (!isClientReady.value) {
    return;
  }

  familyError.value = null;
  isFamilyPending.value = true;

  try {
    familyData.value = await $fetch<FamilyResponse>(`/api/families/${familySlug.value}`);
  } catch (error) {
    familyError.value = error;
    familyData.value = {
      familyId: null,
      found: false,
      family: null,
      baseEntry: null,
      derivedEntries: [],
      collocations: [],
      examplesByEntryId: {}
    };
  } finally {
    isFamilyPending.value = false;
    hasLoadedFamily.value = true;
  }
}

async function handleCreateRelatedEntry(
  payload: EntryFormPayload,
  submitMode: EntrySubmitMode
): Promise<void> {
  await $fetch<EntryMutationResponse>('/api/entries', {
    method: 'POST',
    body: {
      familyId: resolvedFamilyId.value,
      ...payload
    }
  });

  await fetchFamily();

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

  await fetchFamily();
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
    if (entryModalMode.value.startsWith('create-')) {
      await handleCreateRelatedEntry(payload, submitMode);
      return;
    }

    await handleUpdateEntry(payload);
  } catch (error) {
    entryModalErrorMessage.value = getApiErrorMessage(error, 'Не удалось сохранить изменения.');
  } finally {
    isSubmittingEntry.value = false;
  }
}

async function handleDeleteEntry(): Promise<void> {
  if (!selectedEntry.value?._id || isDeletingEntry.value) {
    return;
  }

  const selectedKind = resolveVerbEntryKind(selectedEntry.value);
  const isBaseEntry = isBaseEntryKind(selectedKind);
  const confirmMessage = isBaseEntry
    ? 'Удалить всё семейство вместе со всеми записями и примерами?'
    : selectedKind === 'collocation'
      ? `Удалить сочетание ${selectedEntry.value.word}?`
      : `Удалить глагол семейства ${selectedEntry.value.word}?`;

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

    await fetchFamily();
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
      : `Семейство ${familySlug.value} | WordPanda`,
  description: () =>
    baseEntry.value
      ? `Семейство глагола ${baseEntry.value.word} и связанные сочетания`
      : 'Страница семейства глагола'
});

onMounted(() => {
  isClientReady.value = true;
  void fetchFamily();
});

watch(familySlug, () => {
  if (!isClientReady.value) {
    return;
  }

  hasLoadedFamily.value = false;
  void fetchFamily();
});

watch(
  () => [targetEntryAnchor.value, isPageLoading.value, derivedEntries.value.length, collocations.value.length] as const,
  () => {
    void scrollToTargetEntry();
  }
);
</script>

<template>
  <main class="page-shell page-stack">
    <button class="back-link back-link--button" type="button" @click="handleBackNavigation">
      ← Назад
    </button>

    <PageStateCard v-if="isPageLoading" message="Загружаем данные семейства..." loading />

    <PageStateCard
      v-else-if="familyError"
      title="Не удалось загрузить семейство"
      message="Проверь вывод сервера, чтобы увидеть точную ошибку."
      tone="error"
    />

    <PageStateCard
      v-else-if="!found || !family || !baseEntry"
      title="Семейство не найдено"
      :message="`API не нашёл семейство со slug ${familySlug}.`"
    />

    <template v-else>
      <section class="hero-card surface-calm">
        <p class="eyebrow">Семейство глагола</p>
        <h1>{{ baseEntry.word }}</h1>
        <p class="hero-copy">
          Здесь собраны базовый глагол, формы его семейства, сочетания и примеры.
        </p>
      </section>

      <FamilyEntrySection title="Базовый глагол">
        <template #action>
          <AppButton variant="ghost" size="sm" @click="openEditBaseForm">Редактировать</AppButton>
        </template>
        <FamilyEntryCard
          :entry="baseEntry"
          :examples="getExamples(baseEntry._id)"
          show-edit-button
          @edit="openEditBaseForm"
        />
      </FamilyEntrySection>

      <FamilyEntrySection
        title="Семейство"
        :is-empty="derivedEntries.length === 0"
        empty-text="Глаголы семейства пока не добавлены."
      >
        <template #action>
          <AppButton size="sm" @click="openCreateDerivedForm">Добавить глагол</AppButton>
        </template>
        <div class="entry-grid">
          <FamilyEntryCard
            v-for="variant in derivedEntries"
            :key="variant._id"
            :entry="variant"
            :examples="getExamples(variant._id)"
            show-edit-button
            @edit="openEditRelatedForm"
          />
        </div>
      </FamilyEntrySection>

      <FamilyEntrySection
        title="Сочетания"
        :is-empty="collocations.length === 0"
        empty-text="Сочетания пока не добавлены."
      >
        <template #action>
          <AppButton size="sm" @click="openCreateCollocationForm">Добавить сочетание</AppButton>
        </template>
        <div class="entry-grid">
          <FamilyEntryCard
            v-for="collocation in collocations"
            :key="collocation._id"
            :entry="collocation"
            :examples="getExamples(collocation._id)"
            show-edit-button
            @edit="openEditRelatedForm"
          />
        </div>
      </FamilyEntrySection>
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
        :show-cancel-button="true"
        :show-delete-button="shouldShowDeleteButton"
        :delete-label="modalDeleteLabel"
        @cancel="closeEntryModal"
        @delete="handleDeleteEntry"
        @submit="handleSubmitEntry"
      />
    </AppModal>
  </main>
</template>
