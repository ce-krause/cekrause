'use server'

import { Locale } from '@/utils/types'
import { cookies } from 'next/headers'

export const getLocale = async (): Promise<Locale> => {
  const store = await cookies()
  const cookie = store.get('LOCALE')
  const locale = cookie?.value ?? 'en'

  return locale as Locale
}

export const setLocale = async (locale: Locale) => {
  const store = await cookies()

  store.set('LOCALE', locale)
}
