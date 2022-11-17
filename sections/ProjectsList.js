import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'

import styles from '../styles/sections/ProjectsList.module.css';
import ProjectCard from "../components/ProjectCard";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ProjectsData from "../public/data/projects"

export default function ProjectsList() {

  return (
    <section className={styles.container}>
      <h1 className={styles.title + ' mb-5' }>Additional Projects</h1>
      <div className={styles.gridWrapper}>
        {
          ProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>)
        }
      </div>

    </section>
  )
}