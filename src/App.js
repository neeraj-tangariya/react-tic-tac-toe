import "./App.css";
import Icons from "./components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const itemArr = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {};

  const checkIsWinner = () => {};

  const changeItem = (itemNumber) => {};

  return (
    <div className="App">
      <header className="App-header">
        <Icons />
      </header>
    </div>
  );
}

export default App;
