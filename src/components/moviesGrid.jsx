import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { get } from "../utils/httpClients";
import { MovieCard } from "./movieCard";
import styles from "./moviesGrid.module.css";
import spinner from "./Spinner";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

    if(isLoading){
      return <spinner />;
    }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
