import { ShoppingListService } from "./ShoppingListService";
import { UserService } from "./UserService";
import { createServiceContext } from "./rx-state/service-adapter-react/context/ServiceContext";

export const context = createServiceContext(() => {
  const shoppingListService = new ShoppingListService();
  const userService = new UserService();

  return {
    shoppingListService,
    userService,
  };
});
