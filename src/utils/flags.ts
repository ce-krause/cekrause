import { Flag, unstable_flag } from '@vercel/flags/next'
import { env } from 'process'
import { Pathname } from './types'

export const CAREER_FLAG = unstable_flag({
  key: 'CAREER',
  decide: () => env.NODE_ENV === 'development'
})

export const PROJECTS_FLAG = unstable_flag({
  key: 'PROJECTS',
  decide: () => env.NODE_ENV === 'development'
})

export const CONTACTS_FLAG = unstable_flag({
  key: 'CONTACTS',
  decide: () => env.NODE_ENV === 'development'
})

export const PATHNAMES_FLAG: {
  [pathname in Pathname]?: Flag<boolean>
} = {
  '/career': CAREER_FLAG,
  '/projects': PROJECTS_FLAG,
  '/contact': CONTACTS_FLAG
}
