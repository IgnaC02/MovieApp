import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { MoviesGrid } from "../components/moviesGrid";
import { get } from "../utils/httpClients";
import movie from "./movie.json";
import styles from "./movieDetails.module.css";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true); // es para que si no cargan las img aparezca cargando
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true); //antes de que carguen las img ponemos que se muestre loading
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false); // una vez que yq cargó que muestre las img´s
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    // esto es lo que se mostrará si loading es true
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  let arrayPelicula = movie.title;
  arrayPelicula = arrayPelicula.replaceAll(" ", "-");
  // console.log(arrayPelicula);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails} `}>
        <p className={styles.firstItem}>
          <strong> Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Generes: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}{" "}
          {/*Esto es para hacer un map a genere y devolver un string */}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Release Date: </strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Production: </strong>
          {movie.production_companies.map((pr) => pr.name)}
        </p>
        <p>
          <strong>Watch the movie: </strong>
          <a
            href={`https://cuevana3.io/${arrayPelicula}`}
            target="blanck"
            className={styles.link}
          >
            Ver en Cuevana
          </a>
        </p>
      </div>
    </div>
  );
}
