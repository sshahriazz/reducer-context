import React, {
  createContext,
  useReducer,
  Dispatch,
  HTMLAttributes,
} from "react";
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions,
} from "./reducers";

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [],
  shoppingCart: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const Provider: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }} {...props} />;
};
const AppProvider = React.memo(Provider);

export { AppProvider, AppContext };
