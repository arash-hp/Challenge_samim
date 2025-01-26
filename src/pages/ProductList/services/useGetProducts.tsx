import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { Product } from "../../../types/general";

export interface Page {
  data: Product[];
  previousCursor?: number;
  nextCursor?: number;
}

const getProducts = async ({
  pageParam = 0,
  search = "",
}: {
  pageParam: number;
  search: string;
}): Promise<Page> => {
  const response = await axiosInstance.get<{
    products: Product[];
    nextCursor?: number;
    previousCursor?: number;
  }>(`products?page=${pageParam}${search ? `&search=${search}` : ""}`);

  return {
    data: response.data,
    nextCursor: 1,
    previousCursor: response.data.previousCursor,
  };
};

export const useGetProducts = (search: string) => {
  return useInfiniteQuery<Page, Error>({
    queryKey: ["items", search],
    queryFn: ({ pageParam = 0 }) => getProducts({ pageParam, search }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });
};
