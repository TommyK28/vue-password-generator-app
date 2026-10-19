<script setup lang="ts">
type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'
type Size      = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  modelValue?: string | number
  type?: InputType
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  size?: Size
  disabled?: boolean
  required?: boolean
  readonly?: boolean
}>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  required: false,
  readonly: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const id = `ds-input-${Math.random().toString(36).slice(2, 9)}`
const errorId = `${id}-error`
const helperId = `${id}-helper`

const hasError = computed(() => !!props.errorMessage)

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="ds-field" :class="{ 'ds-field--error': hasError }">
    <label
      v-if="label"
      :for="id"
      class="ds-field__label"
    >
      {{ label }}
      <span v-if="required" class="ds-field__required" aria-label="povinné">*</span>
    </label>

    <input
      :id="id"
      class="ds-input"
      :class="`ds-input--${size}`"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :aria-invalid="hasError"
      :aria-describedby="[hasError ? errorId : '', helperText ? helperId : ''].filter(Boolean).join(' ') || undefined"
      @input="onInput"
    />

    <p
      v-if="errorMessage"
      :id="errorId"
      class="ds-field__error"
      role="alert"
    >
      {{ errorMessage }}
    </p>

    <p
      v-else-if="helperText"
      :id="helperId"
      class="ds-field__helper"
    >
      {{ helperText }}
    </p>
  </div>
</template>

<style scoped>
.ds-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
}

/* ─── Label ─── */
.ds-field__label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.ds-field__required {
  color: var(--color-danger);
  margin-left: var(--space-0-5);
}

/* ─── Input ─── */
.ds-input {
  width: 100%;
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-input);
  font-family: var(--font-family-sans);
  appearance: none;
  transition: var(--transition-color), var(--transition-shadow);

  &::placeholder {
    color: var(--color-text-disabled);
  }

  &:hover:not(:disabled):not([readonly]) {
    border-color: var(--color-neutral-500);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }

  &:disabled {
    background-color: var(--color-surface-overlay);
    color: var(--color-text-disabled);
    cursor: not-allowed;
    opacity: var(--opacity-disabled);
  }

  &[readonly] {
    background-color: var(--color-surface-raised);
    cursor: default;
  }
}

/* ─── Velikosti ─── */
.ds-input--sm {
  padding: var(--space-1-5) var(--space-3);
  font-size: var(--font-size-sm);
  min-height: 2rem;
}

.ds-input--md {
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-md);
  min-height: 2.5rem;
}

.ds-input--lg {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-lg);
  min-height: 3rem;
}

/* ─── Chybový stav ─── */
.ds-field--error {
  & .ds-input {
    border-color: var(--color-danger);

    &:focus {
      box-shadow: var(--shadow-focus-danger);
    }
  }
}

.ds-field__error {
  font-size: var(--font-size-caption);
  color: var(--color-danger);
}

.ds-field__helper {
  font-size: var(--font-size-caption);
  color: var(--color-text-subtle);
}
</style>
