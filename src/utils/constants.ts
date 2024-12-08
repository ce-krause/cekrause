import { Language, SelectOption, TranslatedString } from './types'

export const PATHNAMES = ['/', '/career', '/contact', '/projects']

export const NAVIGATION_BAR_LINKS: {
  children: TranslatedString
  href: string
}[] = [
  {
    children: {
      en: 'Home',
      pt: 'Início'
    },
    href: '/'
  },
  {
    children: {
      en: 'Career',
      pt: 'Carreira'
    },
    href: '/career'
  },
  {
    children: {
      en: 'Projects',
      pt: 'Projetos'
    },
    href: '/projects'
  }
]

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
