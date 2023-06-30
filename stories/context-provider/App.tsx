import { ChangeEvent, useEffect } from "react";
import { IItem } from "../items";
import { useStore } from "./store";

export interface IAppProps {}

export function App(props: IAppProps) {
  const {
    state: { items },
    dispatch,
  } = useStore();

  function handleSend() {
    console.log(items);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vembytex/workshops/introduction-to-react/tasks/items.json"
    ).then((response) =>
      response
        .json()
        .then((result) => dispatch({ type: "setItems", payload: result }))
    );
  }, []);

  return (
    <div>
      <SearchBar />
      <ProductTable />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

interface ISearchBarProps {}

function SearchBar(props: ISearchBarProps) {
  const {
    state: { selectedFilters: value },
    dispatch,
  } = useStore();

  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "setFilters",
      payload: { ...value, searchTerm: ev.target.value },
    });
  }

  function handleCheckboxChange() {
    dispatch({
      type: "setFilters",
      payload: { ...value, showOnlyInStock: !value.showOnlyInStock },
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value.searchTerm}
        onChange={handleInputChange}
      />{" "}
      <br />
      <input
        type="checkbox"
        checked={value.showOnlyInStock}
        onChange={handleCheckboxChange}
      />{" "}
      <span>Only show products in stock</span>
    </div>
  );
}

interface IProductTableProps {}

function ProductTable(props: IProductTableProps) {
  const {
    state: { items, selectedFilters: filters },
  } = useStore();

  const filteredItems = items.filter(
    (item) =>
      (!filters.showOnlyInStock || item.stocked) &&
      item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
  );

  const categorizedItems: Record<string, IItem[]> = filteredItems.reduce<
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
            <ProductRow key={item.id} item={item} />
          ))}
        </>
      ))}
    </div>
  );
}

interface IProductRowProps {
  item: IItem;
}

function ProductRow({ item }: IProductRowProps) {
  const { dispatch } = useStore();
  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setItem", payload: { ...item, name: ev.target.value } });
  }

  return (
    <div>
      <input type="text" value={item.name} onChange={handleInputChange} /> |{" "}
      {item.price}
    </div>
  );
}

interface IProductCategoryRow {
  name: string;
}

function ProductCategoryRow({ name }: IProductCategoryRow) {
  return (
    <div>
      <strong>{name}</strong>
    </div>
  );
}
