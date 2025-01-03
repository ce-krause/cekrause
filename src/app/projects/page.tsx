import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('page-titles')

  return {
    title: translate('projects')
  }
}

const ProjectsPage = () => {
  return 'projects'
}

export default ProjectsPage
