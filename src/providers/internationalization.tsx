'use client'

import { InternationalizationContext, InternationalizationStateProperties } from '@/contexts/internationalization'
import { updateInternationalizationLanguage } from '@/internationalization'
import { Language } from '@/utils/types'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useCallback } from 'react'

type InternationalizationProviderProperties = {
  children: ReactNode
} & InternationalizationStateProperties

export const InternationalizationProvider = ({ children, ...value }: InternationalizationProviderProperties) => {
  const router = useRouter()
  const pathname = usePathname()

  const updateContext = useCallback(
    async (language: Language) => {
      await updateInternationalizationLanguage(language)

      router.replace(pathname)
    },
    [pathname, router]
  )

  return <InternationalizationContext.Provider value={{ updateContext, ...value }}>{children}</InternationalizationContext.Provider>
}
