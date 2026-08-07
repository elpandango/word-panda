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
          <NuxtLink class="result-card surface-glass" :to="`/family/${item.familySlug}`">
            <div>
              <p class="result-kind">Базовый глагол</p>
              <strong class="result-word">{{ item.word }}</strong>
            </div>

            <div class="result-meta">
              <p v-if="item.translationRu">{{ item.translationRu }}</p>
              <p v-else class="muted-text">Перевод пока не добавлен</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
