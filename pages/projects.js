
import styles from '../styles/pages/projects.module.css'
// import styles from '../styles/pages/about.module.css'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Projects() {
  return (
    <div className={styles.mainProjects}>
      <FeaturedProjects />
    </div>
  )
}
