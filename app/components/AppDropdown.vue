<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

interface AppDropdownOption {
  label: string;
  value: string;
}

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: AppDropdownOption[];
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    placeholder: 'Выбери вариант',
    disabled: false
  }
);

const emit = defineEmits<{
  (event: 'update:model-value', value: string): void;
}>();

const rootRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const highlightedIndex = ref(-1);
const openDirection = ref<'up' | 'down'>('down');

const selectedOption = computed(() => {
  return props.options.find((option) => option.value === props.modelValue) ?? null;
});

function closeDropdown(): void {
  isOpen.value = false;
  highlightedIndex.value = -1;
}

function updateOpenDirection(): void {
  if (!rootRef.value || !menuRef.value || typeof window === 'undefined') {
    openDirection.value = 'down';
    return;
  }

  const triggerRect = rootRef.value.getBoundingClientRect();
  const menuHeight = menuRef.value.offsetHeight;
  const gap = 8;
  const viewportPadding = 16;
  const spaceBelow = window.innerHeight - triggerRect.bottom - viewportPadding;
  const spaceAbove = triggerRect.top - viewportPadding;

  if (spaceBelow >= menuHeight + gap) {
    openDirection.value = 'down';
    return;
  }

  if (spaceAbove >= menuHeight + gap) {
    openDirection.value = 'up';
    return;
  }

  openDirection.value = spaceBelow >= spaceAbove ? 'down' : 'up';
}

function openDropdown(): void {
  if (props.disabled) {
    return;
  }

  isOpen.value = true;
  highlightedIndex.value = Math.max(
    props.options.findIndex((option) => option.value === props.modelValue),
    0
  );

  nextTick(() => {
    updateOpenDirection();
  });
}

function toggleDropdown(): void {
  if (isOpen.value) {
    closeDropdown();
    return;
  }

  openDropdown();
}

function selectOption(option: AppDropdownOption): void {
  emit('update:model-value', option.value);
  closeDropdown();
}

function moveHighlight(direction: 1 | -1): void {
  if (!props.options.length) {
    return;
  }

  const nextIndex =
    highlightedIndex.value < 0
      ? 0
      : (highlightedIndex.value + direction + props.options.length) % props.options.length;

  highlightedIndex.value = nextIndex;
}

function handleKeydown(event: KeyboardEvent): void {
  if (props.disabled) {
    return;
  }

  if (!isOpen.value && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
    event.preventDefault();
    openDropdown();
    return;
  }

  if (!isOpen.value) {
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    closeDropdown();
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveHighlight(1);
    return;
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveHighlight(-1);
    return;
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();

    const option = props.options[highlightedIndex.value];

    if (option) {
      selectOption(option);
    }
  }
}

function handleDocumentClick(event: MouseEvent): void {
  if (!rootRef.value) {
    return;
  }

  const target = event.target;

  if (target instanceof Node && !rootRef.value.contains(target)) {
    closeDropdown();
  }
}

function handleViewportChange(): void {
  if (!isOpen.value) {
    return;
  }

  updateOpenDirection();
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
  window.addEventListener('resize', handleViewportChange);
  window.addEventListener('scroll', handleViewportChange, true);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick);
  window.removeEventListener('resize', handleViewportChange);
  window.removeEventListener('scroll', handleViewportChange, true);
});
</script>

<template>
  <div ref="rootRef" class="app-dropdown">
    <button
      type="button"
      class="app-dropdown__trigger surface-field"
      :class="{ 'app-dropdown__trigger--open': isOpen }"
      :disabled="disabled"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-haspopup="listbox"
      @click="toggleDropdown"
      @keydown="handleKeydown"
    >
      <span
        class="app-dropdown__label"
        :class="{ 'app-dropdown__label--placeholder': !selectedOption }"
      >
        {{ selectedOption?.label || placeholder }}
      </span>

      <span class="app-dropdown__chevron" :class="{ 'app-dropdown__chevron--open': isOpen }">
        ▾
      </span>
    </button>

    <div
      v-if="isOpen"
      ref="menuRef"
      class="app-dropdown__menu surface-glass"
      :class="{
        'app-dropdown__menu--up': openDirection === 'up',
        'app-dropdown__menu--down': openDirection === 'down'
      }"
      role="listbox"
    >
      <button
        v-for="(option, index) in options"
        :key="option.value"
        type="button"
        class="app-dropdown__option"
        :class="{
          'app-dropdown__option--selected': option.value === modelValue,
          'app-dropdown__option--highlighted': index === highlightedIndex
        }"
        :aria-selected="option.value === modelValue ? 'true' : 'false'"
        @click="selectOption(option)"
        @mouseenter="highlightedIndex = index"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.app-dropdown {
  position: relative;
  width: 100%;
}

.app-dropdown__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-height: 52px;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, var(--surface-border) 100%, white 10%);
  border-radius: 12px;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.app-dropdown__trigger--open {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-focus);
}

.app-dropdown__trigger:disabled {
  cursor: default;
  opacity: 0.72;
}

.app-dropdown__label {
  min-width: 0;
}

.app-dropdown__label--placeholder {
  color: var(--text-muted);
}

.app-dropdown__chevron {
  flex: 0 0 auto;
  color: var(--text-muted);
  transition: transform 0.2s ease;
}

.app-dropdown__chevron--open {
  transform: rotate(180deg);
}

.app-dropdown__menu {
  position: absolute;
  left: 0;
  z-index: 30;
  display: grid;
  width: 100%;
  max-height: min(280px, calc(100vh - 48px));
  padding: 8px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  box-shadow: 0 18px 44px var(--glass-shadow);
  overflow-y: auto;
}

.app-dropdown__menu--down {
  top: calc(100% + 8px);
}

.app-dropdown__menu--up {
  bottom: calc(100% + 8px);
}

.app-dropdown__option {
  width: 100%;
  padding: 11px 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.app-dropdown__option--highlighted,
.app-dropdown__option:hover {
  background: color-mix(in srgb, var(--accent-soft) 100%, white 22%);
}

.app-dropdown__option--selected {
  color: var(--accent-strong);
  font-weight: 700;
}
</style>
