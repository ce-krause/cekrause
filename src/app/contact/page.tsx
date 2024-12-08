import { getInternationalization } from '@/internationalization'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  const { dictionary } = getInternationalization()

  return {
    title: dictionary['page-titles'].contact
  }
}

const Contact = () => 'contact'

export default Contact
