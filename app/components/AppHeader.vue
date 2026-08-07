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
        <NuxtLink class="brand" to="/">WordPanda</NuxtLink>
        <p class="site-header__tagline">
          Личная база немецких глаголов и их приставочных семейств.
        </p>
      </div>

      <div
        v-if="activeAccent !== 'none'"
        class="site-header__accent"
        :data-accent="activeAccent"
        aria-hidden="true"
      >
        <template v-if="activeAccent === 'spring-blossom'">
          <span class="accent-leaf accent-leaf--spring-main" />
          <span class="accent-leaf accent-leaf--spring-soft" />
          <span class="accent-bud accent-bud--one" />
          <span class="accent-bud accent-bud--two" />
          <span class="accent-stem accent-stem--spring" />
        </template>

        <template v-else-if="activeAccent === 'summer-bamboo'">
          <span class="accent-leaf accent-leaf--summer-main" />
          <span class="accent-leaf accent-leaf--summer-soft" />
          <span class="accent-bud accent-bud--summer-one" />
          <span class="accent-bud accent-bud--summer-two" />
          <span class="accent-stem accent-stem--summer" />
        </template>

        <template v-else-if="activeAccent === 'autumn-leaves'">
          <span class="accent-leaf accent-leaf--rust" />
          <span class="accent-leaf accent-leaf--gold" />
          <span class="accent-stem accent-stem--autumn" />
        </template>

        <template v-else>
          <span class="accent-tree">
            <span class="accent-tree__tier accent-tree__tier--top" />
            <span class="accent-tree__tier accent-tree__tier--middle" />
            <span class="accent-tree__tier accent-tree__tier--bottom" />
            <span class="accent-tree__trunk" />
            <span class="accent-tree__ornament accent-tree__ornament--red" />
            <span class="accent-tree__ornament accent-tree__ornament--gold" />
            <span class="accent-tree__ornament accent-tree__ornament--blue" />
            <span class="accent-tree__star" />
          </span>
        </template>
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
}

.site-header__brand-group {
  display: grid;
  gap: 4px;
  position: relative;
  z-index: 1;
}

.brand {
  color: var(--accent-strong);
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
}

.site-header__tagline {
  margin-bottom: 0;
  color: var(--text-muted);
  font-size: 16px;
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
  position: absolute;
  top: 10px;
  right: 16px;
  width: 76px;
  height: 52px;
  pointer-events: none;
  opacity: 0.92;
}

.accent-leaf,
.accent-star,
.accent-tree,
.accent-tree__tier,
.accent-tree__trunk,
.accent-tree__ornament,
.accent-tree__star,
.accent-bud,
.accent-stem {
  position: absolute;
}

.accent-leaf {
  width: 16px;
  height: 10px;
  border-radius: 16px 2px 16px 2px;
  transform: rotate(-24deg);
  box-shadow: 0 4px 12px rgba(145, 90, 47, 0.18);
}

.accent-leaf--rust {
  top: 6px;
  right: 8px;
  background: linear-gradient(180deg, rgba(214, 132, 83, 0.95) 0%, rgba(157, 92, 50, 0.95) 100%);
}

.accent-leaf--gold {
  top: 24px;
  right: 24px;
  width: 14px;
  height: 9px;
  transform: rotate(20deg);
  background: linear-gradient(180deg, rgba(229, 186, 112, 0.95) 0%, rgba(187, 135, 57, 0.95) 100%);
}

.accent-leaf--spring-main {
  top: 6px;
  right: 8px;
  background: linear-gradient(180deg, rgba(177, 220, 144, 0.96) 0%, rgba(116, 174, 92, 0.96) 100%);
  box-shadow: 0 4px 12px rgba(109, 165, 86, 0.16);
}

.accent-leaf--spring-soft {
  top: 24px;
  right: 24px;
  width: 14px;
  height: 9px;
  transform: rotate(20deg);
  background: linear-gradient(180deg, rgba(255, 208, 224, 0.96) 0%, rgba(227, 154, 183, 0.94) 100%);
  box-shadow: 0 4px 12px rgba(215, 147, 174, 0.16);
}

.accent-bud {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 234, 241, 0.98) 0%, rgba(237, 175, 198, 0.96) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.52),
    0 3px 10px rgba(223, 148, 179, 0.16);
}

.accent-bud--one {
  top: 12px;
  right: 28px;
}

.accent-bud--two {
  top: 30px;
  right: 12px;
  width: 6px;
  height: 6px;
}

