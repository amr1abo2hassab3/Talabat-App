import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios.config";
import type { AxiosRequestConfig } from "axios";

interface IGetDataQuery<T> {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}

const useGetDataQuery = <T>({ queryKey, url, config }: IGetDataQuery<T>) => {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(url, config);
      return data;
    },
  });
};

export default useGetDataQuery;
