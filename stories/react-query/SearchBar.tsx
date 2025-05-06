import { ChangeEvent } from "react";
import { ISearchFilters } from "./types";

export interface ISearchBarProps {
  value: ISearchFilters;
  onChange: (value: ISearchFilters) => void;
}

export function SearchBar({ onChange, value }: ISearchBarProps) {
  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    onChange({ ...value, searchTerm: ev.target.value });
  }

  function handleCheckboxChange() {
    onChange({ ...value, showOnlyInStock: !value.showOnlyInStock });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value.searchTerm}
        onChange={handleInputChange}
      />{" "}
      <br />
      <input
        type="checkbox"
        checked={value.showOnlyInStock}
        onChange={handleCheckboxChange}
      />{" "}
      <span>Only show products in stock</span>
    </div>
  );
}
