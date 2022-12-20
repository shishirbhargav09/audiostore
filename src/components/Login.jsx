import React, { useState } from "react";
import AddProduct from "./AddProduct";
import "../styles/login.scss"
function Login() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LoginHandle = (e) => {
    e.preventDefault();
    if((email==='test@gmail.com')&&(password==='test@gmail.com')){
      setLogin(true);
    }
  }
  return (
    <div className="main">
        {
     !login && <div className="form-container">
           <form onSubmit={LoginHandle}>
          <input type="email" value={email} placeholder="Email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
           <input type="password" value={password} placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <button onSubmit={LoginHandle}>Submit</button>
        </form>
      </div>
        }
      {login && <AddProduct />}
      
    </div>
  );
}

export default Login;
