import { createContext, useContext, useReducer } from "react";
import { IItem } from "../items";

export interface ISearchFilters {
  searchTerm: string;
  showOnlyInStock: boolean;
}

export interface IShoppingListState {
  items: IItem[];
  selectedFilters: ISearchFilters;
}

export interface IShoppingListAction {
  type: "setFilters" | "setItems" | "setItem";
  payload: any;
}

export interface IGlobalStore {
  state: IShoppingListState;
  dispatch: (action: IShoppingListAction) => void;
}

export function getInitialState() {
  return {
    items: [],
    selectedFilters: {
      searchTerm: "",
      showOnlyInStock: false,
    },
  };
}

export const Store = createContext<IGlobalStore>({
  state: getInitialState(),
  dispatch: () => {},
});

export function useStoreReducer() {
  return useReducer(
    (
      state: IShoppingListState,
      action: IShoppingListAction
    ): IShoppingListState => {
      switch (action.type) {
        case "setItems":
          return { ...state, items: action.payload };
        case "setFilters":
          return { ...state, selectedFilters: action.payload };
        case "setItem":
          return {
            ...state,
            items: state.items.map((i) =>
              i.id === action.payload.id ? action.payload : i
            ),
          };
      }

      // Here we are getting in an action, and should return the updated state after the action is applied
      return { ...state };
    },
    getInitialState()
  );
}

export function useStore() {
  return useContext(Store);
}
