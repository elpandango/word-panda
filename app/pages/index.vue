<script setup lang="ts">
import type { VerbEntry } from '../../shared/types/verbs';

interface SearchResponse {
  query: string;
  items: VerbEntry[];
}

const searchQuery = ref('');
const debouncedQuery = ref('');
const searchDebounceMs = 500;

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

const items = computed(() => data.value?.items ?? []);
const hasQuery = computed(() => searchQuery.value.trim().length > 0);

useSeoMeta({
  title: 'WordPanda',
  description: 'Личная база немецких глаголов и их приставочных вариантов.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <section class="hero-card">
      <p class="eyebrow">Поиск</p>
      <h1>Находи немецкие глаголы и их приставочные варианты в одном месте.</h1>
      <p class="hero-copy">
        Поиск работает по локальной базе приложения и помогает быстро открыть нужное семейство.
      </p>

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
        <span v-if="pending" class="muted-text">Ищем...</span>
      </div>

      <p v-if="error" class="error-text">Не удалось выполнить поиск. Проверь вывод сервера.</p>

      <p v-else-if="!hasQuery" class="muted-text">Начни вводить слово, чтобы найти нужный глагол.</p>

      <p v-else-if="items.length === 0" class="muted-text">По этому запросу пока ничего не найдено.</p>

      <ul v-else class="result-list">
        <li v-for="item in items" :key="item._id">
          <NuxtLink class="result-card" :to="`/family/${item.familyId}`">
            <div>
              <p class="result-kind">{{ item.role === 'base' ? 'Базовый глагол' : 'Вариант' }}</p>
              <strong class="result-word">{{ item.word }}</strong>
            </div>

            <div class="result-meta">
              <p v-if="item.translationRu">{{ item.translationRu }}</p>
              <p v-else class="muted-text">Перевод пока не добавлен</p>
              <p class="muted-text">Семейство: {{ item.familyId }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
