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
    default:
      return state;
  }
};

export { intitialState, reducer };
