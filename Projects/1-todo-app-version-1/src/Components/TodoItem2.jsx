import React from "react";

function TodoItem2() {
  let todoName = "Go To Buy Milk";
  let todoDate = "4/10/2023";
  return (
    <div>
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kgButton">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
