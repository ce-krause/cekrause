'use client'

import { InternationalizationContext, InternationalizationState } from '@/contexts/internationalization'
import { ReactNode } from 'react'

type InternationalizationProviderProperties = {
  children: ReactNode
} & InternationalizationState

export const InternationalizationProvider = ({ language, dictionary, ...properties }: InternationalizationProviderProperties) => (
  <InternationalizationContext.Provider
    value={{ language, dictionary }}
    {...properties}
  />
)
