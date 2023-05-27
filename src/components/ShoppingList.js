import React, { useState }from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [foods, setFood] = useState(items)
  const [selectedCategory, setIsSelectedCategory] = useState("All")

  const foodToDisPlay = foods.filter((food) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return food.category === selectedCategory 
    }
  })
  function handleChange(event) {
    setIsSelectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodToDisPlay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
