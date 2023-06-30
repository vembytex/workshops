import { BehaviorSubject, Observable, from, of } from "rxjs";
import { Action, IEmitableObservable, Service } from "./rx-state/core-service";
import { IItem } from "../items";
import { ignoreElements, map, tap } from "rxjs/operators";
import { ISearchFilters } from "../context-provider/store";
import { useEffect, useState } from "react";

export interface IShoppingListState {
  items: IItem[];
  selectedFilters?: ISearchFilters;
}

export class ShoppingListService extends Service<IShoppingListState> {
  public constructor() {
    super({
      items: [],
    });
  }

  public get items(): Observable<IItem[]> {
    return this.selector((state) => state.items);
  }

  public get filters(): Observable<ISearchFilters> {
    return this.selector(
      (state) =>
        state.selectedFilters ?? { searchTerm: "", showOnlyInStock: false }
    );
  }

  public get categories(): Observable<IItem[]> {
    return this.items.pipe(map((items) => items));
  }

  @Action()
  public setItems(items: IItem[]): IEmitableObservable<IShoppingListState> {
    return this.setState((state) => of({ ...state, items }));
  }

  @Action()
  public setItem(item: IItem): IEmitableObservable<IShoppingListState> {
    return this.state.pipe(
      tap(({ items }) =>
        this.setItems(items.map((i) => (i.id === item.id ? item : i)))
      )
    );
  }

  @Action()
  public fetchItems(): IEmitableObservable<void> {
    return from(
      fetch(
        "https://raw.githubusercontent.com/vembytex/workshops/introduction-to-react/tasks/items.json"
      )
    ).pipe(
      map((s) => ({})),
      ignoreElements()
    );
  }
}
