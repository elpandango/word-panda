<script setup lang="ts">
const route = useRoute();

const navigationItems = [
  {
    label: 'Словарь',
    to: '/',
    icon: 'home'
  },
  {
    label: 'Тренировка',
    to: '/training',
    icon: 'spark'
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
  <nav class="bottom-nav" aria-label="Основная навигация">
    <div class="bottom-nav__inner">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.to"
        :to="item.to"
        class="bottom-nav__item"
        :class="{ 'bottom-nav__item--active': isActive(item.to) }"
      >
        <span class="bottom-nav__icon" aria-hidden="true">
          <svg v-if="item.icon === 'home'" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 10.5L12 4L20 10.5V20H14.5V14H9.5V20H4V10.5Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3L13.9 8.1L19 10L13.9 11.9L12 17L10.1 11.9L5 10L10.1 8.1L12 3Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
            <path
              d="M18.5 15L19.3 17.2L21.5 18L19.3 18.8L18.5 21L17.7 18.8L15.5 18L17.7 17.2L18.5 15Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
        </span>
        <span class="bottom-nav__label">{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>
