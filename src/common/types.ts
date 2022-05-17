export type MovieType = {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
  release_date: number;
  runtime: number;
  genres: Array<{ id: number; name: string }>;
  popularity: number;
};

export type TvType = {
  poster_path?: string;
  popularity: number;
  id: number;
  backdrop_path?: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};
