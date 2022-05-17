import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

import {
  addFavorite,
  removeFavorite,
} from "../../store/reducers/favoriteSlice";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from "./styles";

export enum Category {
  tvShow = "TV Show",
  movie = "Movie",
}

export type MovieCardData = {
  id: number;
  original_title: string;
  poster_path: string;
  category: Category;
};

const getUrlEntityType = (category: Category) => {
  switch (category) {
    case Category.movie:
      return "movie";
    case Category.tvShow:
      return "tvshow";
    default:
      return "";
  }
};

export default function MovieCard(movieData: MovieCardData) {
  const { movies } = useAppSelector((state) => state.favorites);

  const link = `/${getUrlEntityType(movieData.category)}/${movieData.id}`;

  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const isFavoriteMovie = movies.find((movie) => movie.id === movieData.id);
    return !!isFavoriteMovie;
  });

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movieData.id));
      setIsFavorite((prevState) => !prevState);
    } else {
      dispatch(addFavorite(movieData));
      setIsFavorite((prevState) => !prevState); //duplicated
    }
  };

  return (
    <S.Container>
      <S.Favorite aria-label="toggle favorite">
        {isFavorite ? (
          <AiFillStar size={24} onClick={toggleFavorite} />
        ) : (
          <AiOutlineStar size={24} onClick={toggleFavorite} />
        )}{" "}
        {/* why duplicate the code? */}
      </S.Favorite>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <div>
        <S.Link to={link}>{movieData.original_title}</S.Link>
        <S.Category>{movieData.category}</S.Category>
      </div>
    </S.Container> // why whole card is not a link? could be used with redirect or history by click action
  );
}
