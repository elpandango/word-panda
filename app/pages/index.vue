<script setup lang="ts">
interface HubLinkItem {
  title: string;
  description: string;
  to?: string;
  disabled?: boolean;
}

interface HubSection {
  title: string;
  description: string;
  items: HubLinkItem[];
}

const sections: HubSection[] = [
  {
    title: 'Слова',
    description: 'Переход к поиску по словарю и просмотру слов по буквам.',
    items: [
      {
        title: 'Словарь',
        description: 'Поиск, последние добавленные слова и быстрое создание новой записи.',
        to: '/dictionary'
      },
      {
        title: 'Слова',
        description: 'Алфавитный список базовых слов с быстрым переходом в семейства.',
        to: '/browse'
      }
    ]
  },
  {
    title: 'Тренировка',
    description: 'Отсюда можно запускать уже готовые режимы и видеть, что появится дальше.',
    items: [
      {
        title: 'Карточки',
        description: 'Flip-карточки по уровням и темам с быстрым случайным выбором.',
        to: '/training/cards'
      },
      {
        title: 'Тренировка',
        description: 'Будущий режим. Пока оставим как задел под следующий этап.',
        disabled: true
      }
    ]
  }
];

useSeoMeta({
  title: 'WordPanda',
  description: 'Главная навигация по словарю, карточкам и будущим тренировкам.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <section class="hero-card page-stack-sm surface-calm">
      <p class="eyebrow">Главная</p>
      <h1>Выбери, куда перейти дальше</h1>
      <p class="hero-copy">
        Здесь будет быстрый вход в словарь, карточки и следующие учебные режимы без лишних переходов.
      </p>
    </section>

    <section
      v-for="section in sections"
      :key="section.title"
      class="info-card page-stack-sm surface-calm"
    >
      <div class="page-stack-xs">
        <div class="section-row">
          <h2>{{ section.title }}</h2>
        </div>

        <p class="muted-text">{{ section.description }}</p>
      </div>

      <div class="hub-grid">
        <component
          v-for="item in section.items"
          :key="item.title"
          :is="item.disabled ? 'div' : 'NuxtLink'"
          :to="item.disabled ? undefined : item.to"
          class="hub-card surface-glass"
          :class="{ 'hub-card--disabled': item.disabled }"
        >
          <div class="hub-card__topline">
            <strong class="hub-card__title">{{ item.title }}</strong>
            <span class="hub-card__state">
              {{ item.disabled ? 'Скоро' : 'Открыть' }}
            </span>
          </div>

          <p class="hub-card__copy">{{ item.description }}</p>
        </component>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hub-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.hub-card {
  display: grid;
  gap: 10px;
  padding: 18px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
}

.hub-card:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--accent-strong) 24%, var(--surface-border));
}

.hub-card--disabled {
  opacity: 0.56;
  cursor: not-allowed;
  border-style: dashed;
  background:
    linear-gradient(135deg, rgba(255 255 255 / 0.36), rgba(255 255 255 / 0.18)),
    color-mix(in srgb, var(--surface-card) 90%, var(--text-muted) 10%);
}

.hub-card--disabled:hover {
  transform: none;
  border-color: var(--surface-border);
}

.hub-card__topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: baseline;
}

.hub-card__title {
  font-family: var(--font-family-heading);
  font-size: 22px;
  font-weight: 800;
  line-height: 1.15;
}

.hub-card__state {
  color: var(--accent-strong);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
}

.hub-card--disabled .hub-card__state {
  color: var(--text-muted);
}

.hub-card__copy {
  margin-bottom: 0;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .hub-grid {
    grid-template-columns: 1fr;
  }

  .hub-card__topline {
    flex-direction: column;
    align-items: start;
    gap: 4px;
  }
}
</style>
