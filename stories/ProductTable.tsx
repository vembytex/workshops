import React from "react";
import { IItem } from "./items";
import { ProductRow } from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";

export interface IProductTableProps {
  items: IItem[];
}

export function ProductTable(props: IProductTableProps) {
  const groupedItems = Object.entries<IItem[]>(
    props.items.reduce(
      (acc, item) => ({
        ...acc,
        [item.category]: [...(acc[item.category] ?? []), item],
      }),
      {}
    )
  );

  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
      {groupedItems.map(([group, items]) => (
        <>
          <ProductCategoryRow name={group} />
          {items.map((item) => (
            <ProductRow name={item.name} price={item.price} />
          ))}
        </>
      ))}
    </table>
  );
}
