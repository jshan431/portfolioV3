
import styles from '../../styles/pages/projects.module.css'
import { useMediaQuery } from 'react-responsive'

import FeaturedProjects from '../../sections/FeaturedProjects'
import FeaturedProjectsMobile from '../../sections/FeaturedProjectsMobile'
import ProjectsList from '../../sections/ProjectsList'
export default function Projects() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div className={styles.mainProjects}>
      {/* {isDesktopOrLaptop ? <FeaturedProjects /> : <FeaturedProjectsMobile />} */}
      <ProjectsList />
    </div>
  )
}
