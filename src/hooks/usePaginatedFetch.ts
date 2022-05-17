import { useQuery } from "react-query";

import api from "../services/api";

async function fetchPaginated<T>(page = 1, url: string): Promise<T> {
  const { data } = await api.get(
    `/${url}/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  ); //api_keys and page could be added separately with url as argument

  return data.results;
}

function usePaginatedFetch<T>(page: number, url: string) {
  return useQuery([url, page], () => fetchPaginated<T>(page, url), {
    keepPreviousData: true,
  }); //signaler and error handling?
}
export default usePaginatedFetch;
