import { AnimatePresence } from 'framer-motion'
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps}/>
    </AnimatePresence>
  )
}

export default MyApp
