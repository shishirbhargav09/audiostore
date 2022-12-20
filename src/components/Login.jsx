import React, { useState } from "react";
import AddProduct from "./AddProduct";
import DeletePrduct from "./DeletProduct";
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
    <div>
      <div className="form-container">
        {
          !login && <form onSubmit={LoginHandle}>
          <input type="email" value={email} placeholder="Email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
           <input type="password" value={password} placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <button onSubmit={LoginHandle}>Submit</button>
        </form>
        }
      </div>
      {login && <AddProduct />}
      {login && <DeletePrduct />}
    </div>
  );
}

export default Login;
