import { AnimatePresence, motion } from 'framer-motion'
import {AppWrapper} from "../AppContext";
import Layout from '../components/Layout'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <AppWrapper>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
        <motion.main
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
          // className={styles.container}
        >
          <Component {...pageProps}/>
        </motion.main>
        </AnimatePresence>
      </Layout>
    </AppWrapper>

  )
}

export default MyApp
