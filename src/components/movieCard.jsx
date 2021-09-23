import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          className={styles.movieImage}
          src={imageUrl}
          width={230}
          height={345}
          alt={movie.title}
        />
      </Link>
      <div className={styles.title}>{movie.title}</div>
    </li>
  );
}
