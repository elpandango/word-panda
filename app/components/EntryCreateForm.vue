<script setup lang="ts">
import { computed, nextTick, reactive, useTemplateRef, watch } from 'vue';
import type { VerbEntry, VerbEntryKind, VerbExample } from '~~/shared/types/verbs';
import { getApiErrorMessage } from '../utils/api-errors';
import { isDerivedEntryKind } from '~~/shared/utils/verb-entry-kind';
import EntryFormAiAssist from './entry-form/EntryFormAiAssist.vue';
import EntryDerivedFields from './entry-form/EntryDerivedFields.vue';
import EntryFormExampleFields from './entry-form/EntryFormExampleFields.vue';
import EntryFormActions from './entry-form/EntryFormActions.vue';

interface EntryCreatePayload {
  kind?: VerbEntryKind;
  word: string;
  translationRu?: string;
  explanationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
}

interface AiFillResponse {
  translationRu?: string;
  explanationRu?: string;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
}

type EntryCreateMode = 'base' | 'derived' | 'collocation';
type EntrySubmitMode = 'close' | 'continue';

const runtimeConfig = useRuntimeConfig();
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
    showCancelButton?: boolean;
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
    showCancelButton: false,
    deleteLabel: 'Удалить'
  }
);

const emit = defineEmits<{
  (event: 'submit', payload: EntryCreatePayload, mode: EntrySubmitMode): void;
  (event: 'delete' | 'cancel'): void;
}>();
const wordInputRef = useTemplateRef<HTMLInputElement>('wordInput');

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
const hasAttemptedAiFill = ref(false);
const isAiFilling = ref(false);
const serverWordErrorMessage = ref('');
const aiErrorMessage = ref('');
const trimmedContextWord = computed(() => props.contextWord.trim());
const isBusy = computed(() => props.loading || props.deleting);
const isAiFillEnabled = computed(() => runtimeConfig.public.aiFillEnabled === true);
const isDerivedMode = computed(() => isDerivedEntryKind(props.mode));
const isAiFillMissingWord = computed(() => form.word.trim().length === 0);
const isWordInvalid = computed(
  () => fieldErrors.word.length > 0 || serverWordErrorMessage.value.length > 0
);
const isTranslationInvalid = computed(() => fieldErrors.translationRu.length > 0);
const wordErrorMessage = computed(() => fieldErrors.word || serverWordErrorMessage.value);
const isAiFillTemporarilyUnavailable = computed(() => isBusy.value || isAiFilling.value);
const generalErrorMessage = computed(() => {
  return serverWordErrorMessage.value ? '' : props.errorMessage;
});
const resolvedSubmitLabel = computed(() => {
  if (props.submitLabel) {
    return props.submitLabel;
  }

  return props.mode === 'base' ? 'Создать слово' : 'Сохранить';
});
const shouldAutofocusWord = computed(() => {
  return !props.initialEntry?.word;
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

async function focusWordInput(): Promise<void> {
  if (!shouldAutofocusWord.value) {
    return;
  }

  await nextTick();
  wordInputRef.value?.focus();
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
  serverWordErrorMessage.value = '';
  aiErrorMessage.value = '';
  isPrefixTouched.value = false;
  activeSubmitMode.value = null;
  hasAttemptedAiFill.value = false;
}

watch(
  () => props.mode,
  () => {
    resetForm();
    void focusWordInput();
  },
  { immediate: true }
);

watch(
  () => props.resetKey,
  () => {
    resetForm();
    void focusWordInput();
  }
);

watch(
  () => props.initialEntry,
  () => {
    resetForm();
    void focusWordInput();
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

    if (serverWordErrorMessage.value) {
      serverWordErrorMessage.value = '';
    }

    if (aiErrorMessage.value) {
      aiErrorMessage.value = '';
    }

    if (hasAttemptedAiFill.value) {
      hasAttemptedAiFill.value = false;
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
  () => props.errorMessage,
  (message) => {
    serverWordErrorMessage.value = message.includes('уже есть в базе') ? message : '';
  },
  { immediate: true }
);

watch(
  () => [props.mode, form.word, trimmedContextWord.value, props.initialEntry?.word || ''] as const,
  ([mode, word, contextWord, initialWord]) => {
    if (!isDerivedEntryKind(mode) || isPrefixTouched.value || initialWord) {
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

  if (props.mode !== 'base') {
    payload.kind = props.mode;
  }

  if (isDerivedMode.value) {
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

function handleCancel(): void {
  if (isBusy.value) {
    return;
  }

  emit('cancel');
}

async function handleAiFill(): Promise<void> {
  hasAttemptedAiFill.value = true;

  if (isAiFillTemporarilyUnavailable.value || !isAiFillEnabled.value) {
    return;
  }

  if (isAiFillMissingWord.value) {
    fieldErrors.word = 'Сначала укажи слово, чтобы AI смог заполнить остальные поля.';
    aiErrorMessage.value = 'AI-подсказка появится после того, как ты введёшь слово.';
    return;
  }

  isAiFilling.value = true;
  aiErrorMessage.value = '';

  try {
    const response = await $fetch<AiFillResponse>('/api/ai/fill-entry', {
      method: 'POST',
      body: {
        word: form.word.trim(),
        mode: props.mode,
        contextWord: trimmedContextWord.value || undefined
      }
    });

    if (!form.translationRu.trim() && response.translationRu) {
      form.translationRu = response.translationRu;
    }

    if (!form.explanationRu.trim() && response.explanationRu) {
      form.explanationRu = response.explanationRu;
    }

    if (!form.exampleTextDe.trim() && response.exampleTextDe) {
      form.exampleTextDe = response.exampleTextDe;
    }

    if (!form.exampleTranslationRu.trim() && response.exampleTranslationRu) {
      form.exampleTranslationRu = response.exampleTranslationRu;
    }

    if (isDerivedMode.value) {
      if (!isPrefixTouched.value && !form.prefix.trim() && typeof response.prefix === 'string') {
        form.prefix = response.prefix;
      }

      if (!form.isSeparable && (response.isSeparable === true || response.isSeparable === false)) {
        form.isSeparable = toSelectValue(response.isSeparable);
      }
    }
  } catch (error) {
    aiErrorMessage.value = getApiErrorMessage(
      error,
      'AI-подсказка временно недоступна. Попробуй позже.'
    );
  } finally {
    isAiFilling.value = false;
  }
}
</script>

<template>
  <section class="entry-create-form page-stack-sm">
    <div v-if="mode !== 'base' && contextWord" class="form-context">
      <span class="form-context__label">Семейство:</span>
      <strong class="form-context__value">{{ contextWord }}</strong>
    </div>

    <p class="muted-text">
      {{
        mode === 'base'
          ? 'Сохраняй слово вместе с переводом. Один пример можно добавить сразу или позже при редактировании.'
          : mode === 'derived'
            ? 'Добавь глагол в текущее семейство. Для сохранения нужны слово и перевод, а пример можно заполнить сразу.'
            : 'Добавь типовое сочетание для текущего семейства. Для сохранения нужны слово и перевод, а пример можно заполнить сразу.'
      }}
    </p>

    <form class="entry-form page-stack-sm" novalidate @submit.prevent="handleSubmit('close')">
      <label class="form-field">
        <span class="form-label">Слово</span>
        <input
          ref="wordInput"
          v-model="form.word"
          class="search-input surface-field"
          :class="{ 'search-input--error': isWordInvalid }"
          type="text"
          placeholder="например, stellen"
          :aria-invalid="isWordInvalid ? 'true' : 'false'"
        />
        <span v-if="wordErrorMessage" class="form-field-error">{{ wordErrorMessage }}</span>
      </label>

      <EntryFormAiAssist
        v-if="isAiFillEnabled"
        :loading="isAiFilling"
        :disabled="isAiFillTemporarilyUnavailable"
        :is-pending="hasAttemptedAiFill && isAiFillMissingWord"
        :error-message="aiErrorMessage"
        @trigger="handleAiFill"
      />

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

      <EntryDerivedFields
        v-if="isDerivedMode"
        :prefix="form.prefix"
        :is-separable="form.isSeparable"
        @prefix-input="handlePrefixInput"
        @update:is-separable="form.isSeparable = $event"
      />

      <label class="form-field">
        <span class="form-label">Пояснение</span>
        <textarea
          v-model="form.explanationRu"
          class="search-input surface-field form-textarea"
          placeholder="Короткая заметка по смыслу или употреблению"
          rows="4"
        />
      </label>

      <EntryFormExampleFields
        :example-text-de="form.exampleTextDe"
        :example-translation-ru="form.exampleTranslationRu"
        @update:example-text-de="form.exampleTextDe = $event"
        @update:example-translation-ru="form.exampleTranslationRu = $event"
      />

      <p v-if="generalErrorMessage" class="error-text form-error">{{ generalErrorMessage }}</p>

      <EntryFormActions
        :loading="loading"
        :deleting="deleting"
        :disabled="isBusy"
        :show-cancel-button="showCancelButton"
        :show-continue-button="showContinueButton"
        :show-delete-button="showDeleteButton"
        :submit-label="resolvedSubmitLabel"
        :delete-label="deleteLabel"
        :active-submit-mode="activeSubmitMode"
        @cancel="handleCancel"
        @submit-close="handleSubmit('close')"
        @submit-continue="handleSubmit('continue')"
        @delete="handleDelete"
      />
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
</style>
