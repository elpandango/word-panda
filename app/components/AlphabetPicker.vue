<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    letters: string[];
    selectedLetter: string;
    path?: string;
  }>(),
  {
    path: '/browse'
  }
);
</script>

<template>
  <div class="alphabet-picker" aria-label="Выбор буквы">
    <NuxtLink
      v-for="letter in props.letters"
      :key="letter"
      :to="{ path: props.path, query: { letter } }"
      class="alphabet-picker__item"
      :class="{ 'alphabet-picker__item--active': letter === props.selectedLetter }"
    >
      {{ letter }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.alphabet-picker {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
}

.alphabet-picker__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  background: var(--surface-elevated);
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-family-heading);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.alphabet-picker__item:hover {
  color: var(--accent-strong);
  border-color: color-mix(in srgb, var(--accent) 70%, var(--surface-border));
}

.alphabet-picker__item--active {
  background: var(--accent-soft);
  border-color: color-mix(in srgb, var(--accent) 70%, var(--surface-border));
  color: var(--accent-strong);
}

@media (max-width: 800px) {
  .alphabet-picker {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
