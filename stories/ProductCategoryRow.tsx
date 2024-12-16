import React, { useContext } from "react";
import GlobalStoreContext, { useStore } from "./context";

export interface IProductCategoryRowProps {
  name: string;
}

export function ProductCategoryRow({ name }: IProductCategoryRowProps) {
  const store = useStore();
  return (
    <tr>
      <td colSpan={2}>
        <center>{name}</center>
        <button onClick={store.updateItems}>Clear items</button>
      </td>
    </tr>
  );
}
