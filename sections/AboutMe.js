// import { useState } from 'react';
import styles from '../styles/sections/AboutMe.module.css';
// import Technologies from '../components/Technologies';
// import AboutMe from '../components/AboutMe';
import Photos from '../components/Photos';
// import Contact from '../components/Contact';
// import Clients from '../components/Clients';
import Image from 'next/image';

import htmlLogo from '../public/images/technologies/html-logo.png'
import cssLogo from '../public/images/technologies/css-logo.png'
import javascriptLogo from '../public/images/technologies/javascript-logo-0.png'
import mongoDBLogo from '../public/images/technologies/mongo-db.png'
import reactLogo from '../public/images/technologies/react-logo.png'
import bootstrapLogo from '../public/images/technologies/bootstrap.png'
import sqlLogo from '../public/images/technologies/sql.png'
import nodeLogo from '../public/images/technologies/node.png'
import awsLogo from '../public/images/technologies/aws.png'

import abcLogo from '../public/images/clients/abc.png'
import blumhouseLogo from '../public/images/clients/blumhouse.png'
import focusLogo from '../public/images/clients/focus_features.png'

import openroadLogo from '../public/images/clients/openroad.png'
import nickelodeanLogo from '../public/images/clients/nickelodean.png'
import jadaLogo from '../public/images/clients/jada.png'

export default function AboutMe() {

  return (
    <section className={styles.container}>
      <div className={styles.aboutMeLeft}>
        <div className={styles.aboutMeLeftText + ' ' + styles.aboutMeLeftBox}>
          <h4>- My Story</h4>
          <h4 className='pt-2'>
            Since graduating San Francisco State University with a B.S in Computer Science, I've been working as a freelance Web Developer and have had the privelege of working with some incredible clients using various web technologies.
          </h4>
        </div>
        <div className={'pt-4 ' + styles.aboutMeLeftBox}>
          <h4>- Tech Stack</h4>
          <div className={'pt-2 ' + styles.aboutMeLeftTechnologiesRow}>
            <div className={styles.technology}>
              <Image 
                src={htmlLogo}
                width={180}
                height={180}
              />
            </div>
            <div className={styles.technology}>
              <Image 
                src={cssLogo}
                width={180}
                height={180}
              />
            </div>
            <div className={styles.technology}>
              <Image 
                src={javascriptLogo}
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className={styles.aboutMeLeftTechnologiesRow + ' mt-2'}>
            <div className={styles.technology}>
                <Image 
                  src={mongoDBLogo}
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.technology}>
                <Image 
                  src={reactLogo}
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.technology}>
                <Image 
                  src={bootstrapLogo}
                  width={180}
                  height={180}
                />
              </div>
          </div>
          <div className={styles.aboutMeLeftTechnologiesRow + ' mt-2'}>
            <div className={styles.technology}>
                <Image 
                  src={sqlLogo}
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.technology}>
                <Image 
                  src={nodeLogo}
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.technology}>
                <Image 
                  src={awsLogo}
                  width={180}
                  height={180}
                />
              </div>
          </div>
        </div>
        <div className={'pt-4 ' + styles.aboutMeLeftBox}>
          <h4>- Clients</h4>
          <div className={'pt-2 ' + styles.aboutMeLeftClientsRow}>
            <div className={styles.client}>
              <Image 
                src={abcLogo}
                width={80}
                height={80}
              />
            </div>
            <div className={styles.client}>
              <Image 
                src={blumhouseLogo}
                width={180}
                height={51.5}
              />
            </div>
            <div className={styles.client}>
              <div>
                <Image 
                  src={focusLogo}
                  width={180}
                  height={50}
                />
              </div>

            </div>
          </div>
          <div className={'pt-2 ' + styles.aboutMeLeftClientsRow}>
            <div className={styles.client}>
              <Image 
                src={jadaLogo}
                width={180}
                height={86.5}
              />
            </div>
            <div className={styles.client}>
              <Image 
                src={nickelodeanLogo}
                width={180}
                height={26}
              />
            </div>
            <div className={styles.client}>
              <div>
                <Image 
                  src={openroadLogo}
                  width={180}
                  height={26}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMeRight}>
        <Photos />
      </div>
    </section>
  )
}

/*

        <motion.div 
          initial="hidden"
          animate="visible"
          // animate={testControls}
          variants={container}
          transition={{ delay: 1}}
          className={styles.rightSideTextContainer}
        >
          {words1.map((word, index) => (
            <motion.span variants={child} className={styles.textWords} key={index} lang="de">
              {word}
            </motion.span>
          ))}
          <h3 className="mb-2 mt-2">Hi, I'm Web Developer and Designer from San Francisco, California.</h3>
          <h4>
            I specialize in full stack web develop using modern web technologies, and also have an excellect understanding of good web design principles.
          </h4>
        </motion.div>

*/