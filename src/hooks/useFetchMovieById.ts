import { useQuery } from "react-query";
import api from "../services/api";

type FetchDetailsProps = {
  objectId: string;
  objectType: string;
  name: string;
};

async function fetchDetails<T>(
  objectId: string,
  objectType: string
): Promise<T> {
  const response = await api.get(
    `/${objectType}/${objectId}?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return response.data;
}

function useFetchDetailsById<T>({
  objectId,
  objectType,
  name,
}: FetchDetailsProps) {
  return useQuery([name, objectId], () =>
    fetchDetails<T>(objectId, objectType)
  );
}
export default useFetchDetailsById;
