import React, { useState } from 'react'

function Demo14(props) {
    const [name,setName]=useState('')
    function onaddbutton(e){
e.preventDefault();
props.getData(name);
    }
  return (
    <div>  
          <form onSubmit={onaddbutton}>
              <input type='text' name='firstName' defaultValue={name} onChange={(e) => setName(e.target.value)} ></input>
              <button>click</button>

          </form>
</div>
  )
}

export default Demo14