<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'
type Size    = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button'
})
</script>

<template>
  <button
    class="ds-button"
    :class="[`ds-button--${variant}`, `ds-button--${size}`]"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading"
  >
    <span v-if="loading" class="ds-button__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>

<style scoped>
.ds-button {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  /* Typografie */
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  white-space: nowrap;

  /* Interakce */
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: var(--radius-button);
  text-decoration: none;
  transition: var(--transition-color), var(--transition-shadow), transform var(--transition-fast) var(--ease-spring);

  /* Přístupnost */
  &:focus-visible {
    box-shadow: var(--shadow-focus);
    outline: none;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: var(--opacity-disabled);
    cursor: not-allowed;
  }
}

/* ─── Varianty ─── */
.ds-button--primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }
}

.ds-button--secondary {
  background-color: var(--color-surface);
  color: var(--color-primary);
  border-color: var(--color-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-surface-raised);
  }
}

.ds-button--ghost {
  background-color: transparent;
  color: var(--color-text);
  border-color: transparent;

  &:hover:not(:disabled) {
    background-color: var(--color-surface-overlay);
  }
}

.ds-button--danger {
  background-color: var(--color-danger);
  color: var(--color-text-inverse);
  border-color: var(--color-danger);

  &:hover:not(:disabled) {
    background-color: oklch(from var(--color-danger) calc(l - 0.08) c h);
  }

  &:focus-visible {
    box-shadow: var(--shadow-focus-danger);
  }
}

.ds-button--success {
  background-color: var(--color-success);
  color: var(--color-text-inverse);
  border-color: var(--color-success);

  &:hover:not(:disabled) {
    background-color: oklch(from var(--color-success) calc(l - 0.08) c h);
  }
}

/* ─── Velikosti ─── */
.ds-button--sm {
  padding: var(--space-1-5) var(--space-3);
  font-size: var(--font-size-sm);
  min-height: 2rem;
}

.ds-button--md {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-md);
  min-height: 2.5rem;
}

.ds-button--lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-lg);
  min-height: 3rem;
}

/* ─── Loading spinner ─── */
.ds-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: ds-spin 0.6s linear infinite;
}

@keyframes ds-spin {
  to { transform: rotate(360deg); }
}
</style>
