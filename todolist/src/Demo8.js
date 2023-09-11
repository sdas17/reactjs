import React, { useState } from 'react';

function Demo8() {
  const [name, setName] = useState('');
  const [poe, setPswd] = useState('');

  function handleChange(e) {
    if (e.target.name === 'firstName') { // Check the 'name' attribute
      const name = (e.target.value).toUpperCase();
      console.log(name);
      setName(name);
    } else {
      setPswd(e.target.value);
    }
  }

  return (
    <div>
      <h1>Form</h1>
      <form className='app'>
        <label htmlFor="fname">First name:</label><br />
        <input type="text" name='firstName' defaultValue={name} onChange={handleChange} /><br />
        <p>Input Value: {name}</p>

        <label htmlFor="lname">Last name:</label><br />
        <input type="text" name='password' defaultValue={poe} onChange={handleChange} /><br /><br />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Demo8;
