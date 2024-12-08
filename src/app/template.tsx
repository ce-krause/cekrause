'use client'

import { AnimatedContainer } from '@/components/animated-container'
import { useLocale } from '@/hooks/intl'
import { NAVIGATION_BAR_LINKS, PATHNAMES } from '@/utils/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useMemo } from 'react'

type TemplateProperties = {
  children: ReactNode
}

const Template = ({ children }: TemplateProperties) => {
  const locale = useLocale()
  const pathname = usePathname()
  const includes = useMemo(() => PATHNAMES.includes(pathname), [pathname])

  if (!includes) return children

  return (
    <div className='m-auto flex min-h-screen max-w-screen-sm flex-col gap-y-8 pb-8 pt-24'>
      <header className='flex justify-between'>
        <div>
          <h1>Henrique Krause</h1>
          <h2 className='text-medium-background text-sm'>Software developer</h2>
        </div>
        <nav className='flex gap-x-2'>
          {NAVIGATION_BAR_LINKS.map(({ children, ...properties }) => (
            <Link
              {...properties}
              key={properties.href}
              className='text-sm'
            >
              {children[locale]}
            </Link>
          ))}
        </nav>
      </header>
      <AnimatedContainer
        key={pathname}
        as='main'
        className='flex-1 space-y-8'
      >
        {children}
      </AnimatedContainer>
      <footer className='flex justify-between pt-12 text-sm'>
        <span>2024</span>
        <div>
          <span>Developed by&nbsp;</span>
          <Link
            href='/contact'
            className='font-medium'
          >
            me
          </Link>
          <span>.</span>
        </div>
      </footer>
    </div>
  )
}

export default Template
