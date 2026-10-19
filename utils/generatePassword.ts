import type { CharacterSetName, CharacterSetSelection } from '~/types/password'
import { CHARACTER_SETS } from './characterSets'

const UINT32_RANGE = 2 ** 32

/**
 * Rejection sampling – values from the incomplete last block are discarded,
 * so every index has exactly the same probability (no modulo bias).
 */
function getRandomIndex(maxExclusive: number): number {
  const unbiasedLimit = UINT32_RANGE - (UINT32_RANGE % maxExclusive)
  const randomValues = new Uint32Array(1)

  do {
    crypto.getRandomValues(randomValues)
  } while (randomValues[0]! >= unbiasedLimit)

  return randomValues[0]! % maxExclusive
}

function pickRandomCharacter(characters: string): string {
  return characters[getRandomIndex(characters.length)]!
}

function shuffleCharacters(characters: string[]): string[] {
  const shuffled = [...characters]

  for (let index = shuffled.length - 1; index > 0; index--) {
    const swapIndex = getRandomIndex(index + 1)
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex]!, shuffled[index]!]
  }

  return shuffled
}

function getSelectedCharacterSets(selection: CharacterSetSelection): string[] {
  return (Object.keys(CHARACTER_SETS) as CharacterSetName[])
    .filter((name) => selection[name])
    .map((name) => CHARACTER_SETS[name])
}

/**
 * Each selected character set is guaranteed to appear at least once
 * (as long as the length allows it).
 */
export function generatePassword(length: number, selection: CharacterSetSelection): string {
  const selectedSets = getSelectedCharacterSets(selection)

  if (length <= 0 || selectedSets.length === 0) {
    return ''
  }

  const combinedCharacters = selectedSets.join('')
  const guaranteedCharacters = selectedSets.slice(0, length).map(pickRandomCharacter)
  const remainingCharacters = Array.from(
    { length: length - guaranteedCharacters.length },
    () => pickRandomCharacter(combinedCharacters)
  )

  return shuffleCharacters([...guaranteedCharacters, ...remainingCharacters]).join('')
}
