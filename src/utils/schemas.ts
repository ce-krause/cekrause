import { z } from 'zod'

export const pathnamesSchema = z.enum(['/', '/career', '/contact', '/projects'])
export const localesSchema = z.enum(['en', 'pt'])
