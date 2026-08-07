<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    deleting?: boolean;
    disabled?: boolean;
    showCancelButton?: boolean;
    showContinueButton?: boolean;
    showDeleteButton?: boolean;
    submitLabel: string;
    deleteLabel?: string;
    activeSubmitMode?: 'close' | 'continue' | null;
  }>(),
  {
    loading: false,
    deleting: false,
    disabled: false,
    showCancelButton: false,
    showContinueButton: false,
    showDeleteButton: false,
    deleteLabel: 'Удалить',
    activeSubmitMode: null
  }
);

const shouldStackActions = computed(() => props.showCancelButton);

const emit = defineEmits<{
  (event: 'cancel' | 'submit-close' | 'submit-continue' | 'delete'): void;
}>();
</script>

<template>
  <div
    class="form-actions"
    :class="{
      'form-actions--stacked': shouldStackActions
    }"
  >
    <AppButton
      v-if="props.showCancelButton"
      type="button"
      variant="ghost"
      :disabled="props.disabled"
      @click="emit('cancel')"
    >
      Отмена
    </AppButton>

    <AppButton
      type="button"
      :loading="props.loading && props.activeSubmitMode !== 'continue'"
      :disabled="props.disabled"
      :block="!props.showCancelButton"
      @click="emit('submit-close')"
    >
      {{ props.submitLabel }}
    </AppButton>
  </div>

  <div v-if="props.showContinueButton" class="form-actions form-actions--single">
    <AppButton
      class="form-actions__single-button"
      type="button"
      variant="ghost"
      :loading="props.loading && props.activeSubmitMode === 'continue'"
      :disabled="props.disabled"
      @click="emit('submit-continue')"
    >
      Сохранить и добавить ещё
    </AppButton>
  </div>

  <div v-if="props.showDeleteButton" class="form-actions form-actions--single">
    <AppButton
      class="form-actions__single-button form-actions__danger-button"
      type="button"
      variant="ghost"
      :loading="props.deleting"
      :disabled="props.disabled"
      @click="emit('delete')"
    >
      {{ props.deleteLabel }}
    </AppButton>
  </div>
</template>

<style scoped>
.form-actions {
  padding-top: 4px;
}

.form-actions--single {
  display: block;
}

.form-actions__single-button {
  width: 100%;
}

.form-actions__danger-button {
  background: rgba(163, 60, 45, 0.1);
  color: #8f3329;
  border-color: rgba(163, 60, 45, 0.22);
}

.form-actions__danger-button:hover:enabled {
  background: rgba(163, 60, 45, 0.16);
  border-color: rgba(163, 60, 45, 0.3);
}

.form-actions--stacked {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
}

@media (min-width: 641px) {
  .form-actions--stacked {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .form-actions--stacked {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
