'use client'

import { useLocale } from '@/hooks/intl'
import { SelectOption } from '@/utils/types'
import { ChangeEvent, useCallback } from 'react'

type SelectProperties<T extends string> = {
  options: SelectOption<T>[]
  value: string
  onChange: (value: T) => void
}

export const Select = <T extends string>({ options, onChange, ...properties }: SelectProperties<T>) => {
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
          {...properties}
          key={properties.value}
        >
          {children[locale]}
        </option>
      ))}
    </select>
  )
}
