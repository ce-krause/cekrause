'use client'

import { useLocale } from '@/hooks/intl'
import { SelectOption } from '@/utils/types'
import { ChangeEvent, useCallback } from 'react'

type RootSelectProperties<T extends string> = {
  options: SelectOption<T>[]
  value: string
  onChange: (value: T) => void
}

export const RootSelect = <T extends string>({ options, onChange, ...properties }: RootSelectProperties<T>) => {
  const locale = useLocale()

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value as T)
    },
    [onChange]
  )

  return (
    <select
      onChange={handleChange}
      className='min-w-24 bg-background text-sm'
      {...properties}
    >
      {options.map(({ children, ...properties }) => (
        <option
          key={properties.value}
          {...properties}
        >
          {children[locale]}
        </option>
      ))}
    </select>
  )
}
