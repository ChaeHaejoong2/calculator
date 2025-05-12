import styled from "styled-components";
import BtnGrid from "./components/ButtonGrid";
import { useState } from "react";
import "./style.css";
import Result from "./components/Result";
import type { Operator } from "./types/types";
import OperatorGrid from "./components/OperatorGrid";

export default function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState(0);
  const [selectedBox, setSelectedBox] = useState("firstBox");

  const handleNumClick = (num: number) => {
    if (selectedBox === "firstBox") {
      setFirstNum((prev) => Number(String(prev) + String(num)));
    }
    if (selectedBox === "secondBox") {
      setSecondNum((prev) => Number(String(prev) + String(num)));
    }
  };
  const handleOperateClick = () => {
    setResult(() => {
      switch (operator) {
        case "+":
          return firstNum + secondNum;
        case "-":
          return firstNum - secondNum;
        case "*":
          return firstNum * secondNum;
        case "/":
          return firstNum / secondNum;
      }
    });
  };
  const handleResetClick = () => {
    setFirstNum(0);
    setSecondNum(0);
    setResult(0);
    setSelectedBox("firstBox");
  };

  return (
    <Wrapper>
      <Result
        firstNum={firstNum}
        secondNum={secondNum}
        operator={operator}
        result={result}
        setSelectedBox={setSelectedBox}
      />
      <OperatorGrid setOperator={setOperator} />
      <BtnGrid
        handleNumClick={handleNumClick}
        handleOperateClick={handleOperateClick}
        handleResetClick={handleResetClick}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
`;
