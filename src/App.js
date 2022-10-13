import React, { useReducer } from "react";
import { Container } from "reactstrap";
import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo app with context api</h1>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
