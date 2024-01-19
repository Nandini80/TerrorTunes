import React, { useState } from 'react';
import axios from 'axios';  
import '../Styling/SignupCSS.css';  
import { signupservice } from '../services/user';
import { useNavigate } from 'react-router-dom';
import Navbar from './LandingPagee/Navbar';
import './signup.css'

function Signup() {
  const [obj, dosignup] = useState({ email: "", pass: "", desig: "" });
  const [errobj, doUpdateErr] = useState({ email: "", pass: "", desig: "" })
  const navigate = useNavigate();

  const doUpdatetxt = (event) => {
    var { name, value } = event.target;
    dosignup({ ...obj, [name]: value });
  };

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

    if (name === "desig" && value == "") {
      doUpdateErr({ ...errobj, ["desig"]: "Please Enter your Designation" });
      return;
    }

    if (name === "pass" && value != "") {
      doUpdateErr({ ...errobj, ["pass"]: "Correct" });
    }

    if (name === "email" && value != "") {
      doUpdateErr({ ...errobj, ["email"]: "Correct" });
    }

    if (name === "desig" && value != "") {
      doUpdateErr({ ...errobj, ["desig"]: "Correct" });
    }
  }

  // const doSign = async () => {
  //   var url = "http://localhost:2000/user/Signup";
  //   var resp = await axios.post(url,{
  //     email :obj.email,
  //     pass: obj.pass,
  //     desig:obj.desig
  //   });
  //   alert(JSON.stringify(resp.data));
  // }; 
  
     const doSign=async()=>{
      const res = await signupservice(obj);
      alert(JSON.stringify(res.data));
      navigate("/");
     }

  return (
  <div className="outer">
    <div className="nav">
    <Navbar/></div>
    <div className="signupcon">
    {/* <div className="signup-container mt-4"> */}
      <form method="post" name='myform'>
        <center>
          <h2 className='heading'>Signup here</h2>
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
          <div className="input-container">
            <label className='lab'>Category:</label>
            <select name="desig" onChange={doUpdatetxt} onBlur={doCheck} required >
              <option value="" disabled selected> Select </option>
              <option value="band">Band</option>
              <option value="person">Person</option>
            </select>
            <p>{errobj.desig}</p>
          </div>
          <button className='signbtn' value="Submit" onClick={doSign}>Sign Up</button>
        </center>
      </form>
      </div>
    </div>
    //  </div>
  );
}

export default Signup;