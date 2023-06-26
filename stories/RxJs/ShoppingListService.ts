import { Service } from "./rx-state/core-service";

export interface IShoppingListState {}

export class ShoppingListService extends Service<IShoppingListState> {
  public constructor() {
    super({});
  }
}
