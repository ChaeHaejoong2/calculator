import type React from "react";
import styled from "styled-components";
import Button from "./Button";

const ButtonGrid: React.FC = () => {
  return (
    <Wrapper>
      {Array.from({ length: 9 }).map((_, i) => (
        <Button key={i}>{i + 1}</Button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 500px;
  height: 500px;
`;

export default ButtonGrid;
