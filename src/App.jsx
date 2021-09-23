import { MoviesGrid } from "./components/moviesGrid";
import styles from "./app.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { MovieDetails } from "./pages/movieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
      <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>MOVIES</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
