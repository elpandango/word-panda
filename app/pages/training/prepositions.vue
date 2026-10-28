<script setup lang="ts">
import PrepositionVerbCard from '../../components/training/PrepositionVerbCard.vue';
import { prepositionVerbCards } from '../../data/preposition-verb-cards';
import { type PrepositionVerbLevel, prepositionVerbLevels } from '../../types/preposition-verbs';

const selectedLevel = ref<PrepositionVerbLevel>('B1');
const selectedDay = ref(1);
const cardsSection = ref<HTMLElement | null>(null);

const levelOptions = prepositionVerbLevels.map((level) => ({
  value: level,
  label: level
}));

const dayCount = computed(() => {
  return Math.max(...prepositionVerbCards[selectedLevel.value].map((card) => card.day));
});

const days = computed(() => {
  return Array.from({ length: dayCount.value }, (_, index) => index + 1);
});

const dayOptions = computed(() => {
  return days.value.map((day) => ({ value: String(day), label: `День ${day}` }));
});

const cardsForDay = computed(() => {
  return prepositionVerbCards[selectedLevel.value].filter((card) => card.day === selectedDay.value);
});

watch(selectedLevel, () => {
  selectedDay.value = 1;
});

async function changeDay(direction: -1 | 1): Promise<void> {
  const day = selectedDay.value + direction;

  if (day < 1 || day > dayCount.value) {
    return;
  }

  selectedDay.value = day;
  await nextTick();

  if (!cardsSection.value) {
    return;
  }

  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
  const top = cardsSection.value.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
}

useSeoMeta({
  title: 'Verben mit Präpositionen | WordPanda',
  description: 'Тренировка немецких глаголов с предлогами для уровней B1 и B2.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <NuxtLink class="back-link" to="/training">← К тренировкам</NuxtLink>

    <section class="hero-card page-stack-sm surface-calm">
      <p class="eyebrow">Тренировка</p>
      <h1>Verben mit Präpositionen</h1>
      <p class="hero-copy">
        Учим глаголы с предлогами небольшими порциями: пять карточек на один день.
      </p>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <div class="preposition-toolbar">
        <div class="preposition-toolbar__selectors">
          <div class="preposition-toolbar__level">
            <span class="preposition-toolbar__label">Уровень</span>
            <AppDropdown
              class="preposition-toolbar__dropdown"
              :model-value="selectedLevel"
              :options="levelOptions"
              @update:model-value="selectedLevel = $event as PrepositionVerbLevel"
            />
          </div>

          <div class="preposition-toolbar__day">
            <span class="preposition-toolbar__label">День</span>
            <AppDropdown
              :model-value="String(selectedDay)"
              :options="dayOptions"
              @update:model-value="selectedDay = Number($event)"
            />
          </div>
        </div>

        <p class="preposition-toolbar__summary">
          {{ prepositionVerbCards[selectedLevel].length }} карточек · {{ dayCount }} дней
        </p>
      </div>

      <div class="day-picker" aria-label="Выбор дня">
        <button
          v-for="day in days"
          :key="day"
          type="button"
          class="day-picker__button"
          :class="{ 'day-picker__button--active': day === selectedDay }"
          :aria-pressed="day === selectedDay ? 'true' : 'false'"
          @click="selectedDay = day"
        >
          День {{ day }}
        </button>
      </div>
    </section>

    <section
      ref="cardsSection"
      class="preposition-cards"
      :aria-label="`Карточки: день ${selectedDay}`"
    >
      <div class="preposition-cards__heading">
        <p class="eyebrow">{{ selectedLevel }}</p>
        <h2>День {{ selectedDay }}</h2>
        <p class="muted-text">Пять глаголов для сегодняшней мини-сессии.</p>
      </div>

      <div class="preposition-cards__list">
        <PrepositionVerbCard
          v-for="card in cardsForDay"
          :key="card.id"
          :card="card"
          :level="selectedLevel"
        />
      </div>

      <nav class="day-navigation" aria-label="Переход между днями">
        <AppButton
          v-if="selectedDay > 1"
          variant="ghost"
          class="day-navigation__button"
          @click="changeDay(-1)"
        >
          ← Предыдущий день
        </AppButton>
        <AppButton
          v-if="selectedDay < dayCount"
          class="day-navigation__button"
          @click="changeDay(1)"
        >
          Следующий день →
        </AppButton>
      </nav>
    </section>
  </main>
</template>

<style scoped>
.preposition-toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.preposition-toolbar__selectors {
  width: min(100%, 260px);
}

.preposition-toolbar__level,
.preposition-toolbar__day {
  display: grid;
  gap: 8px;
  min-width: 0;
  width: 100%;
}

.preposition-toolbar__day {
  display: none;
}

.preposition-toolbar__label {
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

.preposition-toolbar__dropdown {
  width: 100%;
}

.preposition-toolbar__summary {
  margin: 0;
  color: var(--text-muted);
  font-weight: 700;
}

.day-picker {
  display: flex;
  gap: 8px;
  margin-inline: -4px;
  padding: 4px;
  overflow-x: auto;
  scrollbar-width: thin;
}

.day-picker__button {
  flex: 0 0 auto;
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  background: color-mix(in srgb, var(--surface-card) 76%, transparent);
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.day-picker__button:not(.day-picker__button--active):hover {
  color: var(--accent-strong);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--surface-border));
}

.day-picker__button--active {
  border-color: var(--accent-strong);
  background: var(--accent-strong);
  color: white;
}

.preposition-cards {
  display: grid;
  gap: 16px;
  width: min(100%, 760px);
  margin-inline: auto;
}

.preposition-cards__heading {
  display: grid;
  gap: 4px;
}

.preposition-cards__heading .eyebrow,
.preposition-cards__heading h2,
.preposition-cards__heading p {
  margin-bottom: 0;
}

.preposition-cards__heading h2 {
  font-size: 28px;
}

.preposition-cards__list {
  display: grid;
  gap: 14px;
}

.day-navigation {
  display: flex;
  gap: 12px;
}

.day-navigation__button {
  flex: 1 1 0;
  min-width: 0;
}

@media (max-width: 800px) {
  .preposition-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .preposition-toolbar__selectors {
    display: flex;
    gap: 12px;
    width: 100%;
  }

  .preposition-toolbar__level,
  .preposition-toolbar__day {
    flex: 1 1 0;
  }

  .preposition-toolbar__day {
    display: grid;
  }

  .day-picker {
    display: none;
  }
}
</style>
