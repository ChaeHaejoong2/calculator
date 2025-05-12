import styled from "styled-components";
import type { Operator } from "../types/types";

interface ResultProps {
  firstNum: number;
  secondNum: number;
  operator: Operator;
  result: number;
  setSelectedBox: any;
}

export default function Result({ firstNum, secondNum, operator, result, setSelectedBox }: ResultProps) {
  return (
    <Wrapper>
      <Input value={firstNum} onClick={() => setSelectedBox("firstBox")} readOnly />
      {operator}
      <Input value={secondNum} onClick={() => setSelectedBox("secondBox")} readOnly />
      {"="}
      <Input value={result} readOnly />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 100%;
  font-size: 30px;
  border: 2px solid black;
`;
const Input = styled.input`
  width: 70px;
  font-size: 20px;
  text-align: center;
`;
