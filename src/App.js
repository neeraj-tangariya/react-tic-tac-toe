import React, { useReducer } from "react";
import { Col, Container, Row } from "reactstrap";
import { TodoContext } from "./context/TodoContext";
import CustomReducer from "./context/reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, dispatch] = useReducer(CustomReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo app with context api</h1>
        <Row>
          <Col className="col-md-3">
            <Todos />
          </Col>
          <Col className="col-md-9 mt-4">
            <TodoForm />
          </Col>
        </Row>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
