export interface IProductCategoryRow {
  name: string;
}

export function ProductCategoryRow({ name }: IProductCategoryRow) {
  return (
    <div>
      <strong>{name}</strong>
    </div>
  );
}
