import React, { useEffect, useState } from 'react'
import './Project.css';

function Project() {
    const data ={name:'',email:'',password:''};
    const [setvalue,setData]=useState(data)
    const [flag,setflag]=useState(false);

    useEffect(()=>{
        console.log('Registraed');
        
    },[flag])
    function addvalue(e){
        setData({...setvalue,[e.target.name]:e.target.value})
        console.log(setvalue);

    }
    function addsubmit(e){
        e.preventDefault();
        if (!setvalue.name || !setvalue.email || !setvalue.password) {
            alert('field are required')
            
        }else{
            setflag(true)
        }

    }
  return (
    <>
    <div>{flag ? <h2>Registration success</h2> : null}</div>

    <form className='container' onSubmit={addsubmit}>
        <div className='header'>
            <h2>Registration form</h2>

        </div>
        <div>
            <input type='text' placeholder='Enter your name' name='name' value={setvalue.name} onChange={addvalue}></input>

        </div>
        <div>
            <input type='text' placeholder='Enter your email' name='email' value={setvalue.email} onChange={addvalue}></input>

        </div>
        <div>
            <input type='text' placeholder='Enter your password' name='password' value={setvalue.password} onChange={addvalue}></input>

        </div>
            <button type='Submit'>Submit</button>
    </form>
    </>
  )
}

export default Project