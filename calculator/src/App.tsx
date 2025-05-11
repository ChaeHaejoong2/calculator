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

  const handleOperateClick = () => {
    setResult();
  };

  return (
    <Wrapper>
      <Result
        firstNum={firstNum}
        secondNum={secondNum}
        operator={operator}
        result={result}
      />
      <OperatorGrid setOperator={setOperator} />
      <BtnGrid />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
`;
