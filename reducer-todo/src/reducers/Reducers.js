import React from "react";

const intitialState = {
  todos: [
    {
      todo: "learn about dogs",
      completed: false,
      id: 12,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            return item.id === action.payload
              ? { ...item, completed: !item.completed }
              : item;
          }),
        ],
      };
    case "CLEAR_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.completed === false)],
      };
    default:
      return state;
  }
};

export { intitialState, reducer };
