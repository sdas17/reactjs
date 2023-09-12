import React, { useEffect, useState } from 'react';
import './Project.css';

function Todo(){
    const [setTodo,setName]=useState('');
    const [listitem,sublist]=useState([]);

    function addbutton(){
        // sublist([...listitem,setTodo])
        // setTodo('')
        // console.log(listitem);
        sublist((listitem)=>{
            const updateList=[...listitem,setTodo]
            console.log(updateList);
            setName('');
            return updateList
        })
    }
    function removeActivity(i){
        const updateList=listitem.filter((element,id)=>{
            return i!=id;
        })
        sublist(updateList)
    }
return(
    <>
      <div className='container' >
        <div className='header'>
            <h2>Todo list</h2>

        </div>
        <input type='text' value={setTodo} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={addbutton}>add</button>
        <p className='List-heading'>Here is Your List : {")"}</p>
        {
            listitem!=[] && listitem.map((data,i)=>{
                return(
                    <>
                    
                    <p key={i}>
                        <div className='listData'>{data}

                        </div>
                            <div className='btn-position'>
                                <button className='green-button' onClick={() => removeActivity(i)}>
                                    Remove
                                </button>
                            </div>
                    </p>
                   
                    </>
                )
            })
        }

    </div>
  </>
)
}
export default Todo;