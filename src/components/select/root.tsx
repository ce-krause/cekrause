'ise client'

import { useInternationalization } from '@/hooks/internationalization'
import { SelectOption } from '@/utils/types'
import { ChangeEvent, useCallback } from 'react'

type RootSelectProperties = {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
}

export const RootSelect = ({ options, onChange, ...properties }: RootSelectProperties) => {
  const { language } = useInternationalization()

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return (
    <select
      onChange={handleChange}
      className='bg-background text-sm'
      {...properties}
    >
      {options.map(({ children, ...properties }) => (
        <option
          key={properties.value}
          {...properties}
        >
          {children[language]}
        </option>
      ))}
    </select>
  )
}
