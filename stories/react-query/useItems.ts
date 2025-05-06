import { useQuery } from "react-query";

export interface IUseItemsResult {}

export function useItems(): IUseItemsResult {
  const query = useQuery({
    queryKey: [],
    queryFn: () => {},
  });

  return {};
}
