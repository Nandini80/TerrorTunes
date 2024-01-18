import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './login.css'
import Navbar from './LandingPagee/Navbar';
function Login() 
{
  const navigate = useNavigate();
  const [obj,dologin] =useState({email:"",pass:""}); 
  const [errobj, doUpdateErr] = useState({ email: "", pass: "" })
 
  const doUpdatetxt = (event)=>
  {
     var {name,value} = event.target;
     dologin({...obj,[name]: value});
  }

  const doCheck = (event) => {
    var { name, value } = event.target;
    if (name === "email" && value == "") {
      doUpdateErr({ ...errobj, ["email"]: "Please Enter your Email " });
      return;
    }

    if (name === "pass" && value == "") {
      doUpdateErr({ ...errobj, ["pass"]: "Please Enter your Password" });
      return;
    }

    if (name === "pass" && value != "") {
      doUpdateErr({ ...errobj, ["pass"]: "Correct" });
    }
 
    if (name === "email" && value != "") {
      doUpdateErr({ ...errobj, ["email"]: "Correct" });
    }
  }

  const doSubmit=async ()=>{
    //For post
     var url = "http://localhost:2000/user/Login"; 
     var resp = await axios.post(url,obj);
    //  alert(JSON.stringify(resp.data));
     if(resp.data.status===false)
     {
      alert(resp.data.message);
     }
     else
     {
      //  alert(resp.data.message);
       localStorage.setItem("token",resp.data.token);//add key value pair in browser memory
       localStorage.setItem("user_email",resp.data.user.email);
       if(resp.data.user.desig==="person")
       {
        navigate("/person");
       }
      else
      {
        navigate("/band");
      }
     }
  };

  return (
    <div className='outer'>
      <div className="nav">
      <Navbar/></div>
      <div className='logincon'>
    {/* <div className="signup-container mt-5 "> */}
      <form method="post" className='myform'>
        <center>
          <h2 className='heading'> Login here</h2>
          <div className="input-container">
            <label className='lab'>Email:</label>
            <input type="email" name="email" onChange={doUpdatetxt} onBlur={doCheck} required />
            <p>{errobj.email}</p>
          </div>
          <div className="input-container">
            <label className='lab'>Password:</label>
            <input type="password" name="pass" onChange={doUpdatetxt} onBlur={doCheck} required />
            <p>{errobj.pass}</p>
            </div>
          <button className='loginbtn' value="button" onClick={doSubmit}>Login</button>
        </center>
      </form>
      </div>
    </div>
    // </div>
  );
}

export default Login;