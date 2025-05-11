import styled from "styled-components";
import Button from "./Button";
import type { Operator } from "../types/types";

interface BtnGridProps {
  setOperator: React.Dispatch<React.SetStateAction<Operator>>;
}

const BtnGrid = ({ setOperator }: BtnGridProps) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "초기화",
    "0",
    "계산",
  ];

  return (
    <>
      <Operator>
        <Button value="+" onClick={() => setOperator("+")} />
        <Button value="-" onClick={() => setOperator("-")} />
        <Button value="*" onClick={() => setOperator("*")} />
        <Button value="/" onClick={() => setOperator("/")} />
      </Operator>
      <Calculator>
        {buttons.map((value, index) => (
          <Button key={index} value={value} />
        ))}
      </Calculator>
    </>
  );
};

const Calculator = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 2px solid black;
  justify-items: center;
  align-items: center;
`;

const Operator = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  border: 2px solid black;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;

export default BtnGrid;
