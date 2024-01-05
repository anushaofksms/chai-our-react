import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-item-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const toDoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddbuttonClied = (event) => {
    const todoName = toDoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // we are using event.preventDefault bcz we are using form
    event.preventDefault();
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddbuttonClied}>
        <div className="col-6">
          <input
            ref={toDoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kgButton">
            {/* Add 
            added icon insted od Add text on button */}
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;

// import { useState } from "react";    this is without useref
// import { BiMessageAdd } from "react-icons/bi";

// function AddTodo({ onNewItem }) {
//   const [todoName, setTodoName] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleAddbuttonClied = () => {
//     onNewItem(todoName, dueDate);
//     setDueDate("");
//     setTodoName("");
//   };
//   return (
//     <div className="container text-center">
//       <div className="row kg-row">
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             value={todoName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" onChange={handleDateChange} value={dueDate} />
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success kgButton"
//             onClick={handleAddbuttonClied}
//           >
//             {/* Add
//             added icon insted od Add text on button */}
//             <BiMessageAdd />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AddTodo;
