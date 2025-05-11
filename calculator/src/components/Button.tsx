import styled from "styled-components";

interface props {
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ value, onClick }: props) {
  return <StyledButton onClick={onClick}>{value}</StyledButton>;
}

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 12px;
  margin: 5px;
`;
