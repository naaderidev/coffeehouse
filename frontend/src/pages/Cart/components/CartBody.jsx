import React, { useContext } from "react";
//----------Components
import BasketCard from "./BasketCard";
//----------Contexts
import { CartContext } from "../../../utils/providers/CartProvider";

export default function CartBody() {
  const { userCart } = useContext(CartContext);
  return (
    <div className="divide-y divide-gray-100 dark:divide-white/10">
      {userCart.map((product) => {
        return (
          <BasketCard
            key={product.id}
            _id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
            qty={product.qty}
          />
        );
      })}
    </div>
  );
}
