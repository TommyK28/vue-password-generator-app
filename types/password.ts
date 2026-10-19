export type CharacterSetName = 'uppercase' | 'lowercase' | 'numbers' | 'symbols'

export type CharacterSetSelection = Record<CharacterSetName, boolean>

export type PasswordStrength = 'too-weak' | 'weak' | 'medium' | 'strong'
