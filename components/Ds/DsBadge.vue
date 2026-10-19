<script setup lang="ts">
type Variant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
type Size    = 'sm' | 'md'

withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  dot?: boolean
}>(), {
  variant: 'default',
  size: 'md',
  dot: false
})
</script>

<template>
  <span
    class="ds-badge"
    :class="[`ds-badge--${variant}`, `ds-badge--${size}`, { 'ds-badge--dot': dot }]"
  >
    <span v-if="dot" class="ds-badge__dot" aria-hidden="true" />
    <slot />
  </span>
</template>

<style scoped>
.ds-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-0-5) var(--space-2);
  border-radius: var(--radius-badge);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  white-space: nowrap;
  border: 1px solid transparent;
}

/* ─── Velikosti ─── */
.ds-badge--sm {
  padding: 0 var(--space-1-5);
  font-size: var(--font-size-2xs);
}

.ds-badge--md {
  padding: var(--space-0-5) var(--space-2);
  font-size: var(--font-size-xs);
}

/* ─── Varianty ─── */
.ds-badge--default {
  background-color: var(--color-surface-overlay);
  color: var(--color-text-subtle);
  border-color: var(--color-border);
}

.ds-badge--primary {
  background-color: oklch(from var(--color-primary) l c h / 0.12);
  color: var(--color-primary-dark);
  border-color: oklch(from var(--color-primary) l c h / 0.25);
}

.ds-badge--success {
  background-color: oklch(from var(--color-success) l c h / 0.12);
  color: oklch(from var(--color-success) calc(l - 0.12) c h);
  border-color: oklch(from var(--color-success) l c h / 0.25);
}

.ds-badge--warning {
  background-color: oklch(from var(--color-warning) l c h / 0.12);
  color: oklch(from var(--color-warning) calc(l - 0.20) c h);
  border-color: oklch(from var(--color-warning) l c h / 0.25);
}

.ds-badge--danger {
  background-color: oklch(from var(--color-danger) l c h / 0.12);
  color: oklch(from var(--color-danger) calc(l - 0.08) c h);
  border-color: oklch(from var(--color-danger) l c h / 0.25);
}

.ds-badge--info {
  background-color: oklch(from var(--color-info) l c h / 0.12);
  color: oklch(from var(--color-info) calc(l - 0.10) c h);
  border-color: oklch(from var(--color-info) l c h / 0.25);
}

/* ─── Dot indikátor ─── */
.ds-badge__dot {
  display: inline-block;
  width: 0.5em;
  height: 0.5em;
  border-radius: var(--radius-full);
  background-color: currentColor;
}
</style>
