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

      <div class="app-modal__panel">
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
