'use client'

import { useTheme } from '@/hooks/theme'
import { SELECT_THEME_OPTIONS } from '@/utils/constants'
import { RootSelect } from './root'

export const ThemeSelect = () => {
  const { theme, setTheme } = useTheme()

  return (
    <RootSelect
      options={SELECT_THEME_OPTIONS}
      value={theme}
      onChange={setTheme}
    />
  )
}
