<script setup lang="ts">
const route = useRoute();
const { activeAccent } = useSeasonTheme();

const navigationItems = [
  {
    label: 'Словарь',
    to: '/'
  },
  {
    label: 'Слова',
    to: '/browse'
  },
  {
    label: 'Тренировка',
    to: '/training'
  }
] as const;

function isActive(path: string): boolean {
  if (path === '/') {
    return route.path === '/' || route.path.startsWith('/family/');
  }

  return route.path.startsWith(path);
}
</script>

<template>
  <header class="site-header surface-floating">
    <div class="site-header__inner">
      <div class="site-header__brand-group">
        <div class="site-header__brand-line">
          <HeaderSeasonAccent
            v-if="activeAccent !== 'none'"
            class="site-header__accent"
            :accent="activeAccent"
          />

          <NuxtLink class="brand" to="/">WordPanda</NuxtLink>
        </div>
      </div>

      <nav class="site-nav" aria-label="Основная навигация">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          class="site-nav__link"
          :class="{ 'site-nav__link--active': isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--surface-border);
}

.site-header__inner {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
  position: relative;
}

.site-header__brand-group {
  display: grid;
  position: relative;
  z-index: 1;
}

.site-header__brand-line {
  position: relative;
  display: block;
  padding-right: 76px;
  min-height: 28px;
}

.brand {
  color: var(--accent-strong);
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
}

.site-nav {
  display: none;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.site-nav__link {
  padding: 11px 16px;
  border-radius: 16px;
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-family-body);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.site-nav__link:hover {
  color: var(--accent-strong);
  background: var(--accent-soft);
}

.site-nav__link--active {
  color: var(--accent-strong);
  background: color-mix(in srgb, var(--accent-soft) 100%, white 14%);
}

.site-header__accent {
  width: 76px;
  height: 52px;
}

@media (max-width: 800px) {
  .site-header__inner {
    flex-direction: column;
    align-items: start;
  }

  .site-header__brand-group,
  .site-header__brand-line {
    width: 100%;
  }

  .site-header__accent {
    position: absolute;
    top: -4px;
    right: 0;
    width: 72px;
    height: 48px;
  }
}

@media (min-width: 801px) {
  .site-header__brand-line {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-right: 0;
    min-height: 44px;
  }

  .site-nav {
    display: flex;
  }

  .site-header__accent {
    position: relative;
    top: auto;
    right: auto;
    width: 56px;
    height: 44px;
    transform: scale(0.82);
    transform-origin: center right;
  }
}
</style>
