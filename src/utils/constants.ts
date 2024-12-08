import { Language, SelectOption } from './types'

export const SELECT_LANGUAGE_OPTIONS: SelectOption<Language>[] = [
  {
    children: {
      en: 'English',
      pt: 'Inglês'
    },
    value: 'en'
  },
  {
    children: {
      en: 'Portuguese',
      pt: 'Português'
    },
    value: 'pt'
  }
]

export const SELECT_THEME_OPTIONS: SelectOption[] = [
  {
    children: {
      en: 'System',
      pt: 'Sistema'
    },
    value: 'system'
  },
  {
    children: {
      en: 'Light',
      pt: 'Claro'
    },
    value: 'light'
  },
  {
    children: {
      en: 'Dark',
      pt: 'Escuro'
    },
    value: 'dark'
  }
]
