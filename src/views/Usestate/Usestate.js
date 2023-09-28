import React from 'react'
import { useState } from 'react';

const Usestate = () => {
let [decrement,setdecrement]=useState(0);
let  decrece=() =>{
    setdecrement(decrement-1);
}

let count=0;
let increment=()=>{
    count++;
    console.log(count);
}
console.log('hello this is runs only one time');

  return (
    <><h1>using noraml function </h1>
    {count}
    <br></br>
    <h2>react ko  pata nhi chalne vala hai ki hamare count ki value change hui hai is liye vo count ki value ko change nhi kar sakta </h2>

<button onClick={increment}>increment </button>
<h2>using use state </h2>
{decrement}
<button onClick={decrece}> decrement</button>
    </>
    
  )
}

export default Usestate
