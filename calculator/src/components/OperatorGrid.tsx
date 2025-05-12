import Button from "./Button";
import styled from "styled-components";
import type { Operator } from "../types/types";

interface OperatorProps {
  setOperator: React.Dispatch<React.SetStateAction<Operator>>;
}

export default function OperatorGrid({ setOperator }: OperatorProps) {
  const buttons = ["+", "-", "*", "/"];
  return (
    <Wrapper>
      {buttons.map((v, i) => (
        <Button key={i} value={v} onClick={() => setOperator(v as Operator)} />
      ))}
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
