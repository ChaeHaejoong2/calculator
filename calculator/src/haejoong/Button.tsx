import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <Btn>{children}</Btn>;
};

const Btn = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  place-items: center;
`;

export default Button;
