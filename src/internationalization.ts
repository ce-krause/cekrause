import { InternationalizationState } from '@/contexts/internationalization'
import { cookies } from 'next/headers'
import { Dictionary, Language } from './utils/types'

const internationalization = () => {
  let _language: Language | null = null
  let _dictionary: Dictionary | null = null

  return {
    getContext: (): InternationalizationState => {
      if (!_language) throw new Error('missing language from internationalization context')
      if (!_dictionary) throw new Error('missing dictionary from internationalization context')

      return {
        language: _language,
        dictionary: _dictionary
      }
    },
    setContext: ({ language, dictionary }: InternationalizationState) => {
      _language = language
      _dictionary = dictionary
    }
  }
}

const context = internationalization()

export const initializeInternationalization = async (): Promise<InternationalizationState> => {
  const store = await cookies()
  const cookie = store.get('LANGUAGE')
  const language = cookie?.value

  if (!language) throw new Error('missing language cookie')

  const file = await import(`@/assets/dictionaries/${language}.json`)

  if (!file) throw new Error(`missing dictionary for language ${language}`)

  const data = {
    language: language as Language,
    dictionary: file.default
  }

  context.setContext(data)

  return data
}

export const getInternationalization = context.getContext
