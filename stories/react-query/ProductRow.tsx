import { ChangeEvent } from "react";
import { IItem } from "../items";

export interface IProductRowProps {
  item: IItem;
  onChange: (value: IItem) => void;
}

export function ProductRow({ item, onChange }: IProductRowProps) {
  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    onChange({ ...item, name: ev.target.value });
  }

  return (
    <div>
      <input type="text" value={item.name} onChange={handleInputChange} /> |{" "}
      {item.price}
    </div>
  );
}
