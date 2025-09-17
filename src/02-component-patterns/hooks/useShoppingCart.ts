import { useState } from "react";
import type { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from "../data/products";

const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // console.log('onProductCountChange', count, product)

    setShoppingCart(oldShoppingCart => {

      const productInCart = oldShoppingCart[product.id];

      const newCount = (productInCart?.count || 0) + count;

      if (newCount > 0) {
        return {
          ...oldShoppingCart,
          [product.id]: { ...product, count: newCount } // 👈 nueva copia, no mutación
        };
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return {
        ...rest
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