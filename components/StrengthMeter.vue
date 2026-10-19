<script setup lang="ts">
import type { PasswordStrength } from '~/types/password'

const { strength } = defineProps<{
  strength: PasswordStrength | null
}>()

const STRENGTH_BAR_COUNT = 4

const STRENGTH_LEVELS: Record<PasswordStrength, { label: string, filledBarCount: number }> = {
  'too-weak': { label: 'Too weak', filledBarCount: 1 },
  'weak': { label: 'Weak', filledBarCount: 2 },
  'medium': { label: 'Medium', filledBarCount: 3 },
  'strong': { label: 'Strong', filledBarCount: 4 }
}

const strengthLevel = computed(() => (strength ? STRENGTH_LEVELS[strength] : null))

function isBarFilled(barNumber: number): boolean {
  return barNumber <= (strengthLevel.value?.filledBarCount ?? 0)
}
</script>

<template>
  <div class="strength-meter" :class="strength && `strength-meter--${strength}`">
    <p class="strength-meter__label" aria-hidden="true">Strength</p>
    <div class="strength-meter__indicator">
      <p class="strength-meter__level" role="status">
        <template v-if="strengthLevel">
          <span class="visually-hidden">Strength:</span> {{ strengthLevel.label }}
        </template>
      </p>
      <div class="strength-meter__bars" aria-hidden="true">
        <span
          v-for="bar in STRENGTH_BAR_COUNT"
          :key="bar"
          class="strength-meter__bar"
          :class="{ 'strength-meter__bar--filled': isBarFilled(bar) }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.strength-meter {
  --strength-meter-height: clamp(3.5rem, 2.5458rem + 4.0712vw, 4.5rem);  /* 56 → 72px */
  --strength-bar-width: 0.625rem;                                        /* 10px */
  --strength-bar-height: 1.75rem;                                        /* 28px */

  display: flex;
  align-items: center;
  justify-content: space-between;
  block-size: var(--strength-meter-height);
  padding-inline: var(--spacing-fluid-200-400);
  background-color: var(--color-surface-sunken);
}

.strength-meter--too-weak {
  --strength-color: var(--color-strength-too-weak);
}

.strength-meter--weak {
  --strength-color: var(--color-strength-weak);
}

.strength-meter--medium {
  --strength-color: var(--color-strength-medium);
}

.strength-meter--strong {
  --strength-color: var(--color-strength-strong);
}

.strength-meter__label {
  color: var(--color-text-subtle);
  text-transform: uppercase;
}

.strength-meter__indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}

.strength-meter__level {
  font-size: var(--font-size-fluid-4);
  line-height: var(--line-height-fluid-4);
  color: var(--color-text);
  text-transform: uppercase;
}

.strength-meter__bars {
  display: flex;
  gap: var(--spacing-100);
}

.strength-meter__bar {
  inline-size: var(--strength-bar-width);
  block-size: var(--strength-bar-height);
  border: var(--border-width) solid var(--color-strength-bar-empty);
}

.strength-meter__bar--filled {
  border-color: var(--strength-color);
  background-color: var(--strength-color);
}
</style>
