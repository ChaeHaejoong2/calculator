import React , {useState} from 'react';
import styled from 'styled-components';

interface props {
  value : string;
}


const Button = ({value}: props) => {
  const btnClick = () => {
    
  }
  return (
    <div>
        <StyledButton onClick={btnClick}>{value}</StyledButton>
    </div>
  )
}

const StyledButton = styled.button`
width: 40px;
height: 40px;
font-size: 12px;
margin: 5px;
`

export default Button;