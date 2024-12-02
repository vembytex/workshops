import React, { useState, useEffect } from "react";
import { ProductTable } from "./ProductTable";
import { IItem } from "./items";
import { SearchBar } from "./SearchBar";

function useItems(filter: string): {
  isLoading: boolean;
  items: IItem[];
  error;
} {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function getAndSetData() {
    setIsLoading(true);
    const response = await fetch(
      `https://raw.githubusercontent.com/vembytex/workshops/introduction-to-react/tasks/items.json?filter=${filter}`
    );
    const result = await response.json();

    if (!response.ok)
      throw new Error("Requst failed with status code" + response.status);

    setItems(result);
    setIsLoading(false);
  }

  useEffect(() => {
    getAndSetData();
  }, []);

  return { items, error, isLoading };
}

export function FilterableProductTable() {
  const [searchValue, setSearchValue] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const { items, error, isLoading } = useItems(`search=${searchValue}`);

  const itemsToRender = items.filter(
    (item) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) &&
      (!showInStockOnly || item.stocked)
  );

  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        stockValue={showInStockOnly}
        onStockValueChange={setShowInStockOnly}
        onSearchValueChange={setSearchValue}
      />
      {isLoading && "Loading results..."}
      {error}
      <ProductTable items={itemsToRender} />
    </div>
  );
}
