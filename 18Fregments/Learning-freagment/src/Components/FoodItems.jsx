import React from "react";
import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  console.log("activeItems", activeItems);

  let onBuyButton = (item, event) => {
    // let newItems = [...activeItems, item];
    // setActiveItems(newItems);
    setActiveItems(item);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleByButton={() => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
