import { IItem } from "../items";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export interface IProductTableProps {
  items: IItem[];
  onChange: (item: IItem) => void;
}

export function ProductTable({ items, onChange }: IProductTableProps) {
  const categorizedItems: Record<string, IItem[]> = items.reduce<
    Record<string, IItem[]>
  >(
    (acc, item) => ({
      ...acc,
      [item.category]: [...(acc[item.category] ?? []), item],
    }),
    {}
  );

  return (
    <div>
      <div>Name | Price</div>

      {Object.entries(categorizedItems).map(([categoryName, items]) => (
        <>
          <ProductCategoryRow name={categoryName} />
          {items.map((item) => (
            <ProductRow key={item.id} item={item} onChange={onChange} />
          ))}
        </>
      ))}
    </div>
  );
}
