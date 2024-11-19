import { IItem } from "./items";
import React from "react";

export interface IProductRowProps {
  name: string;
  price: string;
}

export function ProductRow({ name, price }: IProductRowProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
