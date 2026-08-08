<script setup lang="ts">
import type { VerbEntry } from '~~/shared/types/verbs';
import { getApiErrorMessage } from '../utils/api-errors';

interface SearchItem extends VerbEntry {
  familyBaseWord?: string;
  familySlug?: string | null;
}

interface SearchResponse {
  query: string;
  items: SearchItem[];
}

interface RecentEntriesResponse {
  limit: number;
  items: (VerbEntry & { familyBaseWord?: string; familySlug?: string | null })[];
}

interface CreateFamilyResponse {
  ok: boolean;
  familyId: string;
  entryId: string;
  slug: string;
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
const isClientReady = ref(false);
const isRefreshingRecentEntries = ref(false);
const isCreateBaseFormOpen = ref(false);
const isCreatingBaseEntry = ref(false);
const createBaseErrorMessage = ref('');
const searchData = ref<SearchResponse>({ query: '', items: [] });
const isSearchPending = ref(false);
const searchError = ref<unknown>(null);
const recentData = ref<RecentEntriesResponse>({ limit: 5, items: [] });
const isRecentPending = ref(false);
const recentError = ref<unknown>(null);

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

const items = computed(() => searchData.value.items ?? []);
const recentItems = computed(() => recentData.value.items ?? []);
const hasQuery = computed(() => searchQuery.value.trim().length > 0);

async function fetchSearchResults(): Promise<void> {
  if (!isClientReady.value) {
    return;
  }

  const query = debouncedQuery.value;
  searchError.value = null;

  if (!query) {
    searchData.value = { query: '', items: [] };
    isSearchPending.value = false;
    return;
  }

  isSearchPending.value = true;

  try {
    searchData.value = await $fetch<SearchResponse>('/api/search', {
      query: { q: query }
    });
  } catch (error) {
    searchError.value = error;
    searchData.value = { query, items: [] };
  } finally {
    isSearchPending.value = false;
  }
}

async function fetchRecentEntries(): Promise<void> {
  recentError.value = null;
  isRecentPending.value = true;

  try {
    recentData.value = await $fetch<RecentEntriesResponse>('/api/entries/recent', {
      query: { limit: 5 }
    });
  } catch (error) {
    recentError.value = error;
    recentData.value = { limit: 5, items: [] };
  } finally {
    isRecentPending.value = false;
  }
}

watch(debouncedQuery, () => {
  void fetchSearchResults();
});

onMounted(() => {
  isClientReady.value = true;
  void fetchRecentEntries();
  void fetchSearchResults();
});

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
    await fetchRecentEntries();
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
    await fetchRecentEntries();
    await router.push(`/family/${response.slug}`);
  } catch (error) {
    createBaseErrorMessage.value = getApiErrorMessage(error, 'Не удалось создать слово.');
  } finally {
    isCreatingBaseEntry.value = false;
  }
}

useSeoMeta({
  title: 'Словарь | WordPanda',
  description: 'Личная база немецких глаголов, их семейства и типовых сочетаний.'
});
</script>

<template>
  <main class="page-shell home-layout">
    <div class="page-stack">
      <section class="hero-card page-stack-sm surface-calm">
        <div class="section-row">
          <h2>Поиск</h2>
          <AppButton size="sm" @click="openCreateBaseForm">Добавить слово</AppButton>
        </div>

        <p class="hero-copy">Быстро найди нужный глагол и открой его семейство.</p>

        <label class="search-block">
          <span class="search-label">Поиск по слову</span>
          <input
            v-model="searchQuery"
            class="search-input surface-field"
            type="search"
            placeholder="stellen, einstellen, spüren, aufspüren..."
          />
        </label>
      </section>

      <section class="info-card page-stack-sm surface-calm">
        <div class="section-row">
          <h2>Результаты</h2>
          <AppSpinner v-if="hasQuery && isSearchPending" />
        </div>

        <p v-if="searchError" class="error-text">Не удалось выполнить поиск. Проверь вывод сервера.</p>

        <p v-else-if="!hasQuery" class="muted-text">
          Начни вводить слово, чтобы найти нужный глагол.
        </p>

        <p v-else-if="items.length === 0" class="muted-text">
          По этому запросу пока ничего не найдено.
        </p>

        <ul v-else class="result-list">
          <li v-for="item in items" :key="item._id">
            <EntryResultCard :entry="item" />
          </li>
        </ul>
      </section>
    </div>

    <aside class="home-sidebar page-stack-sm">
      <section class="info-card page-stack-sm surface-calm">
        <div class="section-row">
          <h2>Последние добавленные</h2>
          <AppButton
            variant="ghost"
            size="sm"
            :loading="isRefreshingRecentEntries"
            :disabled="isRecentPending && recentItems.length === 0"
            @click="handleRefreshRecentEntries"
          >
            Обновить
          </AppButton>
        </div>

        <p v-if="recentError" class="error-text">Не удалось загрузить последние слова.</p>

        <div v-else-if="isRecentPending && recentItems.length === 0" class="loading-row">
          <AppSpinner />
        </div>

        <p v-else-if="recentItems.length === 0" class="muted-text">Пока нет добавленных слов.</p>

        <ul v-else class="result-list compact-list">
          <li v-for="item in recentItems" :key="item._id">
            <EntryResultCard :entry="item" compact empty-translation-text="Без перевода" />
          </li>
        </ul>
      </section>
    </aside>

    <AppModal :open="isCreateBaseFormOpen" title="Новое базовое слово" @close="closeCreateBaseForm">
      <EntryCreateForm
        mode="base"
        :loading="isCreatingBaseEntry"
        :error-message="createBaseErrorMessage"
        :show-cancel-button="true"
        @cancel="closeCreateBaseForm"
        @submit="handleCreateBaseEntry"
      />
    </AppModal>
  </main>
</template>

<style scoped>
.loading-row {
  display: flex;
  align-items: center;
  min-height: 24px;
}
</style>
