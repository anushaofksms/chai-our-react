import React from "react";

function Item({ foodItem }) {
  // let { foodItem } = props;  this way also we can use else we can pass directly in arg
  return (
    <>
      {/* <li className="list-group-item">{props.foodItem}</li> if we are not using descructuring */}
      <li className="list-group-item">{foodItem}</li>
    </>
  );
}

export default Item;
