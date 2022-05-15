import { useQuery } from "react-query";

import api from "../services/api";

import { MovieType } from "../common/types";

type PaginatedFetch = (page: number) => Promise<MovieType[]>;

const fetchPaginated: PaginatedFetch = async (page = 1) => {
  const { data } = await api.get(
    `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  ); //api_keys and page could be added separately with url as argument

  return data.results;
};

const usePaginatedFetch = (page: number) =>
  useQuery(["movies", page], () => fetchPaginated(page), {
    keepPreviousData: true,
  }); //signaler and error handling?

export default usePaginatedFetch;
