'use client'

import { useTheme } from '@/hooks/theme'
import { THEME_SELECT_OPTIONS } from '@/utils/constants'
import { RootSelect } from './root'

export const ThemeSelect = () => {
  const { theme, setTheme } = useTheme()

  return (
    <RootSelect
      options={THEME_SELECT_OPTIONS}
      value={theme}
      onChange={setTheme}
    />
  )
}
