<script setup lang="ts">
const { text } = defineProps<{
  text: string
}>()

const { isCopied, copyToClipboard } = useClipboardCopy(() => text)
</script>

<template>
  <div class="copy-button">
    <span class="copy-button__status" role="status">{{ isCopied ? 'Copied' : '' }}</span>
    <button
      type="button"
      class="copy-button__trigger"
      aria-label="Copy password"
      :disabled="!text"
      @click="copyToClipboard"
    >
      <svg
        class="copy-button__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="m17.909.659 2.432 2.432c.422.422.659.994.659 1.591V17.25a2.25 2.25 0 0 1-2.25 2.25H15v2.25A2.25 2.25 0 0 1 12.75 24H2.25A2.25 2.25 0 0 1 0 21.75v-15A2.25 2.25 0 0 1 2.25 4.5H6V2.25A2.25 2.25 0 0 1 8.25 0h8.068a2.25 2.25 0 0 1 1.591.659M2.531 21.75h9.938a.28.28 0 0 0 .281-.281V19.5h-4.5A2.25 2.25 0 0 1 6 17.25V6.75H2.531a.28.28 0 0 0-.281.281V21.47a.28.28 0 0 0 .281.281m15.938-4.5H8.53a.28.28 0 0 1-.281-.281V2.53a.28.28 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.28.28 0 0 1-.281.281m-2.719-12h3v-.452a.28.28 0 0 0-.082-.198L16.4 2.332a.28.28 0 0 0-.199-.082h-.451z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.copy-button {
  --copy-icon-height: clamp(1.25rem, 1.0115rem + 1.0178vw, 1.5rem);  /* 20 → 24px */

  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--spacing-fluid-100-200);
}

.copy-button__status {
  color: var(--color-text-accent);
  text-transform: uppercase;
}

.copy-button__trigger {
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-icon);
  cursor: pointer;
  transition: color var(--transition-hover);
}

.copy-button__trigger:disabled {
  cursor: default;
}

.copy-button__trigger:not(:disabled):hover {
  color: var(--color-icon-hover);
}

/* Šířku dopočítá prohlížeč z poměru stran viewBoxu */
.copy-button__icon {
  inline-size: auto;
  block-size: var(--copy-icon-height);
}
</style>
