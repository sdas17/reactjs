// use state of object
//use state of array
import React, { useState } from 'react'


function Demo11() {
    const [allValue,setName]=useState({firstName:'subham',lastName:'das'})
function addbutton(){
    setName({...allValue,firstName:"karan"})
}
  return (
    <>
    <h2>my name first name is {allValue.firstName} and lastName {allValue.lastName}</h2>
    <button onClick={addbutton}>submit</button>
    </>
  )
}

export default Demo11