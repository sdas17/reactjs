import React, { useMemo, useState } from 'react'

function Demo5() {
    const [plus,addvalue]=useState(0)
    const [minus,negative]=useState(0)
    function addbutton() {
        addvalue(plus +1)
        
    }
    function multiplication(){
        console.log('welcome');

return plus*10;
    }
    function minusbutton() {
        negative(minus -1)
        
    }
    const addValue = useMemo(function multiplication() {
        console.log('welcome');

        return plus * 10;
    }, [plus])


  return (
    <>
    {addValue} 
    <h1>{plus}</h1>
    <button onClick={addbutton}>add value</button>
    <p>value of button {minus}</p>

    <button onClick={minusbutton}>negative value</button>

    
    </>
  )
}

export default Demo5