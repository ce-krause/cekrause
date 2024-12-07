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

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
)

export default RootLayout
