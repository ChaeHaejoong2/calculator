import styled from "styled-components";
import BtnGrid from "./components/ButtonGrid";
import { useState } from "react";
import "./style.css";
import Result from "./components/Result";
import type { Operator } from "./types/types";

export default function App() {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState();

  return (
    <Wrapper>
      <Result operator={operator} />
      <BtnGrid setOperator={setOperator} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
`;
