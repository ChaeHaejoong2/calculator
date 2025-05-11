import styled from "styled-components";
import type { Operator } from "../types/types";

interface ResultProps {
  operator: Operator;
}

const Result = ({ operator }: ResultProps) => {
  return (
    <Wrapper>
      <Input type="text" />
      <div>{operator}</div>
      <Input type="text" />
      {"="}
      <Input type="text" />
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
`;

export default Result;
