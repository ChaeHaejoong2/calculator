import React , {useState} from 'react';

export default function button(props: any) {
  const value = props.value;



  const btnClick = () => {
    
  }
  return (
    <div>
        <button onClick={btnClick}>{value}</button>
    </div>
  )
}
