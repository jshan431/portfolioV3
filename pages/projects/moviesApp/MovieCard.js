import styles from '../../../styles/pages/projects/moviesApp.module.css';
export default function MovieCard({movie}) {

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

  return (
    <div className={styles.movie}>
      <img src={IMG_PATH + movie.poster_path} alt={movie.title}></img>
      <div className={styles.movieInfo}>
        <h3>{movie.title}</h3>
        <span className={movie.vote_average >= 8 ? styles.green : movie.vote_average >= 5 ? styles.orange : styles.red }>{movie.vote_average}</span>
      </div>
      <div className={styles.overview}>
        {movie.overview}
      </div>
    </div>
  )
}