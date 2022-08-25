import { createContext, ReactNode, useContext, useState } from "react";
import { Url } from "url";

interface ICartContext {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: Url;
}

type ICart = IProduct[];

export const CartContext = createContext({});

export const CartProvider = ({ children }: ICartContext) => {
  const [cart, setCart] = useState<ICart>([]);

  const addProduct = (product: IProduct) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: IProduct) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };
  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};
