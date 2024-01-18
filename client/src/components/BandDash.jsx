import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PDashCSS.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PDash() {
  var [aemail, setobj] = useState("");
  var [fullObj, setFullObj] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const ae = localStorage.getItem("user_email");
    setobj(ae);
    if (token) {
      getUser();
    }
    else 
    navigate("/");
  }, []);//it will be called once on page load

  const token = localStorage.getItem("token");
  const getUser = async () => {
    try {
      const res = await axios.get('http://localhost:2000/user/CurrentUser',
        {
          headers: {
            'Authorization': token
          }
        });

      if (res.data.status === true) {
        setFullObj(res.data.user);
      }
      else {
        alert(res.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const doNavigate1=()=>{
    navigate('/BandProfile');
  }

  const doNavigate2=()=>{
    navigate('/collaborationBand');
  }

  const doLogout=()=>{
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  }
  
  return (
    <div>
      <center>
       <h1 className='mt-3'>WELCOME {aemail}</h1> 
        </center>
        <div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="pics/profile.jpg" />
          <Card.Body>
           <Card.Title><center>Band Information</center></Card.Title>
          <center> <Button variant="primary" onClick={doNavigate1}>Click here</Button></center>
          </Card.Body>
        </Card>
        </div>
        <div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="pics/s5.jpg" />
          <Card.Body>
           <Card.Title><center>Collaboration</center></Card.Title>
          <center> <Button variant="primary" onClick={doNavigate2}>Click here</Button></center>
          </Card.Body>
        </Card>
        </div>
        <div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="pics/logout.jpg" height={"265"} /> <hr />
          <Card.Body>
           <Card.Title><center>Logout</center></Card.Title>
          <center> <Button variant="primary" onClick={doLogout}>Click here</Button></center>
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default PDash;