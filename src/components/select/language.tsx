'use client'

import { useInternationalization } from '@/hooks/internationalization'
import { SELECT_LANGUAGE_OPTIONS } from '@/utils/constants'
import { RootSelect } from './root'

export const LanguageSelect = () => {
  const { language, updateContext } = useInternationalization()

  return (
    <RootSelect
      options={SELECT_LANGUAGE_OPTIONS}
      value={language}
      onChange={updateContext}
    />
  )
}
