import { LanguageSelect } from '@/components/select/language'
import { ThemeSelect } from '@/components/select/theme'
import { initializeInternationalization } from '@/internationalization'
import { InternationalizationProvider } from '@/providers/internationalization'
import { ThemeProvider } from '@/providers/theme'
import type { Metadata } from 'next'
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
  const context = await initializeInternationalization()

  return (
    <html lang={context.language}>
      <body>
        <InternationalizationProvider {...context}>
          <ThemeProvider>
            <div className='absolute right-4 top-4 grid grid-cols-2 gap-x-2'>
              <ThemeSelect />
              <LanguageSelect />
            </div>
            {children}
          </ThemeProvider>
        </InternationalizationProvider>
      </body>
    </html>
  )
}

export default RootLayout
