'use client'

import { Dictionary, Language } from '@/utils/types'
import { createContext } from 'react'

export type InternationalizationState = {
  language: Language
  dictionary: Dictionary
  updateContext: (language: Language) => void
}

export type InternationalizationStateProperties = Omit<InternationalizationState, 'updateContext'>

export const InternationalizationContext = createContext<InternationalizationState | null>(null)
