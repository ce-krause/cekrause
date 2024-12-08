'use client'

import { ThemeContext, ThemeState } from '@/contexts/theme'
import { useContext } from 'react'

export const useTheme = (): ThemeState => {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('useTheme must be used within ThemeProvider')

  return context
}
