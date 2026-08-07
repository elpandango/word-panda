<script setup lang="ts">
const props = defineProps<{
  exampleTextDe: string;
  exampleTranslationRu: string;
}>();

const emit = defineEmits<{
  (event: 'update:example-text-de' | 'update:example-translation-ru', value: string): void;
}>();
</script>

<template>
  <div class="form-example-block page-stack-sm">
    <p class="form-example-title">Пример</p>

    <label class="form-field">
      <span class="form-label">Немецкое предложение</span>
      <textarea
        :value="props.exampleTextDe"
        class="search-input surface-field form-textarea form-textarea--example"
        placeholder="например, Ich stelle den Stuhl an die Wand."
        rows="3"
        @input="emit('update:example-text-de', ($event.target as HTMLTextAreaElement).value)"
      />
    </label>

    <label class="form-field">
      <span class="form-label">Перевод примера</span>
      <textarea
        :value="props.exampleTranslationRu"
        class="search-input surface-field form-textarea form-textarea--example"
        placeholder="например, Я ставлю стул к стене."
        rows="3"
        @input="emit('update:example-translation-ru', ($event.target as HTMLTextAreaElement).value)"
      />
    </label>
  </div>
</template>

<style scoped>
.form-example-block {
  padding-top: 4px;
}

.form-example-title {
  margin: 0;
  color: var(--accent);
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

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

.form-textarea {
  resize: vertical;
  min-height: 112px;
}

.form-textarea--example {
  min-height: 96px;
}
</style>
