'use client'

import { AnimatedContainer } from '@/components/animated-container'
import { pathnamesSchema } from '@/utils/schemas'
import { usePathname } from 'next/navigation'
import { ReactNode, useMemo } from 'react'

export type LayoutProperties = {
  children: ReactNode
  navigationBar: ReactNode
  footer: ReactNode
}

export const Layout = ({ children, navigationBar, footer }: LayoutProperties) => {
  const pathname = usePathname()

  const valid = useMemo(() => {
    const parsed = pathnamesSchema.safeParse(pathname)

    return parsed.success
  }, [pathname])

  if (!valid) return children

  return (
    <div className='m-auto flex min-h-screen max-w-screen-sm flex-col gap-y-8 pb-8 pt-24'>
      {pathname !== '/contact' && (
        <header className='flex justify-between'>
          <div>
            <h1>Henrique Krause</h1>
            <h2 className='text-medium-background text-sm'>Software developer</h2>
          </div>
          {navigationBar}
        </header>
      )}
      <AnimatedContainer
        key={pathname}
        as='main'
        className='flex-1 space-y-8'
      >
        {children}
      </AnimatedContainer>
      {footer}
    </div>
  )
}
