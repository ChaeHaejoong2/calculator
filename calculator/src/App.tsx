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
      setFirstNum((prevFirstNum) => Number(String(prevFirstNum) + String(num)));
    } else if (selectedBox === "secondBox") {
      setSecondNum((prevSecondNum) => Number(String(prevSecondNum) + String(num)));
    }
  }
    
  const handleResetClick = () => {
    setResult(0);
    setFirstNum(0);
    setSecondNum(0);
    setOperator("+");
    setSelectedBox("firstBox");
  };

  const handleOperateClick = () => {
    setResult(() => {
      switch(operator) {
        case("+") :
          return firstNum + secondNum;
        case("-") :
          return firstNum - secondNum;
        case("*") :
          return firstNum * secondNum;
        case("/") :
          return firstNum / secondNum;
      }
    })
  }

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
       handleResetClick={handleResetClick}
       handleOperateClick={handleOperateClick}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
`;
