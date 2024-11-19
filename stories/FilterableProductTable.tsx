import React, { useState } from "react";
import { ProductTable } from "./ProductTable";
import items from "./items";
import { SearchBar } from "./SearchBar";

export function FilterableProductTable() {
  const [searchValue, setSearchValue] = useState("");

  const itemsToRender = items.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
      <ProductTable items={itemsToRender} />
    </div>
  );
}
