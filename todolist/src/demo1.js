import React, { useState,useEffect, useRef } from 'react';
function Demo1(Props ) {
    const [count,setcounter]=useState(0);
    const [data,setCounterdaa]=useState('ram');
    const [name,setData]=useState('dsfsdfds');
    const refElement = useRef(null);

const useRref=useRef('');
console.log(useRref);
    useEffect(()=>{
        console.log('component will did mount');
    },[data])
    function stateCount() {
     setcounter(count+1)
        
    }
    function stateCount2(){
        setCounterdaa('karan')
    }
    function stateCount3(){
        setData('')
        refElement.current.focus();
        }
        function stateCount4(){
            refElement.current.style.color = 'red';
            refElement.current.value = 'dfdsfsdf';

        }
  

    return <>
    <h1>{Props.name}</h1>
    <p>use state is cound {count}</p>
<button onClick={stateCount}>sumbitbutton</button>
<p>use state is cound {data}</p>

<button onClick={stateCount2}>namedchanges</button>
<input ref={refElement} type='text' value={name} onChange={(e)=>setData(e.target.value)}         ></input>
<button onClick={stateCount3}>namedchanges</button>
<button onClick={stateCount4}>handleinput</button>

    </>
    
}
export default Demo1;




