import { getInternationalization } from '@/internationalization'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  const { dictionary } = getInternationalization()

  return {
    title: dictionary['page-titles'].projects
  }
}

const Projects = () => 'projects'

export default Projects
