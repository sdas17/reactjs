import React, { useState } from 'react'

// LIST OF STATTE OF DATA CHILD TO PARENT
function Childtoparent(props) {
    console.log(props);
    const [name,setName]=useState('');
    function onaddbutton(e){
        let ki=e.preventDefault();
        console.log(ki);
        props.getDATA(name);

    }
  return (
    <>
    <form onSubmit={onaddbutton}>
        <input type='text' name='firstName' defaultValue={name} onChange={(e)=>setName(e.target.value)} ></input>
        <button>click</button>

    </form>
    
    </>
  )
}

export default Childtoparent