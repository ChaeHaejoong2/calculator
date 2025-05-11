import styled from "styled-components";
import type { Operator } from "../types/types";

interface ResultProps {
  firstNum: number;
  secondNum: number;
  operator: Operator;
  result: number;
}

const Result = ({ firstNum, secondNum, operator, result }: ResultProps) => {
  return (
    <Wrapper>
      <Input value={firstNum} />
      <div>{operator}</div>
      <Input value={secondNum} />
      {"="}
      <Input value={result} />
    </Wrapper>
  );
};

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

export default Result;
