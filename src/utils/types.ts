import dictionary from '@/assets/dictionaries/en.json'
import { z } from 'zod'
import { languagesSchema } from './schemas'

export type Language = z.infer<typeof languagesSchema>
export type Dictionary = typeof dictionary

export type SelectOption<T extends string = string> = {
  children: {
    [language in Language]: string
  }
  value: T
}
