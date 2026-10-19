<template>
  <button type="submit" class="generate-button">
    Generate
    <svg
      class="generate-button__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="m5.105 12 6-6-6-6L3.84 1.265l3.84 3.84H0v1.79h7.68l-3.84 3.84z" />
    </svg>
  </button>
</template>

<style scoped>
.generate-button {
  --generate-button-height: clamp(3.5rem, 2.9633rem + 2.2901vw, 4.0625rem);  /* 56 → 65px */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-fluid-200-300);
  inline-size: 100%;
  block-size: var(--generate-button-height);
  border: var(--border-width) solid transparent;
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  text-transform: uppercase;
  cursor: pointer;
  transition:
    border-color var(--transition-hover),
    background-color var(--transition-hover),
    color var(--transition-hover);
}

.generate-button:hover {
  border-color: var(--color-button-border-hover);
  background-color: var(--color-button-bg-hover);
  color: var(--color-button-text-hover);
}

.generate-button__icon {
  flex-shrink: 0;
}
</style>
