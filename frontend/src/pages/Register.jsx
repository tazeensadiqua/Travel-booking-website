import React, {useState,useContext} from'react';

import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'


import { AuthContext } from '../context/AuthContext';
import {BASE_URL} from '../utils/config';




const Register = () => {


  const[credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined
});

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prev=>({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick =  async e=> {
    e.preventDefault();
    
  

  try {
    const res = await fetch(`${BASE_URL}/auth/register`,{
      method:'post',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(credentials),
    })
      const result =await res.json();

      if(!res.ok) alert(result.message);

      dispatch({type:'REGISTER_SUCCESS'});
      navigate('/');
    }

    catch(err){
        alert(err.message);
    }
  };

   
  return (  
  <section class="body">
            <form className="login__reg" onSubmit={handleClick}>
              <h1 className="heading">REGISTER</h1>
              
                <input 
                  className="login_input"
                  type="text"
                  placeholder="Username"
                  required id="username"
                  onChange={handleChange} />
            
                <input 
                  className="login_input"
                  type="email"
                  placeholder="Email"
                  required id="email"
                  onChange={handleChange} />
             
                <input 
                  className="login_input"
                  type="password"
                  placeholder="Password" 
                  required id="password" 
                  onChange={handleChange} />
              
              <button 
              className=" auth__btn"
               type="submit">
                Create Account
              </button>
           

            <pre>
              Already have an account? || <Link to='/login'>Login</Link>
              </pre>
            </form>
          
  </section>
  );
};

export default Register;