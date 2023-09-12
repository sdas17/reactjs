// use state in array formar
import React, { useState } from 'react'

function Demo12() {
    const [setName,setvalue]=useState([])
    function addItem(){
        setvalue([...setName,{firstName:"subham",lastName:'das',id:2}])
    }

  return (
    <div>Demo12
        <ol>
        {setName.map((item, index) => (
          <li key={index}>{item.firstName} {item.lastName}</li>
          
        ))}
        </ol>
      <button onClick={addItem}>Add Item</button>

    </div>
  )
}

export default Demo12