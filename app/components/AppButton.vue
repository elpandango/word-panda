<script setup lang="ts">
import { computed } from 'vue';

type AppButtonVariant = 'primary' | 'ghost';
type AppButtonSize = 'sm' | 'md';
type AppButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(
  defineProps<{
    variant?: AppButtonVariant;
    size?: AppButtonSize;
    type?: AppButtonType;
    loading?: boolean;
    disabled?: boolean;
    block?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    loading: false,
    disabled: false,
    block: false
  }
);

const emit = defineEmits<{
  (event: 'click', payload: MouseEvent): void;
}>();

const isDisabled = computed(() => props.disabled || props.loading);

const classes = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  props.block ? 'app-button--block' : '',
  props.loading ? 'is-loading' : ''
]);

function handleClick(event: MouseEvent): void {
  if (isDisabled.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  emit('click', event);
}
</script>

<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :class="classes"
    :aria-busy="loading ? 'true' : undefined"
    @click="handleClick"
  >
    <span v-if="loading" class="app-button__loader" aria-hidden="true" />
    <span class="app-button__label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 12px 16px;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
}

.app-button--md {
  min-height: 44px;
}

.app-button--sm {
  min-height: 37px;
  padding: 9px 15px;
}

.app-button--block {
  width: 100%;
}

.app-button--primary {
  background: var(--accent-strong);
  color: var(--accent-contrast);
  border-color: var(--accent-strong);
}

.app-button--primary:hover:enabled {
  background: color-mix(in srgb, var(--accent-strong) 88%, white 12%);
  border-color: color-mix(in srgb, var(--accent-strong) 88%, white 12%);
}

.app-button--ghost {
  background: var(--surface-elevated);
  color: var(--accent-strong);
  border-color: color-mix(in srgb, var(--surface-border) 100%, white 10%);
}

.app-button--ghost:hover:enabled {
  background: var(--accent-soft);
}

.app-button:disabled {
  cursor: default;
  opacity: 0.72;
}

.app-button.is-loading .app-button__label {
  transform: translateX(0);
}

.app-button__label {
  display: inline-flex;
  align-items: center;
}

.app-button__loader {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: app-button-spin 0.7s linear infinite;
}

@keyframes app-button-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
