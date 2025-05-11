import Button from "./Button";
import styled from "styled-components";
import type { Operator } from "../types/types";

interface OperatorProps {
  setOperator: React.Dispatch<React.SetStateAction<Operator>>;
}

export default function OperatorGrid({ setOperator }: OperatorProps) {
  return (
    <Wrapper>
      <Button value="+" onClick={() => setOperator("+")} />
      <Button value="-" onClick={() => setOperator("-")} />
      <Button value="*" onClick={() => setOperator("*")} />
      <Button value="/" onClick={() => setOperator("/")} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  border: 2px solid black;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;
