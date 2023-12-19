import React from "react";
import style from "./Item.module.css";

function Item({ foodItem }) {
  // let { foodItem } = props;  this way also we can use else we can pass directly in arg

  const handleBuyClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being Bought`);
  };
  return (
    <>
      {/* <li className="list-group-item">{props.foodItem}</li> if we are not using descructuring */}
      {/* <li className="list-group-item kg-item"> if we are not using class from item.module.css
        <span className="kg-apan">{foodItem}</span>
      </li> */}
      {/* list-group-item */}
      <li className={`${style["kg-item"]} list-group-item`}>
        <span className={style["kg-apan"]}>{foodItem}</span>
        <button
          onClick={(event) => handleBuyClicked(event)}
          className={`${style["kg-button"]} btn btn-info`}
        >
          Buy
        </button>
        {/* <button
          onClick={() => handleBuyClicked()}
          className={`${style["kg-button"]} btn btn-info`}
        >
          Buy
        </button> */}
      </li>
    </>
  );
}

export default Item;
