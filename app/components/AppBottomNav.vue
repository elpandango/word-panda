<script setup lang="ts">
const route = useRoute();

const navigationItems = [
  {
    label: 'Словарь',
    to: '/',
    icon: 'home'
  },
  {
    label: 'Слова',
    to: '/browse',
    icon: 'list'
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
    <div class="bottom-nav__inner surface-floating">
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
          <svg v-else-if="item.icon === 'list'" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 7H19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
            <path
              d="M8 12H19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
            <path
              d="M8 17H19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
            <path
              d="M5 7H5.01"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.4"
            />
            <path
              d="M5 12H5.01"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.4"
            />
            <path
              d="M5 17H5.01"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.4"
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

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  padding: 0 0 env(safe-area-inset-bottom, 0px);
  pointer-events: none;
}

.bottom-nav__inner {
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  padding: 8px 8px calc(env(safe-area-inset-bottom, 0px) + 8px);
  border-top: 1px solid var(--surface-border);
  border-radius: 0;
  pointer-events: auto;
}

.bottom-nav__item {
  display: grid;
  justify-items: center;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 16px;
  color: var(--text-muted);
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.bottom-nav__item:hover {
  color: var(--accent-strong);
}

.bottom-nav__item--active {
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.bottom-nav__icon {
  width: 23px;
  height: 23px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bottom-nav__icon svg {
  width: 100%;
  height: 100%;
}

.bottom-nav__label {
  font-family: var(--font-family-body);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

@media (min-width: 801px) {
  .bottom-nav {
    display: none;
  }
}
</style>
