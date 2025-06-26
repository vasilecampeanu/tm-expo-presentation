import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

type Request = {
  endpoint: string;
};

const useFetch = <T>(request: Request) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const options = {
    method: "GET",
    url: `https://dummyjson.com/${request.endpoint}`,
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      console.log("api data:", response.data);
      setData(response.data);
    } catch (error) {
      console.log("api error:", error);
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
