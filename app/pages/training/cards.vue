<script setup lang="ts">
import FlashcardStudyCard from '../../components/training/FlashcardStudyCard.vue';
import type {
  FlashcardItem,
  FlashcardLevel,
  FlashcardsListResponse
} from '../../../shared/types/flashcards';

const selectedLevel = ref<FlashcardLevel>('A1');
const availableLevels = ref<FlashcardLevel[]>([]);
const levelCards = ref<FlashcardItem[]>([]);
const currentCardId = ref('');
const isFlipped = ref(false);
const cardRenderKey = ref(0);
const isLoading = ref(true);
const loadError = ref('');

let loadRequestId = 0;

const levelOptions = computed(() => {
  return availableLevels.value.map((level) => ({
    value: level,
    label: level
  }));
});

const currentCard = computed<FlashcardItem | null>(() => {
  return (
    levelCards.value.find((card) => card.id === currentCardId.value) ?? levelCards.value[0] ?? null
  );
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
    cardRenderKey.value += 1;
    return;
  }

  const availableCards = cards.filter((card) => card.id !== currentCardId.value);
  const source = availableCards.length ? availableCards : cards;
  const randomCard = source[Math.floor(Math.random() * source.length)];

  currentCardId.value = randomCard?.id ?? cards[0]?.id ?? '';
  isFlipped.value = false;
  cardRenderKey.value += 1;
}

function syncCurrentCard(): void {
  const cards = levelCards.value;

  if (!cards.length) {
    currentCardId.value = '';
    isFlipped.value = false;
    cardRenderKey.value += 1;
    return;
  }

  const hasCurrentCard = cards.some((card) => card.id === currentCardId.value);

  if (!hasCurrentCard) {
    currentCardId.value = cards[0]?.id ?? '';
    isFlipped.value = false;
    cardRenderKey.value += 1;
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
          <AppDropdown
            class="cards-toolbar__dropdown"
            :model-value="selectedLevel"
            :options="levelOptions"
            :disabled="isLoading || !levelOptions.length"
            placeholder="Выбери уровень"
            @update:model-value="selectedLevel = $event as FlashcardLevel"
          />
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

      <div v-if="currentCard" class="cards-topic">
        <p class="cards-topic__title">Тема: {{ currentCard.topic }}</p>
        <p class="muted-text">Клик по карточке переворачивает её.</p>
      </div>

      <p v-if="!isLoading && !loadError && !currentCard" class="muted-text">
        Для этого уровня карточек пока нет.
      </p>

      <FlashcardStudyCard
        v-if="!isLoading && !loadError && currentCard"
        :key="cardRenderKey"
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

.cards-toolbar__group {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}

.cards-toolbar__actions {
  align-items: center;
}

.cards-toolbar__label {
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

.cards-toolbar__dropdown {
  width: 100%;
}

.cards-state {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.cards-topic {
  display: grid;
  gap: 6px;
}

.cards-topic__title {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
}

.cards-error {
  margin-bottom: 0;
  color: #9f4538;
}

@media (max-width: 800px) {
  .cards-toolbar__group {
    align-items: flex-start;
  }
}
</style>
