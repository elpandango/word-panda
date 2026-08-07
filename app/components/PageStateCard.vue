<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    message: string;
    tone?: 'muted' | 'error';
  }>(),
  {
    title: '',
    tone: 'muted'
  }
);
</script>

<template>
  <section class="info-card surface-calm page-state-card">
    <h1 v-if="props.title">{{ props.title }}</h1>
    <p :class="props.tone === 'error' ? 'error-text' : 'muted-text'">{{ props.message }}</p>
  </section>
</template>

<style scoped>
.page-state-card p {
  margin-bottom: 0;
}
</style>
