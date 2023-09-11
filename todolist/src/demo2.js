import React ,{useState,useEffect,useRef}from 'react'

function Demo2(props) {
    // console.log(props.jsonData.name);
    const [count,dataCount]=useState(0);
    function demo2(){
        dataCount(count+1)
        if (count%2==0) {
            useRref.current.style.color = 'red';

        }else{
            useRref.current.style.color = 'green';

        }

    }
    useEffect(()=>{
        console.log('component will did mount');
    },[count])
    const useRref=useRef('');

  return (
    <>
    {/* <div className='demo'>
    <h1>my name is {props.jsonData.name}</h1>
    <h1>my name is {props.jsonData.lastName}</h1>
    <div>{props.name}</div>

    </div> */}
    <p>enter a number is :{count}</p>
    <h1 ref={useRref}>my name is karan</h1>
    <button onClick={demo2}>click</button>

    </>
  )
}

export default Demo2
