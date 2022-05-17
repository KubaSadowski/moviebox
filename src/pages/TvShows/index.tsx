import { useLocation } from "react-router-dom";
import { TvType } from "../../common/types";
import { MovieDetails, MovieDetailsProps } from "../../components/MovieDetails";
import useFetchDetailsById from "../../hooks/useFetchMovieById";

export default function TvShow() {
  const href = useLocation();
  const objectId = href.pathname.split("/")[2];
  const objectType = href.pathname.split("/")[1];

  const { data: TvShow, isLoading } = useFetchDetailsById<TvType>({
    objectId,
    objectType: "tv",
    name: objectType,
  });

  const mappedTvShow: MovieDetailsProps = {
    original_title: TvShow?.original_name ? TvShow?.original_name : "",
    poster_path: TvShow?.poster_path ? TvShow?.poster_path : "#",
    overview: TvShow?.overview ? TvShow?.overview : "",
    vote_average: TvShow?.vote_average ? TvShow?.vote_average : 0,
    release_date: TvShow?.first_air_date ? TvShow?.first_air_date : "",
  };

  return !isLoading && TvShow ? (
    <MovieDetails {...mappedTvShow} />
  ) : (
    <h1>Loading...</h1>
  );
}
