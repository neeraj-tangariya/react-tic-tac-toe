import React, { useState } from "react";
import Icons from "./components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// created array with length 9 intialize with an empty
const itemArr = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  // restart the game
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArr.fill("empty", 0, 9);
  };

  // game winning logic
  const checkIsWinner = () => {
    if (
      itemArr[0] === itemArr[1] &&
      itemArr[0] === itemArr[2] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} won`);
    } else if (
      itemArr[3] === itemArr[4] &&
      itemArr[4] === itemArr[5] &&
      itemArr[3] !== "empty"
    ) {
      setWinMessage(`${itemArr[3]} won`);
    } else if (
      itemArr[6] === itemArr[7] &&
      itemArr[7] === itemArr[8] &&
      itemArr[6] !== "empty"
    ) {
      setWinMessage(`${itemArr[6]} won`);
    } else if (
      itemArr[0] === itemArr[3] &&
      itemArr[3] === itemArr[6] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} won`);
    } else if (
      itemArr[1] === itemArr[4] &&
      itemArr[4] === itemArr[7] &&
      itemArr[1] !== "empty"
    ) {
      setWinMessage(`${itemArr[1]} won`);
    } else if (
      itemArr[2] === itemArr[5] &&
      itemArr[5] === itemArr[8] &&
      itemArr[2] !== "empty"
    ) {
      setWinMessage(`${itemArr[2]} won`);
    } else if (
      itemArr[6] === itemArr[4] &&
      itemArr[4] === itemArr[2] &&
      itemArr[6] !== "empty"
    ) {
      setWinMessage(`${itemArr[6]} won`);
    } else if (
      itemArr[0] === itemArr[4] &&
      itemArr[4] === itemArr[8] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} won`);
    }
  };

  // main game logic while playing cross and circle
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArr[itemNumber] === "empty") {
      itemArr[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {/* check if winner found if not then show whose turn is it. Start Box */}
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          {/* End Box */}

          {/* tic-tac-toe game box start */}
          <div className="grid">
            {itemArr.map((item, index) => (
              <Card onClick={() => changeItem(index)} color="warning">
                <CardBody className="box">
                  <Icons name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          {/* tic-tac-toe game box end */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
