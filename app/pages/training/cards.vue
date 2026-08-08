<script setup lang="ts">
import FlashcardStudyCard from '../../components/training/FlashcardStudyCard.vue';
import { type FlashcardItem, type FlashcardLevel, flashcardLevels, flashcards } from '../../data/flashcards';

const selectedLevel = ref<FlashcardLevel>(flashcardLevels[0] ?? 'C1');
const currentCardId = ref('');
const isFlipped = ref(false);

const levelCards = computed(() => {
  return flashcards.filter((card) => card.level === selectedLevel.value);
});

const currentCard = computed<FlashcardItem | null>(() => {
  return levelCards.value.find((card) => card.id === currentCardId.value) ?? levelCards.value[0] ?? null;
});

function pickRandomCard(): void {
  const cards = levelCards.value;

  if (!cards.length) {
    currentCardId.value = '';
    return;
  }

  if (cards.length === 1) {
    currentCardId.value = cards[0]?.id ?? '';
    isFlipped.value = false;
    return;
  }

  const availableCards = cards.filter((card) => card.id !== currentCardId.value);
  const source = availableCards.length ? availableCards : cards;
  const randomCard = source[Math.floor(Math.random() * source.length)];

  currentCardId.value = randomCard?.id ?? cards[0]?.id ?? '';
  isFlipped.value = false;
}

watch(
  selectedLevel,
  () => {
    pickRandomCard();
  },
  { immediate: true }
);

function toggleCard(): void {
  isFlipped.value = !isFlipped.value;
}

useSeoMeta({
  title: 'Карточки | WordPanda',
  description: 'Мини-тренировка по карточкам с немецкой лексикой по уровням.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <NuxtLink class="back-link" to="/training">← К тренировкам</NuxtLink>

    <section class="hero-card page-stack-sm surface-calm">
      <p class="eyebrow">Карточки</p>
      <h1>Лексические карточки</h1>
      <p class="hero-copy">
        MVP для будущего режима тренировок: выбирай уровень, открывай случайную карточку и
        переворачивай ее по клику.
      </p>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <div class="cards-toolbar">
        <div class="cards-toolbar__group">
          <span class="cards-toolbar__label">Уровень</span>
          <div class="cards-toolbar__chips">
            <button
              v-for="level in flashcardLevels"
              :key="level"
              type="button"
              class="cards-toolbar__chip"
              :class="{ 'cards-toolbar__chip--active': level === selectedLevel }"
              @click="selectedLevel = level"
            >
              {{ level }}
            </button>
          </div>
        </div>

        <div class="cards-toolbar__actions">
          <span class="muted-text">{{ levelCards.length }} карточек</span>
          <AppButton size="sm" @click="pickRandomCard">Случайная карточка</AppButton>
        </div>
      </div>

      <p v-if="currentCard" class="muted-text">
        Тема: {{ currentCard.topic }}. Источник: tutor photo. Клик по карточке переворачивает её.
      </p>

      <p v-if="!currentCard" class="muted-text">
        Для этого уровня карточек пока нет.
      </p>

      <FlashcardStudyCard
        v-else
        :card="currentCard"
        :flipped="isFlipped"
        @toggle="toggleCard"
      />
    </section>
  </main>
</template>

<style scoped>
.cards-toolbar {
  display: grid;
  gap: 16px;
}

.cards-toolbar__group,
.cards-toolbar__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.cards-toolbar__label {
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

.cards-toolbar__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cards-toolbar__chip {
  padding: 10px 14px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  background: var(--surface-elevated);
  color: var(--text-muted);
  font-family: var(--font-family-body);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.cards-toolbar__chip--active {
  background: var(--accent-soft);
  border-color: color-mix(in srgb, var(--accent) 65%, var(--surface-border));
  color: var(--accent-strong);
}

@media (max-width: 800px) {
  .cards-toolbar__group,
  .cards-toolbar__actions {
    align-items: flex-start;
  }
}
</style>
