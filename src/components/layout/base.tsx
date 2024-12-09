import { ReactNode } from 'react'
import { Layout } from '.'
import { Footer } from '../footer'
import { NavigationBar } from '../navigation-bar'

type BaseLayoutProperties = {
  children: ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProperties) => (
  <Layout
    navigationBar={<NavigationBar />}
    footer={<Footer />}
  >
    {children}
  </Layout>
)
