<script setup lang="ts">
import type { CharacterSetName } from '~/types/password'

const CHARACTER_SET_OPTIONS: { name: CharacterSetName, label: string }[] = [
  { name: 'uppercase', label: 'Include Uppercase Letters' },
  { name: 'lowercase', label: 'Include Lowercase Letters' },
  { name: 'numbers', label: 'Include Numbers' },
  { name: 'symbols', label: 'Include Symbols' }
]

const {
  passwordLength,
  characterSetSelection,
  password,
  passwordStrength,
  regeneratePassword
} = usePasswordGenerator()
</script>

<template>
  <div class="password-generator">
    <h1 class="password-generator__title">Password Generator</h1>

    <div class="password-generator__panels">
      <PasswordDisplay :password="password" />

      <form class="password-generator__settings" @submit.prevent="regeneratePassword">
        <CharacterLengthSlider
          v-model="passwordLength"
          :min="PASSWORD_LENGTH_MIN"
          :max="PASSWORD_LENGTH_MAX"
        />

        <fieldset class="password-generator__character-sets">
          <legend class="visually-hidden">Character types</legend>
          <CheckboxOption
            v-for="option in CHARACTER_SET_OPTIONS"
            :key="option.name"
            v-model="characterSetSelection[option.name]"
            :label="option.label"
          />
        </fieldset>

        <div class="password-generator__actions">
          <StrengthMeter :strength="passwordStrength" />
          <GenerateButton />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.password-generator {
  --password-generator-max-width: 33.75rem;  /* 540px */

  display: flex;
  flex-direction: column;
  gap: var(--spacing-fluid-200-400);
  inline-size: 100%;
  min-inline-size: 0;
  max-inline-size: var(--password-generator-max-width);
}

.password-generator__title {
  font-size: var(--font-size-fluid-2);
  line-height: var(--line-height-fluid-2);
  color: var(--color-text-subtle);
  text-align: center;
}

.password-generator__panels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-fluid-200-300);
}

.password-generator__settings {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding-block: var(--spacing-fluid-200-300);
  padding-inline: var(--spacing-fluid-200-400);
  background-color: var(--color-surface-raised);
}

.password-generator__character-sets {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: 0;
  border: 0;
}

.password-generator__actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-fluid-200-400);
}
</style>
