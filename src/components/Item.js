import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const cart = isInCart ? "in-cart" : null

  function handleSetIsInCart() {
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleSetIsInCart}>{ isInCart ? "Remove from cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
