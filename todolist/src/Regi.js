import React, { useState } from 'react';

function Regi() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}`);
  }

  function handleData(e) {
    setName(e.target.value);
    console.log(e.target.value); 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="firstName" value={name} onChange={handleData} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Regi;
