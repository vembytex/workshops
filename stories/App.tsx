import React, { useContext, useState } from "react";
import { FilterableProductTable } from "./FilterableProductTable";
import GlobalStoreContext, { IGlobalStore } from "./context";

export interface IAppProps {}

export function App(props: IAppProps) {
  const store = createStore();
  return (
    <GlobalStoreContext.Provider value={store}>
      <FilterableProductTable />
    </GlobalStoreContext.Provider>
  );
}

function createStore(): IGlobalStore {
  const [items, setItems] = useState([
    { id: "id", name: "test", category: "test", price: "123", stocked: true },
  ]);

  return {
    items,
    updateItems: () => setItems([]),
  };
}
