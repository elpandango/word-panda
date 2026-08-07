<script setup lang="ts">
const isVisible = import.meta.dev;

const { activeOption, activeSeason, autoSeason, seasonOverride, seasonThemeOptions, setSeasonOverride } =
  useSeasonTheme();

const seasonLabelMap = {
  spring: 'Весна',
  summer: 'Лето',
  autumn: 'Осень',
  winter: 'Зима'
} as const;

const activeSeasonLabel = computed(() => seasonLabelMap[activeSeason.value]);
const autoSeasonLabel = computed(() => seasonLabelMap[autoSeason.value]);
</script>

<template>
  <aside v-if="isVisible" class="season-debug" aria-label="Переключение сезонной темы">
    <div class="season-debug__header">
      <div>
        <p class="season-debug__eyebrow">Theme debug</p>
        <strong class="season-debug__title">Сезонная атмосфера</strong>
      </div>
      <span class="season-debug__status">
        Сейчас: {{ activeSeasonLabel }}
      </span>
    </div>

    <p class="season-debug__copy">
      Авто сейчас выберет <strong>{{ autoSeasonLabel }}</strong
      >. Можно вручную переключить и посмотреть палитры.
    </p>

    <div class="season-debug__tabs" role="tablist" aria-label="Сезоны">
      <button
        v-for="option in seasonThemeOptions"
        :key="option.key"
        class="season-debug__tab"
        :class="{ 'season-debug__tab--active': seasonOverride === option.key }"
        type="button"
        role="tab"
        :aria-selected="seasonOverride === option.key ? 'true' : 'false'"
        @click="setSeasonOverride(option.key)"
      >
        <span>{{ option.label }}</span>
        <small>{{ option.note }}</small>
      </button>
    </div>

    <p class="season-debug__hint">
      Режим: {{ activeOption.label }}. Этот блок виден только в dev.
    </p>
  </aside>
</template>
