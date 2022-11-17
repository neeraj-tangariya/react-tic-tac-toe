import React from "react";

function customReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }   
    default:
        return state;
  }
}

export default customReducer;
