
import styles from '../../../styles/pages/projects/moviesApp.module.css';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { faArrowLeft, faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MoviesApp({moviesData}) {

  const router = useRouter()

  const [movies, setMovies] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setMovies(moviesData)
  }, []);

  const searchHandler = (event) => {
    event.preventDefault()
    const searchTerm = searchValue
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5680d1d4486d908829007d88b01559c8&page=1&query="'

    if(searchTerm && searchTerm !== '') {
      //Beware May expose key on the frontend
      setPage(1)
      getMovies(SEARCH_API + searchTerm)
      // setSearchValue('')
    } else {
      router.reload(window.location.pathname)
    }
  }

  const getMovies = async (url) => {
    setMovies(null)
    let res
    let data
    try {
      res = await fetch(url)
      data = await res.json()
    } catch (error) {
      // Should reload page if we run out of pages
      router.reload(window.location.pathname)
    }

    console.log(data.results)
    setMovies(data.results)
  }

  const rightClickHandler = () => {
    setMovies(null)
    if(searchValue === ""){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5680d1d4486d908829007d88b01559c8&page=${page + 1}`)
    } else {
      const searchTerm = searchValue
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=5680d1d4486d908829007d88b01559c8&page=${page + 1}&query="`
      getMovies(SEARCH_API + searchTerm)
    }
    setPage(page + 1)
  }

  const leftClickHandler = () => {
    setMovies(null)
    if(searchValue === ""){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5680d1d4486d908829007d88b01559c8&page=${page - 1}`)
    } else {
      const searchTerm = searchValue
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=5680d1d4486d908829007d88b01559c8&page=${page - 1}&query="`
      getMovies(SEARCH_API + searchTerm)
    }

    setPage(page - 1)
  }

  const refreshHandler = () => {
    router.reload(window.location.pathname)
  }

  return (
    <div className={styles.container}>
      <header>
        <h1 onClick={refreshHandler}>My Movie DB <FontAwesomeIcon icon={faVideo} /></h1>
        <form id="form" onSubmit={searchHandler}>
          <input type="text" id="search" className={styles.search} placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </form>
      </header>
      <main className={styles.main}>
        {movies ? 
            movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
          :
            <div className={styles.loaderContainer}>
              <div className={styles.loader} id="loader"></div>
            </div>

        }
      </main>
      <div className={styles.paginationBtnContainer}>
        <button className={page === 1 ? styles.greyButton : ''} disabled={page === 1 ? true : false} onClick={leftClickHandler}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <span>{page}</span>
        <button className={page >= 10 ? styles.greyButton : ''} disabled={page >= 10 ? true : false} onClick={rightClickHandler}><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
  )
}


export async function getStaticProps(){
  // fetch data from API
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5680d1d4486d908829007d88b01559c8&include_adult=false&page=1'
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: {
      moviesData: data.results
    }
  };
}
