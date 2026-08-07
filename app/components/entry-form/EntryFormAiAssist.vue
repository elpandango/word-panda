<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    disabled?: boolean;
    isPending?: boolean;
    errorMessage?: string;
  }>(),
  {
    loading: false,
    disabled: false,
    isPending: false,
    errorMessage: ''
  }
);

const emit = defineEmits<{
  (event: 'trigger'): void;
}>();
</script>

<template>
  <div class="form-ai-assist">
    <div class="form-ai-assist__row">
      <p class="form-ai-assist__copy">
        Введи слово, и AI попробует заполнить перевод, пояснение и пример.
      </p>

      <AppButton
        class="form-ai-assist__button"
        :class="{ 'form-ai-assist__button--pending': props.isPending }"
        type="button"
        variant="ghost"
        size="sm"
        :loading="props.loading"
        :disabled="props.disabled"
        @click="emit('trigger')"
      >
        Заполнить с помощью ИИ
      </AppButton>
    </div>

    <p v-if="props.errorMessage" class="error-text form-ai-assist__error">
      {{ props.errorMessage }}
    </p>
  </div>
</template>

<style scoped>
.form-ai-assist {
  display: grid;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--surface-border) 100%, white 12%);
  border-radius: 16px;
  background: color-mix(in srgb, var(--surface-elevated) 88%, white 12%);
}

.form-ai-assist__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.form-ai-assist__copy {
  margin: 0;
  color: var(--text-muted);
  font-family: var(--font-family-body);
  font-size: 14px;
  line-height: 1.45;
}

.form-ai-assist__error {
  margin: 0;
}

.form-ai-assist__button--pending:deep(.app-button) {
  border-color: rgba(163, 60, 45, 0.28);
  color: #8f3329;
  background: rgba(163, 60, 45, 0.08);
}

.form-ai-assist__button--pending:deep(.app-button:hover:enabled) {
  background: rgba(163, 60, 45, 0.12);
}

@media (max-width: 640px) {
  .form-ai-assist__row {
    align-items: stretch;
  }

  .form-ai-assist :deep(.app-button) {
    width: 100%;
  }
}
</style>
