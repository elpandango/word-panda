<script setup lang="ts">
import type { VerbEntry } from '../../shared/types/verbs';

interface SearchItem extends VerbEntry {
  familyBaseWord?: string;
}

interface SearchResponse {
  query: string;
  items: SearchItem[];
}

interface RecentEntriesResponse {
  limit: number;
  items: VerbEntry[];
}

interface CreateFamilyResponse {
  ok: boolean;
  familyId: string;
  entryId: string;
}

interface EntryCreatePayload {
  word: string;
  translationRu?: string;
  explanationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
}

type EntrySubmitMode = 'close' | 'continue';

const router = useRouter();
const searchQuery = ref('');
const debouncedQuery = ref('');
const searchDebounceMs = 500;
const isRefreshingRecentEntries = ref(false);
const isCreateBaseFormOpen = ref(false);
const isCreatingBaseEntry = ref(false);
const createBaseErrorMessage = ref('');

watch(
  searchQuery,
  (value, _oldValue, onCleanup) => {
    const timeoutId = setTimeout(() => {
      debouncedQuery.value = value.trim();
    }, searchDebounceMs);

    onCleanup(() => {
      clearTimeout(timeoutId);
    });
  },
  { immediate: true }
);

const { data, pending, error } = await useFetch<SearchResponse>('/api/search', {
  query: computed(() => ({ q: debouncedQuery.value })),
  default: () => ({ query: '', items: [] }),
  lazy: true,
  server: false,
  watch: [debouncedQuery]
});

const {
  data: recentData,
  pending: recentPending,
  error: recentError,
  refresh: refreshRecentEntries
} = await useFetch<RecentEntriesResponse>('/api/entries/recent', {
  query: { limit: 5 },
  default: () => ({ limit: 5, items: [] })
});

const items = computed(() => data.value?.items ?? []);
const recentItems = computed(() => recentData.value?.items ?? []);
const hasQuery = computed(() => searchQuery.value.trim().length > 0);

function formatEntryMeta(entry: VerbEntry): string {
  return entry.role === 'base' ? 'Базовый глагол' : 'Вариант';
}

function openCreateBaseForm(): void {
  createBaseErrorMessage.value = '';
  isCreateBaseFormOpen.value = true;
}

function closeCreateBaseForm(): void {
  if (isCreatingBaseEntry.value) {
    return;
  }

  createBaseErrorMessage.value = '';
  isCreateBaseFormOpen.value = false;
}

async function handleRefreshRecentEntries(): Promise<void> {
  if (isRefreshingRecentEntries.value) {
    return;
  }

  isRefreshingRecentEntries.value = true;

  try {
    await refreshRecentEntries();
  } finally {
    isRefreshingRecentEntries.value = false;
  }
}

async function handleCreateBaseEntry(
  payload: EntryCreatePayload,
  _submitMode: EntrySubmitMode
): Promise<void> {
  if (isCreatingBaseEntry.value) {
    return;
  }

  isCreatingBaseEntry.value = true;
  createBaseErrorMessage.value = '';

  try {
    const response = await $fetch<CreateFamilyResponse>('/api/families', {
      method: 'POST',
      body: payload
    });

    isCreateBaseFormOpen.value = false;
    await refreshRecentEntries();
    await router.push(`/family/${response.familyId}`);
  } catch (error) {
    createBaseErrorMessage.value =
      error instanceof Error ? error.message : 'Не удалось создать слово.';
  } finally {
    isCreatingBaseEntry.value = false;
  }
}

useSeoMeta({
  title: 'WordPanda',
  description: 'Личная база немецких глаголов и их приставочных вариантов.'
});
</script>

<template>
  <main class="page-shell home-layout">
    <div class="page-stack">
      <section class="hero-card page-stack-sm">
        <div class="section-row">
          <h2>Поиск</h2>
          <AppButton size="sm" @click="openCreateBaseForm">Добавить слово</AppButton>
        </div>

        <p class="hero-copy">Быстро найди нужный глагол и открой его семейство.</p>

        <label class="search-block">
          <span class="search-label">Поиск по слову</span>
          <input
            v-model="searchQuery"
            class="search-input"
            type="search"
            placeholder="stellen, einstellen, spüren, aufspüren..."
          />
        </label>
      </section>

      <section class="info-card page-stack-sm">
        <div class="section-row">
          <h2>Результаты</h2>
          <span v-if="hasQuery && pending" class="muted-text">Ищем...</span>
        </div>

        <p v-if="error" class="error-text">Не удалось выполнить поиск. Проверь вывод сервера.</p>

        <p v-else-if="!hasQuery" class="muted-text">
          Начни вводить слово, чтобы найти нужный глагол.
        </p>

        <p v-else-if="items.length === 0" class="muted-text">
          По этому запросу пока ничего не найдено.
        </p>

        <ul v-else class="result-list">
          <li v-for="item in items" :key="item._id">
            <NuxtLink class="result-card" :to="`/family/${item.familyId}`">
              <div>
                <p class="result-kind">{{ formatEntryMeta(item) }}</p>
                <strong class="result-word">{{ item.word }}</strong>
              </div>

              <div class="result-meta">
                <p v-if="item.translationRu">{{ item.translationRu }}</p>
                <p v-else class="muted-text">Перевод пока не добавлен</p>
                <p v-if="item.role === 'variant'" class="muted-text">
                  Семейство: {{ item.familyBaseWord || item.word }}
                </p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>

    <aside class="home-sidebar page-stack-sm">
      <section class="info-card page-stack-sm">
        <div class="section-row">
          <h2>Последние добавленные</h2>
          <AppButton
            variant="ghost"
            size="sm"
            :loading="isRefreshingRecentEntries"
            :disabled="recentPending && recentItems.length === 0"
            @click="handleRefreshRecentEntries"
          >
            Обновить
          </AppButton>
        </div>

        <p v-if="recentError" class="error-text">Не удалось загрузить последние слова.</p>

        <p v-else-if="recentPending && recentItems.length === 0" class="muted-text">
          Загружаем последние добавления...
        </p>

        <p v-else-if="recentItems.length === 0" class="muted-text">Пока нет добавленных слов.</p>

        <ul v-else class="result-list compact-list">
          <li v-for="item in recentItems" :key="item._id">
            <NuxtLink class="result-card result-card--compact" :to="`/family/${item.familyId}`">
              <div>
                <p class="result-kind">{{ formatEntryMeta(item) }}</p>
                <strong class="result-word">{{ item.word }}</strong>
              </div>

              <div class="result-meta result-meta--compact">
                <p v-if="item.translationRu">{{ item.translationRu }}</p>
                <p v-else class="muted-text">Без перевода</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </aside>

    <AppModal :open="isCreateBaseFormOpen" title="Новое базовое слово" @close="closeCreateBaseForm">
      <EntryCreateForm
        mode="base"
        :loading="isCreatingBaseEntry"
        :error-message="createBaseErrorMessage"
        @submit="handleCreateBaseEntry"
      />
    </AppModal>
  </main>
</template>
