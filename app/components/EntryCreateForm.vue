<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import type { VerbEntry, VerbExample } from '../../shared/types/verbs';

interface EntryCreatePayload {
  word: string;
  translationRu?: string;
  explanationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
}

type EntryCreateMode = 'base' | 'variant';
type EntrySubmitMode = 'close' | 'continue';

const props = withDefaults(
  defineProps<{
    mode?: EntryCreateMode;
    loading?: boolean;
    deleting?: boolean;
    errorMessage?: string;
    contextWord?: string;
    resetKey?: number;
    initialEntry?: Partial<VerbEntry> | null;
    initialExample?: Partial<VerbExample> | null;
    submitLabel?: string;
    showContinueButton?: boolean;
    showDeleteButton?: boolean;
    deleteLabel?: string;
  }>(),
  {
    mode: 'base',
    loading: false,
    deleting: false,
    errorMessage: '',
    contextWord: '',
    resetKey: 0,
    initialEntry: null,
    initialExample: null,
    submitLabel: '',
    showContinueButton: false,
    showDeleteButton: false,
    deleteLabel: 'Удалить'
  }
);

const emit = defineEmits<{
  (event: 'submit', payload: EntryCreatePayload, mode: EntrySubmitMode): void;
  (event: 'delete'): void;
}>();

const form = reactive({
  word: '',
  translationRu: '',
  explanationRu: '',
  prefix: '',
  isSeparable: '',
  exampleTextDe: '',
  exampleTranslationRu: ''
});

const fieldErrors = reactive({
  word: '',
  translationRu: ''
});
const isPrefixTouched = ref(false);
const activeSubmitMode = ref<EntrySubmitMode | null>(null);
const trimmedContextWord = computed(() => props.contextWord.trim());
const isBusy = computed(() => props.loading || props.deleting);
const isWordInvalid = computed(() => fieldErrors.word.length > 0);
const isTranslationInvalid = computed(() => fieldErrors.translationRu.length > 0);
const resolvedSubmitLabel = computed(() => {
  if (props.submitLabel) {
    return props.submitLabel;
  }

  return props.mode === 'base' ? 'Создать слово' : 'Сохранить';
});

function toSelectValue(value: boolean | null | undefined): string {
  if (value === true) {
    return 'true';
  }

  if (value === false) {
    return 'false';
  }

  return '';
}

function resetForm(): void {
  form.word = props.initialEntry?.word || '';
  form.translationRu = props.initialEntry?.translationRu || '';
  form.explanationRu = props.initialEntry?.explanationRu || '';
  form.prefix = props.initialEntry?.prefix || '';
  form.isSeparable = toSelectValue(props.initialEntry?.isSeparable);
  form.exampleTextDe = props.initialExample?.textDe || '';
  form.exampleTranslationRu = props.initialExample?.translationRu || '';
  fieldErrors.word = '';
  fieldErrors.translationRu = '';
  isPrefixTouched.value = false;
  activeSubmitMode.value = null;
}

watch(
  () => props.mode,
  () => {
    resetForm();
  },
  { immediate: true }
);

watch(
  () => props.resetKey,
  () => {
    resetForm();
  }
);

watch(
  () => props.initialEntry,
  () => {
    resetForm();
  }
);

watch(
  () => props.initialExample,
  () => {
    resetForm();
  }
);

watch(
  () => props.loading,
  (loading) => {
    if (!loading) {
      activeSubmitMode.value = null;
    }
  }
);

watch(
  () => form.word,
  (value) => {
    if (value.trim()) {
      fieldErrors.word = '';
    }
  }
);

watch(
  () => form.translationRu,
  (value) => {
    if (value.trim()) {
      fieldErrors.translationRu = '';
    }
  }
);

watch(
  () => [props.mode, form.word, trimmedContextWord.value, props.initialEntry?.word || ''] as const,
  ([mode, word, contextWord, initialWord]) => {
    if (mode !== 'variant' || isPrefixTouched.value || initialWord) {
      return;
    }

    const normalizedWord = word.trim();

    if (
      !normalizedWord ||
      !contextWord ||
      normalizedWord === contextWord ||
      !normalizedWord.endsWith(contextWord)
    ) {
      form.prefix = '';
      return;
    }

    form.prefix = normalizedWord.slice(0, normalizedWord.length - contextWord.length);
  }
);

function parseNullableBoolean(value: string): boolean | null {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return null;
}

function handlePrefixInput(event: Event): void {
  const target = event.target as HTMLInputElement;

  isPrefixTouched.value = true;
  form.prefix = target.value;
}

function validateForm(): boolean {
  const word = form.word.trim();
  const translationRu = form.translationRu.trim();

  fieldErrors.word = word ? '' : 'Укажи слово, чтобы сохранить запись.';
  fieldErrors.translationRu = translationRu ? '' : 'Укажи перевод, чтобы сохранить запись.';

  return !fieldErrors.word && !fieldErrors.translationRu;
}

function buildPayload(): EntryCreatePayload {
  const payload: EntryCreatePayload = {
    word: form.word.trim(),
    translationRu: form.translationRu.trim() || undefined,
    explanationRu: form.explanationRu.trim() || undefined,
    exampleTextDe: form.exampleTextDe.trim() || undefined,
    exampleTranslationRu: form.exampleTranslationRu.trim() || undefined
  };

  if (props.mode === 'variant') {
    payload.prefix = form.prefix.trim() || null;
    payload.isSeparable = parseNullableBoolean(form.isSeparable);
  }

  return payload;
}

