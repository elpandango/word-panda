<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    message: string;
    tone?: 'muted' | 'error';
    loading?: boolean;
  }>(),
  {
    title: '',
    tone: 'muted',
    loading: false
  }
);
</script>

<template>
  <section class="info-card surface-calm page-state-card">
    <h1 v-if="props.title">{{ props.title }}</h1>
    <div v-if="props.loading" class="page-state-card__loading">
      <AppSpinner size="md" :label="props.message" />
    </div>
    <p v-else :class="props.tone === 'error' ? 'error-text' : 'muted-text'">{{ props.message }}</p>
  </section>
</template>

<style scoped>
.page-state-card p {
  margin-bottom: 0;
}

.page-state-card__loading {
  display: flex;
  align-items: center;
  min-height: 28px;
}
</style>
