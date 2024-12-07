import dictionary from '@/assets/dictionaries/en.json'
import { z } from 'zod'
import { languagesSchema } from './schemas'

export type Language = z.infer<typeof languagesSchema>
export type Dictionary = typeof dictionary
