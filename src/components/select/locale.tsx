'use client'

import { useLocale } from '@/hooks/intl'
import { setLocale } from '@/services/intl'
import { LOCALE_SELECT_OPTIONS } from '@/utils/constants'
import { RootSelect } from './root'

export const LocaleSelect = () => {
  const locale = useLocale()

  return (
    <RootSelect
      options={LOCALE_SELECT_OPTIONS}
      value={locale}
      onChange={setLocale}
    />
  )
}
