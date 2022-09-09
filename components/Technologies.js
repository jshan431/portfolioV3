import styles from '../styles/components/Technologies.module.css'
import Image from 'next/image'
import javascriptLogo from '../public/images/javascript-logo-0.png'
import htmlLogo from '../public/images/html-logo.png'
export default function Technologies({selectedPanel}) {

  return (
    <div className={`${styles.technologiesContainer}`}>
      <div className={styles.technologyPlaceholder}>

      </div>
      <div className={`${styles.technologiesLineOne} ${selectedPanel === 'second' ? styles.technologiesLineOneAnimate: ''}`}>
        <div className={styles.technologyOne}>
          <div className={styles.technologyOneImageWrapper}>
            <Image 
              src={htmlLogo}
              width={180}
              height={180}
            />
          </div>
        </div>
        <div className={styles.technologyTwo}>

            <Image 
              src={javascriptLogo}
              width={180}
              height={180}
            />

        </div>
      </div>
      <div className={styles.technologyPlaceholder}>

      </div>
    </div>
  )
}

/*

            <Image
              src={photos[0].attributes.formats.medium.url}
              width={642}
              height={361.13}
              srl_gallery_image="true"
              placeholder="blur"
              blurDataURL={photos[0].attributes.formats.thumbnail.url}
            />

*/