.accent-leaf--summer-main {
  top: 6px;
  right: 8px;
  width: 17px;
  height: 10px;
  background: linear-gradient(180deg, rgba(128, 197, 95, 0.96) 0%, rgba(72, 138, 53, 0.96) 100%);
  box-shadow: 0 4px 12px rgba(76, 143, 58, 0.15);
}

.accent-leaf--summer-soft {
  top: 24px;
  right: 24px;
  width: 14px;
  height: 9px;
  transform: rotate(20deg);
  background: linear-gradient(180deg, rgba(184, 225, 132, 0.96) 0%, rgba(104, 168, 75, 0.96) 100%);
  box-shadow: 0 4px 12px rgba(90, 149, 65, 0.14);
}

.accent-bud--summer-one {
  top: 12px;
  right: 28px;
  width: 6px;
  height: 6px;
  background: linear-gradient(180deg, rgba(220, 243, 186, 0.98) 0%, rgba(156, 201, 122, 0.96) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.42),
    0 3px 10px rgba(106, 159, 77, 0.15);
}

.accent-bud--summer-two {
  top: 30px;
  right: 12px;
  width: 5px;
  height: 5px;
  background: linear-gradient(180deg, rgba(214, 239, 177, 0.98) 0%, rgba(147, 193, 111, 0.96) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.42),
    0 3px 10px rgba(106, 159, 77, 0.14);
}

.accent-tree {
  top: 3px;
  right: 4px;
  width: 34px;
  height: 40px;
}

.accent-tree__tier {
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #3f7d47;
  filter: drop-shadow(0 1px 4px rgba(57, 98, 63, 0.14));
}

.accent-tree__tier--top {
  top: 6px;
  border-left-width: 6px;
  border-right-width: 6px;
  border-bottom-width: 8px;
  border-bottom-color: #5a9b61;
}

.accent-tree__tier--middle {
  top: 13px;
  border-left-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 10px;
  border-bottom-color: #4c8b55;
}

.accent-tree__tier--bottom {
  top: 21px;
  border-left-width: 10px;
  border-right-width: 10px;
  border-bottom-width: 11px;
  border-bottom-color: #3d7545;
}

.accent-tree__trunk {
  left: 50%;
  bottom: 4px;
  width: 4px;
  height: 6px;
  border-radius: 2px;
  background: linear-gradient(180deg, #9c7247 0%, #785331 100%);
  transform: translateX(-50%);
}

.accent-tree__ornament {
  width: 4px;
  height: 4px;
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.48);
}

.accent-tree__ornament--red {
  top: 17px;
  left: 9px;
  background: linear-gradient(180deg, #db605e 0%, #b33431 100%);
}

.accent-tree__ornament--gold {
  top: 14px;
  right: 9px;
  background: linear-gradient(180deg, #f0cf7c 0%, #c9942b 100%);
}

.accent-tree__ornament--blue {
  top: 23px;
  right: 12px;
  background: linear-gradient(180deg, #96cae8 0%, #5b90bc 100%);
}

.accent-tree__star {
  top: 1px;
  left: 50%;
  width: 6px;
  height: 6px;
  color: #f1cf73;
  transform: translateX(-50%);
}

.accent-tree__star::before,
.accent-tree__star::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2px;
  background: currentColor;
}

.accent-tree__star::before {
  transform: rotate(45deg);
}

.accent-tree__star::after {
  transform: rotate(-45deg);
}

.accent-stem {
  width: 40px;
  height: 2px;
  border-radius: 999px;
  opacity: 0.55;
}

.accent-stem--spring {
  top: 21px;
  right: 14px;
  background: linear-gradient(90deg, rgba(111, 160, 92, 0) 0%, rgba(111, 160, 92, 0.8) 100%);
  transform: rotate(-12deg);
}

.accent-stem--summer {
  top: 21px;
  right: 14px;
  background: linear-gradient(90deg, rgba(88, 144, 66, 0) 0%, rgba(88, 144, 66, 0.82) 100%);
  transform: rotate(-12deg);
}

.accent-stem--autumn {
  top: 21px;
  right: 14px;
  background: linear-gradient(90deg, rgba(120, 94, 53, 0) 0%, rgba(120, 94, 53, 0.8) 100%);
  transform: rotate(-12deg);
}

@media (max-width: 800px) {
  .site-header__inner {
    flex-direction: column;
    align-items: start;
    position: relative;
  }

  .site-header__tagline {
    display: none;
  }

  .site-header__accent {
    top: 8px;
    right: 0;
    width: 72px;
    height: 48px;
  }
}

@media (min-width: 801px) {
  .site-nav {
    display: flex;
  }

  .site-header__accent {
    top: 14px;
    right: 190px;
  }
}
</style>
