<script setup lang="ts">
import FlashcardStudyCard from '../../components/training/FlashcardStudyCard.vue';
import type {
  FlashcardItem,
  FlashcardLevel,
  FlashcardsListResponse
} from '../../../shared/types/flashcards';

const selectedLevel = ref<FlashcardLevel>('C1');
const availableLevels = ref<FlashcardLevel[]>([]);
const levelCards = ref<FlashcardItem[]>([]);
const currentCardId = ref('');
const isFlipped = ref(false);
const isLoading = ref(true);
const loadError = ref('');

let loadRequestId = 0;

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

function syncCurrentCard(): void {
  const cards = levelCards.value;

  if (!cards.length) {
    currentCardId.value = '';
    isFlipped.value = false;
    return;
  }

  const hasCurrentCard = cards.some((card) => card.id === currentCardId.value);

  if (!hasCurrentCard) {
    currentCardId.value = cards[0]?.id ?? '';
    isFlipped.value = false;
  }
}

async function loadCardsForLevel(level: FlashcardLevel): Promise<void> {
  const requestId = ++loadRequestId;

  isLoading.value = true;
  loadError.value = '';

  try {
    const response = await $fetch<FlashcardsListResponse>('/api/flashcards', {
      query: { level }
    });

    if (requestId !== loadRequestId) {
      return;
    }

    availableLevels.value = response.levels;
    levelCards.value = response.items;

    if (response.level && response.level !== selectedLevel.value) {
      selectedLevel.value = response.level;
      return;
    }

    syncCurrentCard();
  } catch (error) {
    if (requestId !== loadRequestId) {
      return;
    }

    levelCards.value = [];
    currentCardId.value = '';
    loadError.value =
      error instanceof Error ? error.message : 'Не удалось загрузить карточки. Попробуй еще раз.';
  } finally {
    if (requestId === loadRequestId) {
      isLoading.value = false;
    }
  }
}

watch(selectedLevel, () => {
  void loadCardsForLevel(selectedLevel.value);
});

onMounted(() => {
  void loadCardsForLevel(selectedLevel.value);
});

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
              v-for="level in availableLevels"
              :key="level"
              type="button"
              class="cards-toolbar__chip"
              :class="{ 'cards-toolbar__chip--active': level === selectedLevel }"
              :disabled="isLoading"
              @click="selectedLevel = level"
            >
              {{ level }}
            </button>
          </div>
        </div>

        <div class="cards-toolbar__actions">
          <span class="muted-text">{{ levelCards.length }} карточек</span>
          <AppButton size="sm" :disabled="isLoading || !levelCards.length" @click="pickRandomCard">
            Случайная карточка
          </AppButton>
        </div>
      </div>

      <div v-if="isLoading" class="cards-state">
        <AppSpinner size="md" />
        <span class="muted-text">Загружаем карточки...</span>
      </div>

      <p v-else-if="loadError" class="cards-error">
        {{ loadError }}
      </p>

      <p v-if="currentCard" class="muted-text">
        Тема: {{ currentCard.topic }}. Источник: {{ currentCard.source }}. Клик по карточке
        переворачивает её.
      </p>

      <p v-if="!isLoading && !loadError && !currentCard" class="muted-text">
        Для этого уровня карточек пока нет.
      </p>

      <FlashcardStudyCard
        v-if="!isLoading && !loadError && currentCard"
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

.cards-toolbar__chip:disabled {
  cursor: wait;
  opacity: 0.7;
}

.cards-toolbar__chip--active {
  background: var(--accent-soft);
  border-color: color-mix(in srgb, var(--accent) 65%, var(--surface-border));
  color: var(--accent-strong);
}

.cards-state {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.cards-error {
  margin-bottom: 0;
  color: #9f4538;
}

@media (max-width: 800px) {
  .cards-toolbar__group,
  .cards-toolbar__actions {
    align-items: flex-start;
  }
}
</style>
