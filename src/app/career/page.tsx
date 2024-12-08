import { getInternationalization } from '@/internationalization'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  const { dictionary } = getInternationalization()

  return {
    title: dictionary['page-titles'].career
  }
}

const Career = () => 'career'

export default Career
