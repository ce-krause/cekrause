import { useLocale } from '@/hooks/intl'
import { NAVIGATION_BAR_LINKS } from '@/utils/constants'
import { PATHNAMES_FLAG } from '@/utils/flags'
import Link from 'next/link'

export const NavigationBar = () => {
  const locale = useLocale()

  return (
    <nav className='flex gap-x-2'>
      {NAVIGATION_BAR_LINKS.map(async ({ children, ...properties }) => {
        const flag = PATHNAMES_FLAG[properties.href]

        if (flag) {
          const enabled = await flag()

          if (!enabled) {
            return
          }
        }

        return (
          <Link
            {...properties}
            key={properties.href}
            className='text-sm'
          >
            {children[locale]}
          </Link>
        )
      })}
    </nav>
  )
}
