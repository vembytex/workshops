import { ShoppingListService } from "./ShoppingListService";
import { createServiceContext } from "./rx-state/service-adapter-react/context/ServiceContext";

export const context = createServiceContext(() => {
  const shoppingListService = new ShoppingListService();

  return {
    shoppingListService,
  };
});
