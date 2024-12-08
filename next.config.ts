import createNextIntlPlugin from 'next-intl/plugin'

const internationalization = createNextIntlPlugin('./src/intl.ts')

export default internationalization({
  reactStrictMode: false
})
