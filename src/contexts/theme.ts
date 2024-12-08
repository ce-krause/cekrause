'use client'

import { createContext } from 'react'

export type ThemeState = {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeState | null>(null)
