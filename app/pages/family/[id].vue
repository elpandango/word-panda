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

const route = useRoute();
const familyId = computed(() => String(route.params.id));

const { data, pending, error } = await useFetch<FamilyResponse>(
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

function getExamples(entryId?: string): VerbExample[] {
  if (!entryId) {
    return [];
  }

  return data.value?.examplesByEntryId?.[entryId] ?? [];
}

useSeoMeta({
  title: () =>
    baseEntry.value
      ? `${baseEntry.value.word} | WordPanda`
      : `Family ${familyId.value} | WordPanda`,
  description: () =>
    baseEntry.value ? `Verb family for ${baseEntry.value.word}` : 'Verb family detail page'
});
</script>

<template>
  <main class="page-shell page-stack">
    <NuxtLink class="back-link" to="/">← Back to search</NuxtLink>

    <section v-if="pending" class="info-card">
      <p class="muted-text">Loading family data...</p>
    </section>

    <section v-else-if="error" class="info-card">
      <h1>Family request failed</h1>
      <p class="error-text">Check the server output for the exact error.</p>
    </section>

    <section v-else-if="!found || !family || !baseEntry" class="info-card">
      <h1>Family not found</h1>
      <p class="muted-text">The API did not find any family with id `{{ familyId }}`.</p>
    </section>

    <template v-else>
      <section class="hero-card">
        <p class="eyebrow">Verb family</p>
        <h1>{{ baseEntry.word }}</h1>
        <p class="hero-copy">
          Base entry, linked variants, and grouped examples are now loaded from `/api/families/:id`.
        </p>
      </section>

      <section class="info-card page-stack-sm">
        <div class="section-row">
          <h2>Base verb</h2>
          <span class="badge">{{ baseEntry.status }}</span>
        </div>

        <article class="entry-card">
          <p class="result-word">{{ baseEntry.word }}</p>
          <p v-if="baseEntry.translationRu">{{ baseEntry.translationRu }}</p>
          <p v-if="baseEntry.meaningDe" class="muted-text">{{ baseEntry.meaningDe }}</p>
          <p v-if="baseEntry.explanationRu" class="muted-text">{{ baseEntry.explanationRu }}</p>

          <ul v-if="getExamples(baseEntry._id).length" class="example-list">
            <li
              v-for="example in getExamples(baseEntry._id)"
              :key="example._id"
              class="example-card"
            >
              <strong>{{ example.textDe }}</strong>
              <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
            </li>
          </ul>
        </article>
      </section>

      <section class="info-card page-stack-sm">
        <div class="section-row">
          <h2>Variants</h2>
          <span class="badge">{{ variants.length }}</span>
        </div>

        <p v-if="variants.length === 0" class="muted-text">No variants stored yet.</p>

        <div v-else class="entry-grid">
          <article v-for="variant in variants" :key="variant._id" class="entry-card">
            <div class="section-row">
              <p class="result-word">{{ variant.word }}</p>
              <span class="badge">{{ variant.prefix || 'no prefix' }}</span>
            </div>

            <p v-if="variant.translationRu">{{ variant.translationRu }}</p>
            <p v-if="variant.meaningDe" class="muted-text">{{ variant.meaningDe }}</p>
            <p v-if="variant.explanationRu" class="muted-text">{{ variant.explanationRu }}</p>
            <p class="muted-text">
              Separable:
              {{ variant.isSeparable === null ? 'unknown' : variant.isSeparable ? 'yes' : 'no' }}
            </p>

            <ul v-if="getExamples(variant._id).length" class="example-list">
              <li
                v-for="example in getExamples(variant._id)"
                :key="example._id"
                class="example-card"
              >
                <strong>{{ example.textDe }}</strong>
                <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </template>
  </main>
</template>
