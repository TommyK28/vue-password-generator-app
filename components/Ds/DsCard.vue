<script setup lang="ts">
type Elevation = 'flat' | 'raised' | 'floating'

withDefaults(defineProps<{
  elevation?: Elevation
  padding?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
}>(), {
  elevation: 'raised',
  padding: 'md',
  interactive: false
})
</script>

<template>
  <article
    class="ds-card"
    :class="[
      `ds-card--${elevation}`,
      `ds-card--pad-${padding}`,
      { 'ds-card--interactive': interactive }
    ]"
  >
    <header v-if="$slots.header" class="ds-card__header">
      <slot name="header" />
    </header>

    <div class="ds-card__body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="ds-card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<style scoped>
.ds-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  overflow: hidden;
  container-type: inline-size;
  transition: var(--transition-shadow), transform var(--transition-fast) var(--ease-spring);
}

/* ─── Elevace ─── */
.ds-card--flat    { box-shadow: none; }
.ds-card--raised  { box-shadow: var(--shadow-sm); }
.ds-card--floating { box-shadow: var(--shadow-lg); }

/* ─── Interaktivní stav ─── */
.ds-card--interactive {
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--color-border-strong);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

/* ─── Padding ─── */
.ds-card--pad-none .ds-card__body { padding: 0; }
.ds-card--pad-none .ds-card__header { padding: 0; }
.ds-card--pad-none .ds-card__footer { padding: 0; }

.ds-card--pad-sm .ds-card__body   { padding: var(--space-3); }
.ds-card--pad-md .ds-card__body   { padding: var(--space-6); }
.ds-card--pad-lg .ds-card__body   { padding: var(--space-8); }

/* ─── Sekce ─── */
.ds-card__header {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
}

.ds-card__footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-surface-raised);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  justify-content: flex-end;
}

/* ─── Container query (responsivní karta) ─── */
@container (max-width: 400px) {
  .ds-card__footer {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
