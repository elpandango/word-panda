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
    <NuxtLink class="back-link" to="/">← Назад к поиску</NuxtLink>

    <section v-if="pending" class="info-card">
      <p class="muted-text">Загружаем данные семейства...</p>
    </section>

    <section v-else-if="error" class="info-card">
      <h1>Не удалось загрузить семейство</h1>
      <p class="error-text">Проверь вывод сервера, чтобы увидеть точную ошибку.</p>
    </section>

    <section v-else-if="!found || !family || !baseEntry" class="info-card">
      <h1>Семейство не найдено</h1>
      <p class="muted-text">API не нашёл семейство с id `{{ familyId }}`.</p>
    </section>

    <template v-else>
      <section class="hero-card">
        <p class="eyebrow">Семейство глагола</p>
        <h1>{{ baseEntry.word }}</h1>
        <p class="hero-copy">Здесь собраны базовый глагол, его варианты и связанные примеры.</p>
      </section>

      <section class="page-stack-sm">
        <h2 class="section-title">Базовый глагол</h2>

        <article class="entry-card">
          <div class="entry-card__main">
            <p class="result-word">{{ baseEntry.word }}</p>
            <p v-if="baseEntry.translationRu" class="entry-card__translation">{{ baseEntry.translationRu }}</p>
          </div>

          <div v-if="baseEntry.explanationRu" class="entry-card__detail-section">
            <p class="entry-card__detail-title">Пояснение</p>
            <p class="entry-card__detail-text muted-text">{{ baseEntry.explanationRu }}</p>
          </div>

          <div v-if="getExamples(baseEntry._id).length" class="entry-card__example-section">
            <p class="entry-card__example-title">{{ getExampleSectionTitle(getExamples(baseEntry._id)) }}</p>

            <ul class="example-list example-list--inline">
              <li v-for="example in getExamples(baseEntry._id)" :key="example._id" class="example-item">
                <strong>{{ example.textDe }}</strong>
                <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section class="page-stack-sm">
        <h2 class="section-title">Варианты</h2>

        <p v-if="variants.length === 0" class="muted-text">Варианты пока не добавлены.</p>

        <div v-else class="entry-grid">
          <article v-for="variant in variants" :key="variant._id" class="entry-card">
            <div class="entry-card__main">
              <div class="section-row">
                <p class="result-word variant-word">
                  <template v-if="getVariantWordParts(variant).prefix">
                    <span class="variant-word__prefix">{{ getVariantWordParts(variant).prefix }}</span>
                    <span v-if="getVariantWordParts(variant).isSeparable" class="variant-word__separator">·</span>
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
                <span v-else-if="variant.isSeparable === false" class="entry-note">неотделяемая</span>
              </div>

              <p v-if="variant.translationRu" class="entry-card__translation">{{ variant.translationRu }}</p>
            </div>

            <div v-if="variant.explanationRu" class="entry-card__detail-section">
              <p class="entry-card__detail-title">Пояснение</p>
              <p class="entry-card__detail-text muted-text">{{ variant.explanationRu }}</p>
            </div>

            <div v-if="getExamples(variant._id).length" class="entry-card__example-section">
              <p class="entry-card__example-title">{{ getExampleSectionTitle(getExamples(variant._id)) }}</p>

              <ul class="example-list example-list--inline">
                <li v-for="example in getExamples(variant._id)" :key="example._id" class="example-item">
                  <strong>{{ example.textDe }}</strong>
                  <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </template>
  </main>
</template>
