import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/components/ProjectCard.module.css'


/* To get arrow icons to appear? */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProjectCard({project}) {


  return (
    <Link href={`/projects/${project.slug}`}>
      <div className={styles.card}>
        <div className={`${styles.cardHeader} ${styles.animatedBg}`}>
          <img src={project.image} />
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle + ' ' + styles.animatedBg + '' + styles.animatedBgText}>
            {project.name}
          </h3>
          <p className={styles.cardExcerpt}>
            {project.description}
          </p>
          {/* <div className={styles.author}>
            <div className={styles.profileImg + '' + styles.animatedBg}>&nbsp;</div>
            <div className={styles.authorInfo}>
              <strong className={styles.animatedBg + '' + styles.animatedBgText}>
                &nbsp;
              </strong>
              <small className={styles.animatedBg + '' + styles.animatedBgText}>&nbsp;</small>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  )
}