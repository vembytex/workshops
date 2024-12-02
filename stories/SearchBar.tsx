import React from "react";

export interface ISearchBarProps {
  searchValue: string;
  stockValue: boolean;
  onSearchValueChange: (value: string) => void;
  onStockValueChange: (value: boolean) => void;
}

export function SearchBar(props: ISearchBarProps) {
  return (
    <div>
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
