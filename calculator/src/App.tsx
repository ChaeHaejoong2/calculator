import styled from "styled-components";
import BtnGrid from "./components/ButtonGrid";
import { useState } from "react";
import "./style.css";
import Result from "./components/Result";
import type { Operator } from "./types/types";
import OperatorGrid from "./components/OperatorGrid";


export default function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState(0);
  const [value, setValue] = useState(0);



  const handleOperateClick = () => {
    setResult(0);
  };

  return (
    <Wrapper>
      <Result
        firstNum={firstNum}
        setFirstNum={setFirstNum}
        secondNum={secondNum}
        setSecondNum={setSecondNum}
        operator={operator}
        result={result}
        value={value}
        setValue={setValue}
      />
      <OperatorGrid setOperator={setOperator} />
      <BtnGrid setValue={setValue} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
`;
