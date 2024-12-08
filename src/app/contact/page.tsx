import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('page-titles')

  return {
    title: translate('contact')
  }
}

const Contact = () => 'contact'

export default Contact
