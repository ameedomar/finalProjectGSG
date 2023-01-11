import React, { useState } from "react";
import "../Styles/calculator.scss";
import Button from "react-bootstrap/Button";

function Calculator() {
  const [choosenAmount, setChoosenAmount] = useState("");
  const [choosenAmountfromCalc, setChoosenAmountfromCalc] = useState(0);
  function bt1Clicked() {
    setChoosenAmount(choosenAmount + "1");
  }
  function btn2Clicked() {
    setChoosenAmount(choosenAmount + "2");
  }
  function btn3Clicked() {
    setChoosenAmount(choosenAmount + "3");
  }
  function btn4Clicked() {
    setChoosenAmount(choosenAmount + "4");
  }
  function btn5Clicked() {
    setChoosenAmount(choosenAmount + "5");
  }
  function btn6Clicked() {
    setChoosenAmount(choosenAmount + "6");
  }
  function btn7Clicked() {
    setChoosenAmount(choosenAmount + "7");
  }
  function btn8Clicked() {
    setChoosenAmount(choosenAmount + "8");
  }
  function btn9Clicked() {
    setChoosenAmount(choosenAmount + "9");
  }
  function btn0Clicked() {
    setChoosenAmount(choosenAmount + "0");
  }
  function addAmountFromCalc() {
    setChoosenAmountfromCalc(choosenAmountfromCalc + parseInt(choosenAmount));
    setChoosenAmount("");
  }
  return (
    <div className="calculator">
      <div className="date-time">
        <h1>{choosenAmountfromCalc}</h1>
      </div>

      <div className="add-note"></div>
      <div className="calc-btns">
        <div class="container text-center">
          <div class="row row-cols-1">
            <div className="display-amount">
              <div className="amount ">{choosenAmount}</div>
              {/* <label className="label"> d</label> */}
            </div>

            <div class="col mt-3">
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={bt1Clicked}
              >
                1
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn2Clicked}
              >
                2
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn3Clicked}
              >
                3
              </Button>
            </div>
            <div class="col">
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn4Clicked}
              >
                4
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn5Clicked}
              >
                5
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn6Clicked}
              >
                6
              </Button>
            </div>
            <div class="col">
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn7Clicked}
              >
                7
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn8Clicked}
              >
                8
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn9Clicked}
              >
                9
              </Button>
            </div>
            <div class="col">
              <Button variant="outline-success" className="p-3 px-4 m-2 ">
                .
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-4 m-2 "
                onClick={btn0Clicked}
              >
                0
              </Button>
              <Button
                variant="outline-success"
                className="p-3 px-2.5 m-2 "
                onClick={addAmountFromCalc}
              >
                Done
              </Button>{" "}
              <div class="col">
                <Button variant="outline-success" className="p-3 px-3 m-2 ">
                  CHOOSE THE CATEGORY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose category"></div>
    </div>
  );
}

export default Calculator;
