import { useState } from "react";
import type { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from "../data/products";

const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // console.log('onProductCountChange', count, product)

    setShoppingCart(oldShoppingCart => {

      console.log({ count });

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
    })
  }

  return {
    products,
    shoppingCart,

    onProductCountChange,
  }

}

export default useShoppingCart