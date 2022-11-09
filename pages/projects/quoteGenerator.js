import { useState, useEffect } from 'react';
import styles from '../../styles/pages/projects/quoteGenerator.module.css';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function quoteGenerator({quotes}) {

  const fetchedQuotes = quotes
  const quote = fetchedQuotes[Math.floor(Math.random() * fetchedQuotes.length)]

  const [quoteText, setQuoteText] = useState(null);
  const [quoteAuthor, setQuoteAuthor] = useState(null);
  const [longText, setLongText] = useState(null);

  useEffect(() => {
    checkForLongQuote(quote)
    checkForAuthor(quote)
    setQuoteText(quote.text)
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const newQuoteBtnHandler = () => {
    setQuoteText(null)
    setQuoteAuthor(null)
    setLongText(null)
    const quote = fetchedQuotes[Math.floor(Math.random() * fetchedQuotes.length)];
    checkForLongQuote(quote)
    checkForAuthor(quote)
    setQuoteText(quote.text)
  }

  const checkForAuthor = (quote) => {
    if(!quote.author){
      setQuoteAuthor('Unknown');
    } else {
      setQuoteAuthor(quote.author);
    }
  }

  const checkForLongQuote = (quote) => {
    if(quote.text.length > 100){
      setLongText(true);
    } else {
      setLongText(false);
    }
  }

  const tweetBtnHandler = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;
    window.open(twitterUrl, '_blank')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quote Generator</h1>
      {
        quoteText ? 
          <div className={styles.quoteContainer}>
            <div className={styles.quoteText}>
              <FontAwesomeIcon icon={faQuoteLeft}/>
              &nbsp;
              <span id="quote" className={longText ? styles.longQuote : ''}>{quoteText}</span>
              &nbsp;
              <FontAwesomeIcon icon={faQuoteRight}/>
              {/* <span id="quote">Random Text For Now</span> */}
            </div>
            <div className={styles.quoteAuthor}>
              <span id="author">{quoteAuthor}</span>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={tweetBtnHandler} className={styles.twitterButton} id="twitter" title="Tweet This!">
                <FontAwesomeIcon icon={faTwitter}/>
              </button>
              <button onClick={newQuoteBtnHandler}>New Quote</button>
            </div>
          </div>
        :
          <div className={styles.loader} id="loader"></div>
      }
    </div>
  )
}

//<FontAwesomeIcon icon={faGithub}  className={styles.headingIcons + " mt-2"}/>

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()
  
//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getStaticProps() {
  const apiUrl = 'https://type.fit/api/quotes';
  const res = await fetch(apiUrl)
  const quotes = await res.json()
  return {
    props: {
      quotes: quotes,
    }
  }
}