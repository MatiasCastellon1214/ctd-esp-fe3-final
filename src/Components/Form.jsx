import React, { useState } from "react";


const Form = () => {
  
  const [username, setUsername] = useState({
    name: '',
    email: '',
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const isValidEmail = ()=>{
    return /\S+@\S+\.\S+/.test(username.email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(username.name.length > 5 && isValidEmail()){
      setShow(true);
      setErr(false);
      
    } else {
      setErr(true);
      setShow(false);
    }

    console.log(username)
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
          type="text" 
          placeholder="Name"
          onChange={(e)=>
            setUsername({...username, name: e.target.value})
          }
        />
        <input 
          type="text" 
          placeholder="Email"
          onChange={(e) => setUsername({...username, email: e.target.value})}  
        />
        <button type="submit">Send</button>
        {show && <p style={{color: 'green'}}>Thanks {username.name}, we will contact you as soon as possible via email</p>}
        {err && <p style={{color: 'crimson'}}>Please, verify your information again</p>}
      </form>
    </div>
  );
};

export default Form;
