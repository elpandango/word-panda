<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    emptyText?: string;
    isEmpty?: boolean;
  }>(),
  {
    emptyText: '',
    isEmpty: false
  }
);
</script>

<template>
  <section class="family-entry-section page-stack-sm">
    <div class="section-row family-entry-section__header">
      <h2 class="section-title">{{ props.title }}</h2>
      <slot name="action" />
    </div>

    <p v-if="props.isEmpty && props.emptyText" class="muted-text">
      {{ props.emptyText }}
    </p>

    <slot v-else />
  </section>
</template>

<style scoped>
.family-entry-section__header {
  align-items: center;
}

@media (max-width: 800px) {
  .family-entry-section__header {
    align-items: flex-start;
  }
}
</style>
