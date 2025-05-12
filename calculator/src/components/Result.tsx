import styled from "styled-components";
import type { Operator } from "../types/types";
import React, {useState, useEffect} from "react";

interface ResultProps {
  firstNum: string;
  setFirstNum: React.Dispatch<React.SetStateAction<string>>;
  secondNum: string;
  setSecondNum: React.Dispatch<React.SetStateAction<string>>;
  operator: Operator;
  result: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Result = ({ firstNum, setFirstNum, secondNum, setSecondNum, operator, result, value ,setValue}: ResultProps) => {
  const [selectedBox, setSelectedBox] = useState("firstBox");

  useEffect(() => {
    if (selectedBox === "firstBox") {
      setFirstNum((prevFirstNum) => prevFirstNum + value);
    } else if (selectedBox === "secondBox") {
      setSecondNum((prevSecondNum) => prevSecondNum + value);
    }
  }, [selectedBox, value, setFirstNum, setSecondNum]);    
  

  return (
    <Wrapper>
      <Input value={firstNum} onClick={() => setSelectedBox("firstBox")} readOnly />
      <div>{operator}</div>
      <Input value={secondNum} onClick={() => setSelectedBox("secondBox")} readOnly />
      {"="}
      <Input value={result} readOnly />
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
