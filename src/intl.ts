import { getRequestConfig } from 'next-intl/server'
import { getLocale } from './services/intl'

export default getRequestConfig(async () => {
  const locale = await getLocale()
  const file = await import(`@/assets/dictionaries/${locale}.json`)

  return {
    locale,
    messages: file.default
  }
})
