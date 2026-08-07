<script setup lang="ts">
import AppDropdown from '../AppDropdown.vue';

interface SeparableOption {
  label: string;
  value: string;
}

const props = defineProps<{
  prefix: string;
  isSeparable: string;
}>();

const emit = defineEmits<{
  (event: 'update:is-separable', value: string): void;
  (event: 'prefix-input', payload: Event): void;
}>();

const separableOptions: SeparableOption[] = [
  { value: '', label: 'Не указано' },
  { value: 'true', label: 'Отделяемая' },
  { value: 'false', label: 'Неотделяемая' }
];
</script>

<template>
  <label class="form-field">
    <span class="form-label">Приставка</span>
    <input
      :value="props.prefix"
      class="search-input surface-field"
      type="text"
      placeholder="например, ein"
      @input="emit('prefix-input', $event)"
    />
  </label>

  <div class="form-field">
    <span class="form-label">Отделяемость</span>
    <AppDropdown
      :model-value="props.isSeparable"
      :options="separableOptions"
      placeholder="Не указано"
      @update:model-value="emit('update:is-separable', $event)"
    />
  </div>
</template>

<style scoped>
.form-field {
  display: grid;
  gap: 8px;
}

.form-label {
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}
</style>
