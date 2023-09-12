import React from 'react'
import './App.css';

function Demo10() {
    const iplMatch=['kx11punjab','mi','cxp']
    const li=[{
        id:'1',
        name:'Yoshita'
    },
    {
        id:'2',
        name:'karan'
    },
    {
        id:'3',
        name:'sohil'
    }
]
    // const ed=iplMatch.map((x,index)=><h1 key={index}>{x}: index is {index}</h1>);
    const ed =li.map((item,id) => <h2 key={id}>{item.name}  index of value : {id} : id of value {item.id}</h2>); 
  return (
    <>
        <div className='App'><h1 >{ed}</h1></div>

    </>
  )
}

export default Demo10