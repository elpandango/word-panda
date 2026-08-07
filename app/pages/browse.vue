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

const route = useRoute();
const selectedLetter = computed(() => {
  const value = String(route.query.letter ?? 'A')
    .trim()
    .toUpperCase();

  return /^[A-Z]$/.test(value) ? value : 'A';
});

const { data, pending, error } = await useFetch<BrowseResponse>('/api/entries/browse', {
  query: computed(() => ({ letter: selectedLetter.value })),
  default: () => ({
    letter: 'A',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    total: 0,
    items: []
  }),
  watch: [selectedLetter]
});

const alphabet = computed(() => data.value?.alphabet ?? []);
const items = computed(() => data.value?.items ?? []);
const total = computed(() => data.value?.total ?? 0);

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

      <div class="alphabet-grid" aria-label="Выбор буквы">
        <NuxtLink
          v-for="letter in alphabet"
          :key="letter"
          :to="{ path: '/browse', query: { letter } }"
          class="alphabet-grid__item"
          :class="{ 'alphabet-grid__item--active': letter === selectedLetter }"
        >
          {{ letter }}
        </NuxtLink>
      </div>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <div class="section-row">
        <h2>Слова на {{ selectedLetter }}</h2>
        <span v-if="pending" class="muted-text">Загружаем...</span>
        <span v-else class="muted-text">{{ total }} шт.</span>
      </div>

      <p v-if="error" class="error-text">Не удалось загрузить слова по букве.</p>

      <p v-else-if="!pending && items.length === 0" class="muted-text">
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

<style scoped>
.alphabet-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
}

.alphabet-grid__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  background: var(--surface-elevated);
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-family-heading);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.alphabet-grid__item:hover {
  color: var(--accent-strong);
  border-color: color-mix(in srgb, var(--accent) 70%, var(--surface-border));
}

.alphabet-grid__item--active {
  background: var(--accent-soft);
  border-color: color-mix(in srgb, var(--accent) 70%, var(--surface-border));
  color: var(--accent-strong);
}

@media (max-width: 800px) {
  .alphabet-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
