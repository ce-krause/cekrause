import { initializeInternationalization } from '@/internationalization'
import { InternationalizationProvider } from '@/providers/internationalization'
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
        <InternationalizationProvider {...context}>{children}</InternationalizationProvider>
      </body>
    </html>
  )
}

export default RootLayout
