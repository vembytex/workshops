import React from "react";

export interface ISearchBarProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
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
          <input type="checkbox" /> Only show products in stock
        </label>
      </div>
    </div>
  );
}
