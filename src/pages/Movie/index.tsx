import { useLocation } from "react-router-dom";
import { MovieType } from "../../common/types";
import { MovieDetails } from "../../components/MovieDetails";
import useFetchDetailsById from "../../hooks/useFetchMovieById";

export default function Movie() {
  const href = useLocation();
  const objectId = href.pathname.split("/")[2];
  const objectType = href.pathname.split("/")[1];

  const { data: movie, isLoading } = useFetchDetailsById<MovieType>({
    objectId,
    objectType,
    name: objectType,
  });

  return !isLoading && movie ? (
    <MovieDetails {...movie} />
  ) : (
    <h1>Loading...</h1>
  );
}
