import type { PasswordStrength } from '~/types/password'
import { CHARACTER_SETS } from './characterSets'

const MIN_LENGTH_FOR_WEAK = 8
const MIN_LENGTH_FOR_STRONG = 12
const ALL_CHARACTER_SETS_COUNT = Object.keys(CHARACTER_SETS).length

function countUsedCharacterSets(password: string): number {
  return Object.values(CHARACTER_SETS).filter((characters) =>
    [...password].some((character) => characters.includes(character))
  ).length
}

export function calculatePasswordStrength(password: string): PasswordStrength | null {
  if (!password) {
    return null
  }

  if (password.length < MIN_LENGTH_FOR_WEAK) {
    return 'too-weak'
  }

  const usedCharacterSetsCount = countUsedCharacterSets(password)

  if (usedCharacterSetsCount === 1) {
    return 'weak'
  }

  if (usedCharacterSetsCount === ALL_CHARACTER_SETS_COUNT && password.length >= MIN_LENGTH_FOR_STRONG) {
    return 'strong'
  }

  return 'medium'
}
