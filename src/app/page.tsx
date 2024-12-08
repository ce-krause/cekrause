import { useLocale } from '@/hooks/intl'
import dynamic from 'next/dynamic'

const Page = () => {
  const locale = useLocale()
  const Mdx = dynamic(() => import(`@/assets/mdx/${locale}/base.mdx`))

  return <Mdx />
}

export default Page
