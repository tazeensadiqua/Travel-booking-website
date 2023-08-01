import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";


import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const {  dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      
      navigate("/admin");
    
      
      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };


  return (
    <section class ="body">
      <form className="login__form" onSubmit={handleClick}>
              <h1 className="heading">LOGIN</h1>
              <input
                      className="login_input"
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  
                    <input
                      className="login_input"
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                   <button
                    className=" auth__btn"
                    type="submit"
                  >
                    Login
                  </button>
                
                <pre>
                  Don't have an account? ||  <Link to="/register">SIGNUP</Link>
                </pre>
                </form>
              
     
  </section>
  );
};

export default AdminLogin;