function handleSubmit(mode: EntrySubmitMode): void {
  if (isBusy.value) {
    return;
  }

  if (!validateForm()) {
    activeSubmitMode.value = null;
    return;
  }

  activeSubmitMode.value = mode;
  emit('submit', buildPayload(), mode);
}

function handleDelete(): void {
  if (isBusy.value) {
    return;
  }

  emit('delete');
}
</script>

<template>
  <section class="entry-create-form page-stack-sm">
    <div v-if="mode === 'variant' && contextWord" class="form-context">
      <span class="form-context__label">Семейство:</span>
      <strong class="form-context__value">{{ contextWord }}</strong>
    </div>

    <p class="muted-text">
      {{
        mode === 'base'
          ? 'Сохраняй слово вместе с переводом. Один пример можно добавить сразу или позже при редактировании.'
          : 'Добавь вариант в текущее семейство. Для сохранения нужны слово и перевод, а пример можно заполнить сразу.'
      }}
    </p>

    <form class="entry-form page-stack-sm" novalidate @submit.prevent="handleSubmit('close')">
      <label class="form-field">
        <span class="form-label">Слово</span>
        <input
          v-model="form.word"
          class="search-input surface-field"
          :class="{ 'search-input--error': isWordInvalid }"
          type="text"
          placeholder="например, stellen"
          :aria-invalid="isWordInvalid ? 'true' : 'false'"
        />
        <span v-if="fieldErrors.word" class="form-field-error">{{ fieldErrors.word }}</span>
      </label>

      <label class="form-field">
        <span class="form-label">Перевод</span>
        <input
          v-model="form.translationRu"
          class="search-input surface-field"
          :class="{ 'search-input--error': isTranslationInvalid }"
          type="text"
          placeholder="например, ставить"
          :aria-invalid="isTranslationInvalid ? 'true' : 'false'"
        />
        <span v-if="fieldErrors.translationRu" class="form-field-error">{{
          fieldErrors.translationRu
        }}</span>
      </label>

      <label v-if="mode === 'variant'" class="form-field">
        <span class="form-label">Приставка</span>
        <input
          :value="form.prefix"
          class="search-input surface-field"
          type="text"
          placeholder="например, ein"
          @input="handlePrefixInput"
        />
      </label>

      <label v-if="mode === 'variant'" class="form-field">
        <span class="form-label">Отделяемость</span>
        <select v-model="form.isSeparable" class="search-input surface-field">
          <option value="">Не указано</option>
          <option value="true">Отделяемая</option>
          <option value="false">Неотделяемая</option>
        </select>
      </label>

      <label class="form-field">
        <span class="form-label">Пояснение</span>
        <textarea
          v-model="form.explanationRu"
          class="search-input surface-field form-textarea"
          placeholder="Короткая заметка по смыслу или употреблению"
          rows="4"
        />
      </label>

      <div class="form-example-block page-stack-sm">
        <p class="form-example-title">Пример</p>

        <label class="form-field">
          <span class="form-label">Немецкое предложение</span>
          <textarea
            v-model="form.exampleTextDe"
            class="search-input surface-field form-textarea form-textarea--example"
            placeholder="например, Ich stelle den Stuhl an die Wand."
            rows="3"
          />
        </label>

        <label class="form-field">
          <span class="form-label">Перевод примера</span>
          <textarea
            v-model="form.exampleTranslationRu"
            class="search-input surface-field form-textarea form-textarea--example"
            placeholder="например, Я ставлю стул к стене."
            rows="3"
          />
        </label>
      </div>

      <p v-if="errorMessage" class="error-text form-error">{{ errorMessage }}</p>

      <div
        class="form-actions"
        :class="{ 'form-actions--stacked': showContinueButton || showDeleteButton }"
      >
        <AppButton
          v-if="showDeleteButton"
          type="button"
          variant="ghost"
          :loading="deleting"
          :disabled="isBusy"
          @click="handleDelete"
        >
          {{ deleteLabel }}
        </AppButton>

        <AppButton
          v-if="showContinueButton"
          type="button"
          variant="ghost"
          :loading="loading && activeSubmitMode === 'continue'"
          :disabled="isBusy"
          @click="handleSubmit('continue')"
        >
          Сохранить и добавить ещё
        </AppButton>

        <AppButton
          type="submit"
          :loading="loading && activeSubmitMode !== 'continue'"
          :disabled="isBusy"
          :block="!showContinueButton && !showDeleteButton"
        >
          {{ resolvedSubmitLabel }}
        </AppButton>
      </div>
    </form>
  </section>
</template>

<style scoped>
.entry-create-form {
  padding: 0;
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

.form-error {
  margin-bottom: 0;
}

.form-actions {
  padding-top: 4px;
}

.form-actions--stacked {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
}

.search-input--error {
  border-color: #a33c2d;
  box-shadow: 0 0 0 4px rgba(163, 60, 45, 0.12);
}

.search-input--error:focus {
  border-color: #a33c2d;
  box-shadow: 0 0 0 4px rgba(163, 60, 45, 0.16);
}

.form-field-error {
  color: #a33c2d;
  font-family: var(--font-family-body);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
}

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

.form-textarea--example {
  min-height: 96px;
}

.form-context {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  padding: 8px 12px;
  border-radius: 16px;
  background: var(--success-soft);
}

.form-context__label {
  color: var(--text-muted);
  font-family: var(--font-family-body);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
}

.form-context__value {
  color: var(--accent-strong);
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

@media (min-width: 641px) {
  .form-actions--stacked {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
