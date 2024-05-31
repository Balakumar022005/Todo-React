import React from "react";
import Todoitems from "./Todolitems";
function Todolist({ todos, check, del }) {
  return (
    <ul className="list">
      {todos.length === 0 && <p>There is no item...</p>}
      {todos.map((todo) => {
        return <Todoitems key={todo.key} {...todo} check={check} del={del} />;
      })}
    </ul>
  );
}
export default Todolist;
