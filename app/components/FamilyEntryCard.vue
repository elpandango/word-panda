<script setup lang="ts">
import type { VerbEntry, VerbExample } from '~~/shared/types/verbs';
import { resolveVerbEntryKind } from '~~/shared/utils/verb-entry-kind';

const props = withDefaults(
  defineProps<{
    entry: VerbEntry;
    examples?: VerbExample[];
    showEditButton?: boolean;
    editLabel?: string;
  }>(),
  {
    examples: () => [],
    showEditButton: false,
    editLabel: 'Редактировать'
  }
);

const emit = defineEmits<{
  (event: 'edit', entry: VerbEntry): void;
}>();

const entryKind = computed(() => resolveVerbEntryKind(props.entry));
const exampleSectionTitle = computed(() => (props.examples.length > 1 ? 'Примеры' : 'Пример'));
const wordParts = computed(() => {
  const prefix = props.entry.prefix?.trim();

  if (entryKind.value !== 'derived' || !prefix || !props.entry.word.startsWith(prefix)) {
    return {
      prefix: null,
      stem: props.entry.word,
      isSeparable: false
    };
  }

  return {
    prefix,
    stem: props.entry.word.slice(prefix.length),
    isSeparable: props.entry.isSeparable === true
  };
});

function handleEdit(): void {
  emit('edit', props.entry);
}
</script>

<template>
  <article class="family-entry-card surface-calm">
    <div class="family-entry-card__main">
      <div v-if="entryKind === 'derived'" class="section-row family-entry-card__header">
        <p class="result-word family-entry-card__variant-word">
          <template v-if="wordParts.prefix">
            <span class="family-entry-card__prefix">{{ wordParts.prefix }}</span>
            <span v-if="wordParts.isSeparable" class="family-entry-card__separator">·</span>
            <span
              class="family-entry-card__stem"
              :class="{ 'family-entry-card__stem--separable': wordParts.isSeparable }"
            >
              {{ wordParts.stem }}
            </span>
          </template>
          <template v-else>
            {{ entry.word }}
          </template>
        </p>
        <span v-if="entry.isSeparable === true" class="entry-note">отделяемая</span>
        <span v-else-if="entry.isSeparable === false" class="entry-note">неотделяемая</span>
      </div>

      <p v-else class="result-word">{{ entry.word }}</p>

      <p v-if="entry.translationRu" class="entry-card__translation">
        {{ entry.translationRu }}
      </p>

      <div v-if="showEditButton" class="entry-card__actions">
        <AppButton variant="ghost" size="sm" @click="handleEdit">{{ editLabel }}</AppButton>
      </div>
    </div>

    <div v-if="entry.explanationRu" class="entry-card__detail-section">
      <p class="entry-card__detail-title">Пояснение</p>
      <p class="entry-card__detail-text muted-text">{{ entry.explanationRu }}</p>
    </div>

    <div v-if="examples.length" class="entry-card__example-section">
      <p class="entry-card__example-title">{{ exampleSectionTitle }}</p>

      <ul class="example-list example-list--inline">
        <li v-for="example in examples" :key="example._id" class="example-item">
          <strong>{{ example.textDe }}</strong>
          <p v-if="example.translationRu" class="muted-text">{{ example.translationRu }}</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.family-entry-card {
  overflow: hidden;
  border: 1px solid var(--surface-border);
  border-radius: 20px;
}

.family-entry-card__main {
  padding: 16px 18px;
}

.family-entry-card__header {
  align-items: flex-start;
}

.family-entry-card__variant-word {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1px;
}

.family-entry-card__prefix {
  color: var(--accent);
  font-weight: 800;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

.family-entry-card__separator {
  color: var(--accent);
  font-weight: 700;
}

.family-entry-card__stem--separable {
  font-style: italic;
}

@media (min-width: 801px) {
  .family-entry-card__header {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
