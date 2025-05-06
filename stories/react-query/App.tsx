import React, { ChangeEvent, useEffect, useState } from "react";
import { IItem } from "../items";
import { ISearchFilters } from "./types";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export interface IAppProps {}

export function App(props: IAppProps) {
  const [items, setItems] = useState<IItem[]>([]);
  const [filters, setFilters] = useState<ISearchFilters>({
    searchTerm: "",
    showOnlyInStock: false,
  });

  const filteredItems = items.filter(
    (item) =>
      (!filters.showOnlyInStock || item.stocked) &&
      item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
  );

  function handleItemChange(item: IItem) {
    setItems(items.map((i) => (i.id === item.id ? item : i)));
  }

  function handleSend() {
    console.log(items);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vembytex/workshops/introduction-to-react/tasks/items.json"
    ).then((response) => response.json().then((result) => setItems(result)));
  }, []);

  return (
    <div>
      <SearchBar value={filters} onChange={setFilters} />
      <ProductTable items={filteredItems} onChange={handleItemChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
