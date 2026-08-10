<script setup lang="ts">
import type { VerbEntry } from '~~/shared/types/verbs';
import { resolveVerbEntryKind } from '~~/shared/utils/verb-entry-kind';
import { getPartOfSpeechLabel } from '~~/shared/utils/part-of-speech';

const props = withDefaults(
  defineProps<{
    entry: VerbEntry & {
      familyBaseWord?: string;
      familySlug?: string | null;
    };
    compact?: boolean;
    emptyTranslationText?: string;
  }>(),
  {
    compact: false,
    emptyTranslationText: 'Перевод пока не добавлен'
  }
);

const entryKind = computed(() => resolveVerbEntryKind(props.entry));
const familyWord = computed(() => props.entry.familyBaseWord || props.entry.word);
const cardLink = computed(() => ({
  path: `/family/${props.entry.familySlug}`,
  hash: props.entry._id ? `#entry-${props.entry._id}` : ''
}));
const headerLabel = computed(() => {
  if (entryKind.value === 'base') {
    return getPartOfSpeechLabel(props.entry.partOfSpeech);
  }

  if (entryKind.value === 'derived') {
    return 'Глагол семейства';
  }

  return 'Сочетание';
});
</script>

<template>
  <NuxtLink
    class="entry-result-card surface-glass"
    :class="{ 'entry-result-card--compact': compact }"
    :to="cardLink"
  >
    <div class="entry-result-card__header">
      <p class="entry-result-card__kind">
        <template v-if="entryKind === 'base'">
          {{ headerLabel }}
        </template>
        <template v-else>
          {{ headerLabel }}
          <span class="entry-result-card__family">{{ familyWord }}</span>
        </template>
      </p>
    </div>

    <div class="entry-result-card__body">
      <strong class="entry-result-card__word">{{ entry.word }}</strong>
      <p v-if="entry.translationRu">{{ entry.translationRu }}</p>
      <p v-else class="muted-text">{{ emptyTranslationText }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.entry-result-card {
  display: block;
  overflow: hidden;
  border: 1px solid var(--surface-border);
  border-radius: 20px;
  padding: 0;
  color: inherit;
  text-decoration: none;
}

.entry-result-card__header {
  padding: 14px 18px 13px;
  border-bottom: 1px solid var(--surface-border);
}

.entry-result-card__body {
  display: grid;
  gap: 8px;
  padding: 16px 18px;
}

.entry-result-card__body p {
  margin-bottom: 0;
}

.entry-result-card__kind {
  margin: 0;
  color: var(--accent);
  font-family: var(--font-family-body);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
}

.entry-result-card__family {
  margin-left: 2px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

.entry-result-card__word {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
}

.entry-result-card--compact .entry-result-card__body {
  gap: 6px;
}
</style>
