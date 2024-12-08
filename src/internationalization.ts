'use server'

import { InternationalizationStateProperties } from '@/contexts/internationalization'
import { cookies } from 'next/headers'
import { Dictionary, Language } from './utils/types'

const internationalization = () => {
  let _language: Language | null = null
  let _dictionary: Dictionary | null = null

  return {
    getContext: (): InternationalizationStateProperties => {
      if (!_language) throw new Error('missing language from internationalization context')
      if (!_dictionary) throw new Error('missing dictionary from internationalization context')

      return {
        language: _language,
        dictionary: _dictionary
      }
    },
    setContext: ({ language, dictionary }: InternationalizationStateProperties) => {
      _language = language
      _dictionary = dictionary
    },
    updateLanguage: async (language: Language) => {
      const store = await cookies()

      store.set('LANGUAGE', language)
    }
  }
}

const { getContext, setContext, updateLanguage } = internationalization()

export const initializeInternationalization = async (language?: Language): Promise<InternationalizationStateProperties> => {
  if (!language) {
    const store = await cookies()
    const cookie = store.get('LANGUAGE')

    language = cookie?.value as Language
  }

  if (!language) throw new Error('missing language cookie')

  const file = await import(`@/assets/dictionaries/${language}.json`)

  if (!file) throw new Error(`missing dictionary for language ${language}`)

  const data = {
    language: language as Language,
    dictionary: file.default
  }

  setContext(data)

  return data
}

export const getInternationalization = getContext
export const updateInternationalizationLanguage = updateLanguage
