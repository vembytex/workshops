import { createContext, useContext } from "react";
import { IItem } from "./items";

export interface IGlobalStore {
  items: IItem[];
  updateItems: () => void;
}

const defaultStore: IGlobalStore = {
  items: [],
  updateItems: () => {},
};

export const GlobalStoreContext = createContext(defaultStore);

export default GlobalStoreContext;

export function useStore() {
  return useContext(GlobalStoreContext);
}
