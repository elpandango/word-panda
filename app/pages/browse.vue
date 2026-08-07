<script setup lang="ts">
import type { VerbEntry } from '~~/shared/types/verbs';

interface BrowseItem extends VerbEntry {
  familySlug?: string | null;
}

interface BrowseResponse {
  letter: string;
  alphabet: string[];
  total: number;
  items: BrowseItem[];
}

const isClientReady = ref(false);
const browseData = ref<BrowseResponse>({
  letter: 'A',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  total: 0,
  items: []
});
const isBrowsePending = ref(false);
const browseError = ref<unknown>(null);
const hasLoadedBrowse = ref(false);
const route = useRoute();
const selectedLetter = computed(() => {
  const value = String(route.query.letter ?? 'A')
    .trim()
    .toUpperCase();

  return /^[A-Z]$/.test(value) ? value : 'A';
});

const alphabet = computed(() => browseData.value.alphabet ?? []);
const items = computed(() => browseData.value.items ?? []);
const total = computed(() => browseData.value.total ?? 0);
const isPageLoading = computed(() => !hasLoadedBrowse.value || isBrowsePending.value);

async function fetchBrowseEntries(): Promise<void> {
  if (!isClientReady.value) {
    return;
  }

  browseError.value = null;
  isBrowsePending.value = true;

  try {
    browseData.value = await $fetch<BrowseResponse>('/api/entries/browse', {
      query: { letter: selectedLetter.value }
    });
  } catch (error) {
    browseError.value = error;
  } finally {
    isBrowsePending.value = false;
    hasLoadedBrowse.value = true;
  }
}

watch(selectedLetter, () => {
  if (!isClientReady.value) {
    return;
  }

  hasLoadedBrowse.value = false;
  void fetchBrowseEntries();
});

onMounted(() => {
  isClientReady.value = true;
  void fetchBrowseEntries();
});

useSeoMeta({
  title: 'Слова | WordPanda',
  description: 'Просмотр всех базовых слов WordPanda по алфавиту.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <NuxtLink class="back-link" to="/">← На главную</NuxtLink>

    <section class="hero-card page-stack-sm surface-calm">
      <p class="eyebrow">Слова</p>
      <h1>Просмотр слов по алфавиту</h1>
      <p class="hero-copy">
        Выбери букву и быстро пролистай все базовые слова, которые уже есть в базе.
      </p>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <div class="section-row">
        <h2>Алфавит</h2>
        <span class="muted-text">Буква: {{ selectedLetter }}</span>
      </div>

      <AlphabetPicker :letters="alphabet" :selected-letter="selectedLetter" />
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <div class="section-row">
        <h2>Слова на {{ selectedLetter }}</h2>
        <AppSpinner v-if="isPageLoading" />
        <span v-else class="muted-text">{{ total }} шт.</span>
      </div>

      <p v-if="browseError" class="error-text">Не удалось загрузить слова по букве.</p>

      <p v-else-if="isPageLoading" class="muted-text">Подгружаем список слов для выбранной буквы.</p>

      <p v-else-if="items.length === 0" class="muted-text">
        На эту букву базовых слов пока нет.
      </p>

      <ul v-else class="result-list">
        <li v-for="item in items" :key="item._id">
          <EntryResultCard :entry="item" />
        </li>
      </ul>
    </section>
  </main>
</template>
