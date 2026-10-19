<script setup lang="ts">
const { password } = defineProps<{
  password: string
}>()

const PASSWORD_PLACEHOLDER = 'P4$5W0rD!'

const hasPassword = computed(() => password.length > 0)
</script>

<template>
  <div class="password-display">
    <output
      class="password-display__value"
      :class="{ 'password-display__value--placeholder': !hasPassword }"
    >
      <template v-if="hasPassword">{{ password }}</template>
      <template v-else>
        <span aria-hidden="true">{{ PASSWORD_PLACEHOLDER }}</span>
        <span class="visually-hidden">No password generated</span>
      </template>
    </output>
    <CopyButton :text="password" />
  </div>
</template>

<style scoped>
.password-display {
  --password-display-height: clamp(4rem, 3.0458rem + 4.0712vw, 5rem);  /* 64 → 80px */

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-200);
  block-size: var(--password-display-height);
  padding-inline: var(--spacing-fluid-200-400);
  background-color: var(--color-surface-raised);
}

.password-display__value {
  min-inline-size: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: var(--font-size-fluid-1);
  line-height: var(--line-height-fluid-1);
  color: var(--color-text);
}

.password-display__value--placeholder {
  color: var(--color-text-placeholder);
}
</style>
