import { useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

import { MovieBoxLogo } from "../../assets";

import * as S from "./styles";

export type MovieDetailsProps = {
  original_title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: number | string;
  runtime?: number;
  genres?: Array<{ id: number; name: string }>;
};

export const MovieDetails = ({
  original_title,
  poster_path,
  overview,
  vote_average,
  release_date,
  runtime,
  genres,
}: MovieDetailsProps) => {
  const history = useHistory();

  return (
    <>
      <S.Header>
        <FiArrowLeft size={24} onClick={() => history.goBack()} />
        <MovieBoxLogo />
      </S.Header>

      <S.Main>
        <S.BackdropPoster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />

        <S.Details>
          <S.MoviePoster
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />

          <div>
            <h4>{original_title}</h4>
            <p>{overview}</p>

            <S.Rate>
              <AiFillStar size={24} />
              <span>{vote_average}</span>
            </S.Rate>

            <S.TechnicalDetails>
              <span>
                Type
                <strong>Movie</strong>
              </span>
              <span>
                Release Date
                <strong>{release_date}</strong>
              </span>
              {runtime && (
                <span>
                  Run Time
                  <strong>{runtime} mins</strong>
                </span>
              )}
              {genres && (
                <span>
                  Genres
                  <strong>{genres?.map(({ name }) => name).join(", ")}</strong>
                </span>
              )}
            </S.TechnicalDetails>
          </div>
        </S.Details>
      </S.Main>
    </>
  );
};
