'use client'

import { Dictionary, Language } from '@/utils/types'
import { createContext } from 'react'

export type InternationalizationState = {
  language: Language
  dictionary: Dictionary
}

export const InternationalizationContext = createContext<InternationalizationState | null>(null)
