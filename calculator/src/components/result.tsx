import styled from "styled-components";

const Result = (() => {
  return (
    <div>
      <Input type="text" readOnly />
    </div>
  )
})

const Input = styled.input`
padding : 10px;
border: 2px solid black;
width: 300px;
`

export default Result;