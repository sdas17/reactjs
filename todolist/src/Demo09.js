import React, { useRef } from 'react'

function Demo09() {
    const refObject=useRef();
    console.log(refObject);
    function handleSubmit(e){
        e.preventDefault();
        console.log((refObject.current.value).toUpperCase());
    }
  return (
    <div><h2>uncontrolled form dom only contoleed</h2>
    
    <form className='App' onSubmit={handleSubmit}>
        <label> first Name:</label> <br/>
        <input type='text' ref={refObject}></input>
        <button>Submit</button>

    </form>
    
    </div>
  )
}

export default Demo09