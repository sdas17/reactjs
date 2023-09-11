import React from 'react'
import { data4,data } from './App';
function Childc(props) {
    const { jsonData, lastName } = props;



  return (
    <>
<data4.Consumer>
    {
        (jsonData)=>{
            console.log(jsonData);
            return(
                <>
                <data.Consumer>
                    {
                        (demo5)=>{
                            console.log(demo5);
                            return(
                                
                                <>
                                </>
                            )

                        }
                    }

                </data.Consumer>
                </>
            )
        }
    }
</data4.Consumer>
    </>
  )
}

export default Childc