import { z } from 'zod'
import { localesSchema, pathnamesSchema } from './schemas'

export type Pathname = z.infer<typeof pathnamesSchema>
export type Locale = z.infer<typeof localesSchema>

export type LocalizedString = {
  [locale in Locale]: string
}

export type SelectOption<T extends string = string> = {
  children: LocalizedString
  value: T
}
