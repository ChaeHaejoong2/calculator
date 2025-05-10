import React from 'react';
import button from './components/button';

export default function App() {
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+"];
  
  
  return (
    <>
    {buttons.map(value => <button value = {value}/>)}
    </>
  );
}
