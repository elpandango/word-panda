<script setup lang="ts">
import type { FlashcardItem } from '../../data/flashcards';

const props = defineProps<{
  card: FlashcardItem;
  flipped: boolean;
}>();

const emit = defineEmits<{
  (event: 'toggle'): void;
}>();

function splitExampleText(example?: string): string[] {
  if (!example) {
    return [];
  }

  return example
    .split(/\n+/)
    .flatMap((part) => part.match(/[^.!?]+[.!?]?/g) ?? [])
    .map((part) => part.trim())
    .filter(Boolean);
}

const levelThemeClass = computed(() => {
  return `flashcard-study-card--${props.card.level.toLowerCase()}`;
});

const frontExampleLines = computed(() => {
  return splitExampleText(props.card.front.exampleDe);
});

const backExampleLines = computed(() => {
  return splitExampleText(props.card.back.exampleTranslation);
});
</script>

<template>
  <button
    type="button"
    class="flashcard-study-card"
    :class="[levelThemeClass, { 'flashcard-study-card--flipped': props.flipped }]"
    @click="emit('toggle')"
  >
    <span class="flashcard-study-card__inner">
      <span class="flashcard-study-card__face flashcard-study-card__face--front surface-calm">
        <span class="flashcard-study-card__topbar">
          <span>{{ props.card.cardNumber }}</span>
          <span>{{ props.card.level }} · {{ props.card.topic }}</span>
        </span>
        <span class="flashcard-study-card__body">
          <strong class="flashcard-study-card__title">{{ props.card.front.title }}</strong>
          <span v-if="props.card.front.subtitle" class="flashcard-study-card__subtitle">
            {{ props.card.front.subtitle }}
          </span>
          <span
            v-for="line in props.card.front.lines"
            :key="`${props.card.id}-front-${line}`"
            class="flashcard-study-card__line"
          >
            {{ line }}
          </span>
          <span v-if="frontExampleLines.length" class="flashcard-study-card__example">
            <span
              v-for="line in frontExampleLines"
              :key="`${props.card.id}-front-example-${line}`"
              class="flashcard-study-card__example-line"
            >
              {{ line }}
            </span>
          </span>
        </span>
      </span>

      <span class="flashcard-study-card__face flashcard-study-card__face--back surface-glass">
        <span class="flashcard-study-card__topbar flashcard-study-card__topbar--back">
          <span>{{ props.card.cardNumber }}</span>
          <span>{{ props.card.level }} · Перевод</span>
        </span>
        <span class="flashcard-study-card__body">
          <strong class="flashcard-study-card__title">{{ props.card.back.title }}</strong>
          <span
            v-for="line in props.card.back.lines"
            :key="`${props.card.id}-back-${line}`"
            class="flashcard-study-card__line"
          >
            {{ line }}
          </span>
          <span v-if="backExampleLines.length" class="flashcard-study-card__example">
            <span
              v-for="line in backExampleLines"
              :key="`${props.card.id}-back-example-${line}`"
              class="flashcard-study-card__example-line"
            >
              {{ line }}
            </span>
          </span>
        </span>
      </span>
    </span>
  </button>
</template>

<style scoped>
.flashcard-study-card {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  perspective: 1400px;
  cursor: pointer;
}

.flashcard-study-card__inner {
  position: relative;
  display: block;
  min-height: 430px;
  transform-style: preserve-3d;
  transition: transform 0.7s ease;
}

.flashcard-study-card--flipped .flashcard-study-card__inner {
  transform: rotateY(180deg);
}

.flashcard-study-card__face {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: auto auto 1fr;
  overflow: hidden;
  border: 1px solid var(--surface-border);
  border-radius: 18px;
  backface-visibility: hidden;
  text-align: left;
}

.flashcard-study-card__face--back {
  transform: rotateY(180deg);
}

.flashcard-study-card__topbar {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  min-height: 34px;
  padding: 8px 16px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  background: linear-gradient(90deg, #5d2b73 0%, #7c3a8e 100%);
}

.flashcard-study-card__topbar--back {
  color: rgba(255, 255, 255, 0.92);
  background: linear-gradient(90deg, #7e8791 0%, #9ba3ab 100%);
}

.flashcard-study-card__body {
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 16px;
}

.flashcard-study-card--a1 .flashcard-study-card__topbar {
  background: linear-gradient(90deg, #3f7c67 0%, #61a184 100%);
}

.flashcard-study-card--a2 .flashcard-study-card__topbar {
  background: linear-gradient(90deg, #2f6f88 0%, #4f93ae 100%);
}

.flashcard-study-card--b1 .flashcard-study-card__topbar {
  background: linear-gradient(90deg, #866b2f 0%, #b49244 100%);
}

.flashcard-study-card--b2 .flashcard-study-card__topbar {
  background: linear-gradient(90deg, #7d4b2b 0%, #b56f43 100%);
}

.flashcard-study-card--c1 .flashcard-study-card__topbar {
  background: linear-gradient(90deg, #5d2b73 0%, #7c3a8e 100%);
}

.flashcard-study-card__title {
  font-family: var(--font-family-heading);
  font-size: 34px;
  font-weight: 800;
  line-height: 1.05;
  color: var(--text-primary);
}

.flashcard-study-card__subtitle {
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.35;
}

.flashcard-study-card__line {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
}

.flashcard-study-card__example {
  display: grid;
  gap: 8px;
  margin-top: 6px;
  color: var(--text-primary);
  font-size: 22px;
  line-height: 1.22;
}

.flashcard-study-card__example-line {
  display: block;
}

@media (max-width: 800px) {
  .flashcard-study-card__inner {
    min-height: 380px;
  }

  .flashcard-study-card__title {
    font-size: 28px;
  }

  .flashcard-study-card__line {
    font-size: 21px;
  }

  .flashcard-study-card__example {
    font-size: 20px;
  }
}
</style>
