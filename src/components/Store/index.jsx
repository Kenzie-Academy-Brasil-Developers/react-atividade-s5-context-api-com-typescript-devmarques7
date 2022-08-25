import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { IProduct } from "../StoreContext";
import { StoreContext } from "../../Providers/StoreContext";
import { StoreContainer } from "./style";

const Store = () => {
  const { storeProducts, setProducts } = useContext(StoreContext);
  const { cart, addProduct, deleteProduct } = useContext(CartContext);

  console.log(storeProducts);

  return (
    <StoreContainer id="store">
      <header>
        <h1>Apple</h1>
      </header>
      <ul>
        {storeProducts?.map <
          IProduct >
          ((product) => {
            return <li key={product.id}></li>;
          })}
      </ul>
    </StoreContainer>
  );
};

export default Store;
