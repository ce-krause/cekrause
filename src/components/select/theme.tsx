'use client'

import { useTheme } from '@/hooks/theme'
import { THEME_SELECT_OPTIONS } from '@/utils/constants'
import { Select } from '.'

export const ThemeSelect = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Select
      options={THEME_SELECT_OPTIONS}
      value={theme}
      onChange={setTheme}
    />
  )
}
