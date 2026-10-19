import type { CharacterSetSelection } from '~/types/password'

export const PASSWORD_LENGTH_MIN = 0
export const PASSWORD_LENGTH_MAX = 20

export function usePasswordGenerator() {
  const passwordLength = ref(PASSWORD_LENGTH_MIN)
  const characterSetSelection = reactive<CharacterSetSelection>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  })
  const password = ref('')

  const passwordStrength = computed(() => calculatePasswordStrength(password.value))

  const canGeneratePassword = computed(
    () => passwordLength.value > 0 && Object.values(characterSetSelection).some(Boolean)
  )

  function regeneratePassword() {
    if (!canGeneratePassword.value) {
      return
    }

    password.value = generatePassword(passwordLength.value, characterSetSelection)
  }

  return {
    passwordLength,
    characterSetSelection,
    password,
    passwordStrength,
    regeneratePassword
  }
}
