'use client'

import { ThemeContext } from '@/contexts/theme'
import { ReactNode, useCallback, useEffect, useState } from 'react'

export type ThemeProviderProperties = {
  children: ReactNode
}

export const ThemeProvider = ({ ...properties }: ThemeProviderProperties) => {
  const [theme, set] = useState(localStorage.getItem('THEME') ?? 'light')

  const setTheme = useCallback((theme: string) => {
    set(theme)

    localStorage.setItem('THEME', theme)
  }, [])

  const handleChange = useCallback((event: MediaQueryListEvent) => document.documentElement.classList.toggle('dark', event.matches), [])

  useEffect(() => {
    const query = matchMedia('(prefers-color-scheme:dark)')

    document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && query.matches))

    if (theme !== 'system') return

    query.addEventListener('change', handleChange)

    return () => query.removeEventListener('change', handleChange)
  }, [theme, handleChange])

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
      {...properties}
    />
  )
}
