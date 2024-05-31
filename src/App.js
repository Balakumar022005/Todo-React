import React, { useState } from "react";
import "./style.css";
import Form from "./Form";
import Todolist from "./Todolist";

function App() {
  const [todos, settodos] = useState([]);

  function check(id, complete) {
    let tmptodo = [...todos];
    tmptodo = tmptodo.map((todo) => {
      if (todo.id === id) {
        todo.completed = !complete;
      }
      return todo;
    });
    settodos(tmptodo);
  }
  function del(id) {
    let tmptodo = [...todos];
    tmptodo = tmptodo.filter((todo) => todo.id !== id);
    settodos(tmptodo);
  }
  return (
    <>
      <Form todos={todos} settodos={settodos} />
      <h1 className="header">Todo-List</h1>
      <Todolist todos={todos} check={check} del={del} />
    </>
  );
}

export default App;
