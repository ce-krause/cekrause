import createMdx from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

const mdx = createMdx()
const internationalization = createNextIntlPlugin('./src/intl.ts')

export default mdx(
  internationalization({
    pageExtensions: ['tsx', 'mdx'],
    reactStrictMode: false
  })
)
