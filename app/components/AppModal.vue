<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    open: boolean;
    title?: string;
    closeOnOverlay?: boolean;
    closeOnEscape?: boolean;
  }>(),
  {
    title: '',
    closeOnOverlay: true,
    closeOnEscape: true
  }
);

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const canUseDom = typeof document !== 'undefined';
const previousBodyOverflow = ref('');

function close(): void {
  emit('close');
}

function handleKeydown(event: KeyboardEvent): void {
  if (!props.open || !props.closeOnEscape || event.key !== 'Escape') {
    return;
  }

  close();
}

function syncBodyScrollLock(isOpen: boolean): void {
  if (!canUseDom) {
    return;
  }

  if (isOpen) {
    previousBodyOverflow.value = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return;
  }

  document.body.style.overflow = previousBodyOverflow.value;
}

watch(
  () => props.open,
  (isOpen) => {
    syncBodyScrollLock(isOpen);
  },
  { immediate: true }
);

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  syncBodyScrollLock(false);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="app-modal"
      role="dialog"
      aria-modal="true"
      @click.self="closeOnOverlay ? close() : undefined"
    >
      <div class="app-modal__backdrop" />

      <div class="app-modal__panel surface-calm">
        <header v-if="title || $slots.header" class="app-modal__header">
          <slot name="header">
            <h3 class="app-modal__title">{{ title }}</h3>
          </slot>

          <button type="button" class="app-modal__close" aria-label="Закрыть" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div class="app-modal__body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.app-modal {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.app-modal__backdrop {
  position: absolute;
  inset: 0;
  background: var(--modal-backdrop);
  backdrop-filter: blur(6px);
}

.app-modal__panel {
  position: relative;
  width: min(100%, 640px);
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  border-radius: 16px;
  border: 1px solid var(--surface-border);
}

.app-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--surface-border);
}

.app-modal__title {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
}

.app-modal__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border: 1px solid color-mix(in srgb, var(--surface-border) 100%, white 10%);
  border-radius: 16px;
  background: var(--surface-elevated);
  color: var(--accent-strong);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.app-modal__close:hover {
  background: var(--accent-soft);
  border-color: color-mix(in srgb, var(--surface-border) 100%, black 16%);
}

.app-modal__close span {
  font-size: 24px;
  line-height: 1;
  transform: translateY(-1px);
}

.app-modal__body {
  padding: 20px;
}

@media (min-width: 801px) {
  .app-modal {
    align-items: center;
    padding: 24px;
  }

  .app-modal__panel {
    max-height: calc(100vh - 48px);
  }
}
</style>
