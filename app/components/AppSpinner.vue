<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md';
    label?: string;
  }>(),
  {
    size: 'sm',
    label: 'Загрузка'
  }
);
</script>

<template>
  <span class="app-spinner" :class="`app-spinner--${size}`" :aria-label="label" role="status" />
</template>

<style scoped>
.app-spinner {
  display: inline-block;
  border: 2px solid color-mix(in srgb, var(--surface-border) 100%, white 10%);
  border-right-color: var(--accent);
  border-radius: 50%;
  animation: app-spinner-rotate 0.75s linear infinite;
  vertical-align: middle;
}

.app-spinner--sm {
  width: 16px;
  height: 16px;
}

.app-spinner--md {
  width: 22px;
  height: 22px;
}

@keyframes app-spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
