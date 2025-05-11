import styled from 'styled-components';
import Button from './btn';
import Result from './result';

const BtnGrid = (() => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "초기화","0", "계산"];

  return (
    <Container>
      <Result/>
        <Operator>
          <Button value='+' />
          <Button value='-' />
          <Button value='*' />
          <Button value='/' />
        </Operator>
      <Calculator>

        {buttons.map((value,index) => <Button key={index}  value = {value}/>)}
      </Calculator>
    </Container>
  )
})

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  height: 100vh;
`;

const Calculator = styled.div`
padding : 10px;
display : grid;
width : 300px;
height : 400px;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
border: 2px solid black;
justify-items: center;
  align-items: center;
`;

const Operator = styled.div`
padding : 10px;
display : grid;
width : 300px;
gap: 10px;
border: 2px solid black;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
  align-items: center;
` 


export default BtnGrid;