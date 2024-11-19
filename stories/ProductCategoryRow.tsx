import React from "react";

export interface IProductCategoryRowProps {
  name: string;
}

export function ProductCategoryRow({ name }: IProductCategoryRowProps) {
  return (
    <tr>
      <td colSpan={2}>
        <center>{name}</center>
      </td>
    </tr>
  );
}
