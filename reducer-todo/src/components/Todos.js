import React, { useState, useReducer } from "react";

import { intitialState, reducer } from "../reducers/Reducers";

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, intitialState);
  const [newTodo, setNewTodo] = useState();
  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <div className="wholeApp">
      <h1>Todo List:</h1>
      <div className="form">
        <input
          className="todo-input"
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
        >
          Add New Todo
        </button>
        {console.log(state.todos)}
        <button>Clear Todos</button>
        <div>
          {state.todos.map((indTodo) => {
            return <h3>{indTodo.todo}</h3>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
