import { z } from 'zod'
import { localesSchema } from './schemas'

export type Locale = z.infer<typeof localesSchema>

export type LocalizedString = {
  [locale in Locale]: string
}

export type SelectOption<T extends string = string> = {
  children: LocalizedString
  value: T
}
