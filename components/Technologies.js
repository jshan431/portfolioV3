import Parallax from 'react-rellax'
import styles from '../styles/components/Technologies.module.css'
import Image from 'next/image'
import javascriptLogo from '../public/images/technologies/javascript-logo-0.png'
import htmlLogo from '../public/images/technologies/html-logo.png'
import cssLogo from '../public/images/technologies/css-logo.png'
import mongoDBLogo from '../public/images/technologies/mongo-db.png'
import reactLogo from '../public/images/technologies/react-logo.png'
import bootstrapLogo from '../public/images/technologies/bootstrap.png'
import sqlLogo from '../public/images/technologies/sql.png'
import nodeLogo from '../public/images/technologies/node.png'
import awsLogo from '../public/images/technologies/aws.png'

export default function Technologies({selectedPanel}) {

  return (
    <div className={`${styles.technologiesContainer} ${selectedPanel === 'second' ? styles.technologiesContainerAnimate: ''}`}>
      <div className={styles.technologyPlaceholder}>

      </div>
        <div className={`${styles.technologiesLineOne} ${selectedPanel === 'second' ? styles.technologiesLineOneAnimate: ''}`}>

            <div className={styles.technologyOne}>
              <div className={styles.technologyOneImageWrapper}>
                <Image 
                  src={htmlLogo}
                  width={180}
                  height={180}
                  alt="htmlLogo"
                />
              </div>
            </div>

          <div className={styles.technologyTwo}>
            <div className={styles.technologyTwoImageWrapper}>
              <Image 
                src={cssLogo}
                width={180}
                height={180}
                alt="cssLogo"
              />
            </div>
          </div>

          <div className={styles.technologyThree}>
            <Image 
              src={javascriptLogo}
              width={180}
              height={180}
              alt="javascriptLogo"
            />
          </div>
        </div>
      <div className={`${styles.technologiesLineTwo} ${selectedPanel === 'second' ? styles.technologiesLineTwoAnimate: ''}`}>
        <div className={styles.lineTwoTechnologyOne}>
          <Image 
            src={mongoDBLogo}
            width={180}
            height={180}
            alt="mongoDBLogo"
          />
        </div>
        <div className={styles.lineTwoTechnologyTwo}>
          <div className={styles.lineTwoTechnologyTwoWrapper}>
            <Image 
              src={reactLogo}
              width={180}
              height={180}
              alt="reactLogo"
            />
          </div>
        </div>
        <div className={styles.lineTwoTechnologyThree}>
          <div className={styles.lineTwoTechnologyThreeWrapper}>
            <Image 
              src={sqlLogo}
              width={180}
              height={180}
              alt="sqlLogo"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.technologiesLineThree} ${selectedPanel === 'second' ? styles.technologiesLineThreeAnimate: ''}`}>
        
        <div className={styles.lineThreeTechnologyOne}>
          <div className={styles.lineThreeTechnologyOneWrapper}>
            <Image 
              src={awsLogo}
              width={180}
              height={180}
              alt="awsLogo"
            />
          </div>
        </div>
        <div className={styles.lineThreeTechnologyTwo}>
          <div className={styles.lineThreeTechnologyTwoWrapper}>
            <Image 
              src={bootstrapLogo}
              width={180}
              height={180}
              alt="bootstrapLogo"
            />
          </div>
        </div>
        <div className={styles.lineThreeTechnologyThree}>
          <div className={styles.lineThreeTechnologyThreeWrapper}>
            <Image 
              src={nodeLogo}
              width={180}
              height={180}
              alt="nodeLogo"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

