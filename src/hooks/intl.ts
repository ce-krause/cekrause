import { Locale } from '@/utils/types'
import { useLocale as useNextLocale } from 'next-intl'

export const useLocale = (): Locale => {
  const locale = useNextLocale()

  return locale as Locale
}
