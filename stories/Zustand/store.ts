import { create } from "zustand";

export interface IShoppingListState {}

export const useShoppingListService = create<IShoppingListState>((set) => ({}));
