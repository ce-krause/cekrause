import { AnimatedContainer } from '@/components/animated-container'
import { BaseLayout } from '@/components/layout/base'
import { LocaleSelect } from '@/components/select/locale'
import { ThemeSelect } from '@/components/select/theme'
import { ThemeProvider } from '@/providers/theme'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Henrique Krause',
    default: 'Henrique Krause'
  }
}

type RootLayoutProperties = {
  children: ReactNode
}

const RootLayout = async ({ children }: RootLayoutProperties) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ThemeProvider>
            <AnimatedContainer>
              <div className='absolute right-4 top-4 grid grid-cols-2 gap-x-2'>
                <ThemeSelect />
                <LocaleSelect />
              </div>
              <BaseLayout>{children}</BaseLayout>
            </AnimatedContainer>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
