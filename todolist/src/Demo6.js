import React, { useCallback, useState } from 'react';
import Demo7 from './Demo7';

function Demo6() {
    const [add,addbutton]=useState(0);
    const [number,addbutton2]=useState(0);
   
    const learning= useCallback(()=>{
        
    },[number])
  return (
    <>
    <h1>learning call back</h1>
    <Demo7 learning={learning}/>
    <p>count number :{add}</p>
    <button onClick={()=>addbutton(add+1)}>click</button>
    <p>number :{number}</p>

    <button onClick={()=>addbutton2(number+10)}>click</button>

    </>
  )
}

export default Demo6