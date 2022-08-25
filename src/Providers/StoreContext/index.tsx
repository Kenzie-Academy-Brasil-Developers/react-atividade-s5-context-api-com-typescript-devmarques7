import { createContext, ReactNode, useState } from "react";
import { Url } from "url";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: Url;
}

type IStoreProducts = IProduct[];

interface IStoreContext {
  children: ReactNode;
}

export const StoreContext = createContext({});

export const StoreProvider = ({ children }: IStoreContext) => {
  const [storeProducts, setProducts] = useState<IStoreProducts>([]);

  return (
    <StoreContext.Provider value={{ storeProducts, setProducts }}>
      {children}
    </StoreContext.Provider>
  );
};
