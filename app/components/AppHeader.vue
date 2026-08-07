<script setup lang="ts">
const route = useRoute();

const navigationItems = [
  {
    label: 'Словарь',
    to: '/'
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
  <header class="site-header">
    <div class="site-header__inner">
      <div class="site-header__brand-group">
        <NuxtLink class="brand" to="/">WordPanda</NuxtLink>
        <p class="site-header__tagline">
          Личная база немецких глаголов и их приставочных семейств.
        </p>
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
