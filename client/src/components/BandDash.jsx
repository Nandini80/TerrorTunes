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
       <div className="main">
        <center>
          <h1 className="mt-3">WELCOME <span id="user-email"></span></h1>
        </center>
        <div className='fl'>
          <div className='cards'>
            <div style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
              <img src="https://www.researchgate.net/profile/Yury-Korolev-4/publication/337781850/figure/fig2/AS:832956675395585@1575603755767/Our-dataset-of-images-with-size-256-256-pixels-Images-are-free-to-use-Images-f-j_Q320.jpg" className="card-img-top" alt="Profile" />
              <div className="card-body">
                <h3 className="card-title"><center>Band Information</center></h3>
                <center>
                  <button className="btn" onClick={doNavigate1}>Click here</button>
                </center>
              </div>
            </div>
          </div>
          <div className='cards'>
            <div style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
              <img src="https://www.researchgate.net/profile/Yury-Korolev-4/publication/337781850/figure/fig2/AS:832956675395585@1575603755767/Our-dataset-of-images-with-size-256-256-pixels-Images-are-free-to-use-Images-f-j_Q320.jpg" className="card-img-top" alt="Collaboration" />
              <div className="card-body">
                <h3 className="card-title"><center>Collaboration</center></h3>
                <center>
                  <button className="btn" onClick={doNavigate2}>Click here</button>
                </center>
              </div>
            </div>
          </div>
          <div className='cards'>
            <div style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
              <img src="https://www.researchgate.net/profile/Yury-Korolev-4/publication/337781850/figure/fig2/AS:832956675395585@1575603755767/Our-dataset-of-images-with-size-256-256-pixels-Images-are-free-to-use-Images-f-j_Q320.jpg" className="card-img-top" alt="Logout" />
              <div className="card-body">
                <h3 className="card-title"><center>Logout</center></h3>
                <center>
                  <button className="btn" onClick={doLogout}>Click here</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDash;