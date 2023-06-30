import { create } from "zustand";
import { IItem } from "../items";
import { ISearchFilters } from "../context-provider/store";

export interface IShoppingListStore {
  items: IItem[];
  selectedFilters: ISearchFilters;
  setItems: (items: IItem[]) => void;
  setItem: (item: IItem) => void;
  setFilters: (value: ISearchFilters) => void;
  fetchItems: () => Promise<void>;
}

export const useShoppingListService = create<IShoppingListStore>(
  (set, get) => ({
    items: [],
    selectedFilters: { searchTerm: "", showOnlyInStock: false },
    setItems: (items) => set((state) => ({ ...state, items: items })),
    setItem: (item) => {
      get().setItems(get().items.map((i) => (i.id === item.id ? item : i)));
    },
    setFilters: (value) =>
      set((state) => ({ ...state, selectedFilters: value })),
    fetchItems: async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/vembytex/workshops/introduction-to-react/tasks/items.json"
      );
      const data = await response.json();
      get().setItems(data);
    },
  })
);
