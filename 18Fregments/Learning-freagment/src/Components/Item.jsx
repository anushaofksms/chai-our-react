import React from "react";
import style from "./Item.module.css";

function Item({ foodItem, bought, handleByButton }) {
  // let { foodItem } = props;  this way also we can use else we can pass directly in arg

  // const handleBuyClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being Bought`);
  // };
  return (
    <>
      {/* <li className="list-group-item">{props.foodItem}</li> if we are not using descructuring */}
      {/* <li className="list-group-item kg-item"> if we are not using class from item.module.css
        <span className="kg-apan">{foodItem}</span>
      </li> */}
      {/* list-group-item */}
      <li
        className={`${style["kg-item"]} list-group-item ${bought && "active"}`}
      >
        <span className={style["kg-apan"]}>{foodItem}</span>
        {/* 3.example on click on button for child to parent coomunication */}
        <button
          onClick={handleByButton}
          className={`${style["kg-button"]} btn btn-info`}
        >
          Buy
        </button>
        {/* 1.there are multiple way we can handle event but 1st and 2nd we will use for parent to child communication what if we need to send data from child to parent we will check this in 3rd example */}
        {/* <button       
          onClick={(event) => handleBuyClicked(event)}
          className={`${style["kg-button"]} btn btn-info`}
        >
          Buy
        </button> */}
        {/* <button
          onClick={() => handleBuyClicked()}   //2. other way to handle event 
          className={`${style["kg-button"]} btn btn-info`}
        >
          Buy
        </button> */}
      </li>
    </>
  );
}

export default Item;
