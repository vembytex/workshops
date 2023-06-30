import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import { IItem } from "../items";

export interface IAppProps {}

interface ISearchFilters {
  searchTerm: string;
  showOnlyInStock: boolean;
}

interface IShoppingListState {
  items: IItem[];
  selectedFilters: ISearchFilters;
}

interface IShoppingListAction {
  type: "setFilters" | "setItems";
  payload: any;
}

function getInitialState() {
  return {
    items: [],
    selectedFilters: {
      searchTerm: "",
      showOnlyInStock: false,
    },
  };
}

export function App(props: IAppProps) {
  const [state, dispatch] = useReducer(
    (
      state: IShoppingListState,
      action: IShoppingListAction
    ): IShoppingListState => {
      switch (action.type) {
        case "setItems":
          return { ...state, items: action.payload };
        case "setFilters":
          return { ...state, selectedFilters: action.payload };
      }

      // Here we are getting in an action, and should return the updated state after the action is applied
      return { ...state };
    },
    getInitialState()
  );

  const { items, selectedFilters: filters } = state;

  function setItems(items: IItem[]) {
    dispatch({ type: "setItems", payload: items });
  }

  function setFilters(value: ISearchFilters) {
    dispatch({ type: "setFilters", payload: value });
  }

  const filteredItems = items.filter(
    (item) =>
      (!filters.showOnlyInStock || item.stocked) &&
      item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
  );

  function handleItemChange(item: IItem) {
    setItems(items.map((i) => (i.id === item.id ? item : i)));
  }

  function handleSend() {
    console.log(items);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vembytex/workshops/introduction-to-react/tasks/items.json"
    ).then((response) => response.json().then((result) => setItems(result)));
  }, []);

  return (
    <div>
      <SearchBar value={filters} onChange={setFilters} />
      <ProductTable items={filteredItems} onChange={handleItemChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

interface ISearchBarProps {
  value: ISearchFilters;
  onChange: (value: ISearchFilters) => void;
}

function SearchBar({ onChange, value }: ISearchBarProps) {
  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    onChange({ ...value, searchTerm: ev.target.value });
  }

  function handleCheckboxChange() {
    onChange({ ...value, showOnlyInStock: !value.showOnlyInStock });
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

interface IProductTableProps {
  items: IItem[];
  onChange: (item: IItem) => void;
}

function ProductTable({ items, onChange }: IProductTableProps) {
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

interface IProductRowProps {
  item: IItem;
  onChange: (value: IItem) => void;
}

function ProductRow({ item, onChange }: IProductRowProps) {
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
