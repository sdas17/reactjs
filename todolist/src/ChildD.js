import React, {  useState } from 'react'



function ChildD() {
    const [count,addnumber]=useState(0);
    const [count2,addnumber2]=useState(0);

function add(){
    addnumber(count +1)
}
function minus(){
    addnumber(count -1)
}
function minus(){
    addnumber2(count2 +2)
}

  
  return (
    <div>
        <h1>use memos are using</h1>
        <h1>count : {count}</h1>
        <button onClick={add}>+</button>

        <br></br>
        <br></br>
        {/* {memoizedValue} */}

        <button onClick={minus}>-</button>
        <br></br>
        <br></br>
        <br></br>

        {count2}
        <button onClick={minus}>submit</button>


        
        
         </div>
  )
}

export default ChildD