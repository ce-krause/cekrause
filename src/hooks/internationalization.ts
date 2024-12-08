'use client'

import { InternationalizationContext, InternationalizationState } from '@/contexts/internationalization'
import { useContext } from 'react'

export const useInternationalization = (): InternationalizationState => {
  const context = useContext(InternationalizationContext)

  if (!context) throw new Error('useInternationalization must be used within InternationalizationProvider')

  return context
}
