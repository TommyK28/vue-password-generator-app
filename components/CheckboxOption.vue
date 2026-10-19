<script setup lang="ts">
const { label } = defineProps<{
  label: string
}>()

const isChecked = defineModel<boolean>({ required: true })
</script>

<template>
  <label class="checkbox-option">
    <span class="checkbox-option__control">
      <input v-model="isChecked" class="checkbox-option__input" type="checkbox">
      <svg
        class="checkbox-option__checkmark"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path stroke="currentColor" stroke-width="3" d="m1.06 5.667 3.394 3.394 8-8" />
      </svg>
    </span>
    {{ label }}
  </label>
</template>

<style scoped>
.checkbox-option {
  --checkbox-size: 1.25rem;  /* 20px */

  display: flex;
  align-items: center;
  gap: var(--spacing-fluid-200-300);
  cursor: pointer;
}

/* Input a fajfka leží přes sebe ve stejné buňce gridu */
.checkbox-option__control {
  display: grid;
  flex-shrink: 0;
  place-items: center;
}

.checkbox-option__control > * {
  grid-area: 1 / 1;
}

.checkbox-option__input {
  appearance: none;
  inline-size: var(--checkbox-size);
  block-size: var(--checkbox-size);
  margin: 0;
  border: var(--border-width) solid var(--color-checkbox-border);
  cursor: pointer;
  transition:
    border-color var(--transition-hover),
    background-color var(--transition-hover);
}

.checkbox-option:hover .checkbox-option__input {
  border-color: var(--color-checkbox-border-hover);
}

.checkbox-option__input:checked {
  border-color: var(--color-checkbox-checked);
  background-color: var(--color-checkbox-checked);
}

.checkbox-option__checkmark {
  color: var(--color-checkbox-checkmark);
  pointer-events: none;
}

.checkbox-option__input:not(:checked) + .checkbox-option__checkmark {
  visibility: hidden;
}
</style>
