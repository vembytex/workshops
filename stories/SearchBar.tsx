import React, { useContext } from "react";
import GlobalStoreContext, { useStore } from "./context";

export interface ISearchBarProps {
  searchValue: string;
  stockValue: boolean;
  onSearchValueChange: (value: string) => void;
  onStockValueChange: (value: boolean) => void;
}

export function SearchBar(props: ISearchBarProps) {
  const store = useStore();
  return (
    <div>
      total items: {store.items.length}
      <button onClick={store.updateItems}>Clear items</button>
      <input
        value={props.searchValue}
        onChange={(e) => props.onSearchValueChange(e.target.value)}
        placeholder="Search..."
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={props.stockValue}
            onChange={(e) => props.onStockValueChange(!props.stockValue)}
          />{" "}
          Only show products in stock
        </label>
      </div>
    </div>
  );
}
