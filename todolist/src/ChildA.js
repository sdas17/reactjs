import React from 'react'
import ChildB from './ChildB';

function ChildA(props) {
    // const { jsonData, lastName } = props;

    return (
    <>
    {/* <ChildB jsonData={jsonData} name={lastName} /> */}
    <ChildB/>
    </>
  )
}

export default ChildA