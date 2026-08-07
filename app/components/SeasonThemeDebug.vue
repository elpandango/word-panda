<script setup lang="ts">
const isVisible = import.meta.dev;
const isExpanded = useState<boolean>('season-theme-debug-expanded', () => false);

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
const accentLabelMap = {
  none: 'без акцента',
  'spring-blossom': 'весеннее цветение',
  'summer-bamboo': 'летний бамбук',
  'autumn-leaves': 'осенние листья',
  'winter-holiday': 'декабрьский holiday'
} as const;
const { activeAccent, autoAccent } = useSeasonTheme();
const activeAccentLabel = computed(() => accentLabelMap[activeAccent.value]);
const autoAccentLabel = computed(() => accentLabelMap[autoAccent.value]);

function toggleExpanded(): void {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <div v-if="isVisible" class="season-debug-wrap">
    <aside
      v-if="isExpanded"
      class="season-debug surface-floating"
      aria-label="Переключение сезонной темы"
    >
      <div class="season-debug__header">
        <div>
          <p class="season-debug__eyebrow">Theme debug</p>
          <strong class="season-debug__title">Сезонная атмосфера</strong>
        </div>
        <div class="season-debug__header-actions">
          <span class="season-debug__status">
            Сейчас: {{ activeSeasonLabel }}
          </span>
          <button class="season-debug__close" type="button" @click="toggleExpanded">
            Свернуть
          </button>
        </div>
      </div>

      <p class="season-debug__copy">
        Авто сейчас выберет <strong>{{ autoSeasonLabel }}</strong
        > и акцент <strong>{{ autoAccentLabel }}</strong
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
        Режим: {{ activeOption.label }}, акцент: {{ activeAccentLabel }}. Этот блок виден только в dev.
      </p>
    </aside>

    <button
      class="season-debug-toggle surface-floating"
      type="button"
      :aria-expanded="isExpanded ? 'true' : 'false'"
      @click="toggleExpanded"
    >
      <span class="season-debug-toggle__dot" aria-hidden="true" />
      <span>{{ activeSeasonLabel }}</span>
      <small>{{ isExpanded ? 'Скрыть' : 'Показать theme debug' }}</small>
    </button>
  </div>
</template>

<style scoped>
.season-debug {
  position: fixed;
  right: 16px;
  bottom: 84px;
  z-index: 25;
  width: min(320px, calc(100vw - 32px));
  padding: 14px;
  border: 1px solid var(--surface-border);
  border-radius: 22px;
}

.season-debug-wrap {
  position: fixed;
  right: 16px;
  bottom: 84px;
  z-index: 25;
  display: grid;
  justify-items: end;
  gap: 10px;
}

.season-debug__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}

.season-debug__header-actions {
  display: grid;
  gap: 8px;
  justify-items: end;
}

.season-debug__eyebrow,
.season-debug__copy,
.season-debug__hint {
  margin: 0;
}

.season-debug__eyebrow {
  color: var(--accent);
  font-family: var(--font-family-heading);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.season-debug__title {
  display: block;
  margin-top: 4px;
  color: var(--text-primary);
  font-family: var(--font-family-heading);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
}

.season-debug__status {
  padding: 7px 10px;
  border-radius: 16px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: capitalize;
}

.season-debug__copy,
.season-debug__hint {
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.45;
}

.season-debug__close {
  border: 0;
  background: transparent;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
}

.season-debug__tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin: 14px 0 12px;
}

.season-debug__tab {
  display: grid;
  gap: 4px;
  align-content: start;
  min-height: 64px;
  padding: 10px 12px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--calm-strong) 82%, white 18%) 0%, color-mix(in srgb, var(--calm-light) 92%, transparent) 100%);
  color: var(--text-primary);
  text-align: left;
  box-shadow:
    inset 0 1px 0 var(--calm-edge),
    0 12px 28px var(--calm-shadow);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.season-debug__tab:hover {
  transform: translateY(-1px);
}

.season-debug__tab small {
  color: var(--text-muted);
  font-size: 11px;
  line-height: 1.35;
}

.season-debug__tab--active {
  border-color: color-mix(in srgb, var(--accent) 60%, white 40%);
  background: color-mix(in srgb, var(--accent-soft) 100%, white 20%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
}

.season-debug-toggle {
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto;
  gap: 8px 10px;
  align-items: center;
  padding: 10px 14px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  color: var(--text-primary);
}

.season-debug-toggle small {
  grid-column: 2;
  color: var(--text-muted);
  font-size: 11px;
  line-height: 1.2;
}

.season-debug-toggle__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

@media (max-width: 800px) {
  .season-debug-wrap {
    top: 72px;
    right: 12px;
    left: auto;
    bottom: auto;
    justify-items: end;
  }

  .season-debug {
    top: auto;
    right: auto;
    left: auto;
    bottom: auto;
    width: min(300px, calc(100vw - 24px));
    max-width: calc(100vw - 24px);
  }

  .season-debug-toggle {
    justify-content: start;
    width: auto;
    max-width: min(300px, calc(100vw - 24px));
  }
}
</style>
