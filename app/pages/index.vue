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
  description: 'Dictionary workspace for German verb families and prefix variants.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <section class="hero-card">
      <p class="eyebrow">Search</p>
      <h1>Find a German verb family by base word or prefix variant.</h1>
      <p class="hero-copy">
        The frontend is now wired to live Mongo-backed API routes, so this search reads real data
        from WordPanda.
      </p>

      <label class="search-block">
        <span class="search-label">Search by word</span>
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
        <h2>Results</h2>
        <span v-if="pending" class="muted-text">Searching...</span>
      </div>

      <p v-if="error" class="error-text">Search failed. Check the dev server output for details.</p>

      <p v-else-if="!hasQuery" class="muted-text">
        Type a word to query the live `/api/search` endpoint.
      </p>

      <p v-else-if="items.length === 0" class="muted-text">No entries matched this query yet.</p>

      <ul v-else class="result-list">
        <li v-for="item in items" :key="item._id">
          <NuxtLink class="result-card" :to="`/family/${item.familyId}`">
            <div>
              <p class="result-kind">{{ item.role === 'base' ? 'Base verb' : 'Variant' }}</p>
              <strong class="result-word">{{ item.word }}</strong>
            </div>

            <div class="result-meta">
              <p v-if="item.translationRu">{{ item.translationRu }}</p>
              <p v-else class="muted-text">Translation pending</p>
              <p class="muted-text">Family: {{ item.familyId }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
