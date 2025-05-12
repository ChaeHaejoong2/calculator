import styled from "styled-components";
import Button from "./Button";

interface ValueProps {
  handleOperateClick: any;
  handleResetClick: any;
  handleNumClick: any;
}

export default function ButtonGrid({ handleOperateClick, handleResetClick, handleNumClick }: ValueProps) {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "초기화", 0, "계산"];

  return (
    <>
      <Calculator>
        {buttons.map((value, index) => {
          if (value === "초기화") return <Button key={index} value={value} onClick={handleResetClick} />;
          if (value === "계산") return <Button key={index} value={value} onClick={handleOperateClick} />;
          return <Button key={index} value={value} onClick={() => handleNumClick(value)} />;
        })}
      </Calculator>
    </>
  );
}

const Calculator = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 2px solid black;
  justify-items: center;
  align-items: center;
`;
