import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PDashCSS.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import collab from '../assets/collaborationband.jpg';
import profilepic from '../assets/profileband.jpg';
import logoutpic from '../assets/logoutband.jpg';

function PDash() {
  var [aemail, setobj] = useState("");
  var [fullObj, setFullObj] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const ae = localStorage.getItem("user_email");
    setobj(ae);
    if (token) {
      getUser();
    } else navigate("/");
  }, []); //it will be called once on page load

  const token = localStorage.getItem("token");
  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:2000/user/CurrentUser", {
        headers: {
          Authorization: token,
        },
      });

      if (res.data.status === true) {
        setFullObj(res.data.user);
      } else {
        alert(res.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const doNavigate1 = () => {
    navigate("/BandProfile");
  };

  const doNavigate2 = () => {
    navigate("/collaborationBand");
  };

  const doLogout = () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div className="main">
        <center>
          <h1 className="mt-3">
            WELCOME <span id="user-email"> {aemail}</span>
          </h1>
        </center>
        <div className="fl">
          <div className="cards">
            <div
              style={{
                width: "18rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={profilepic}
                className="card-img-top"
                alt="Profile"
                height={385}
              />
              <div className="card-body">
                <h3 className="card-title">
                  <center>
                    <button className="profile-button" onClick={doNavigate1}>
                      Band Information
                    </button>
                  </center>
                </h3>
                <center></center>
              </div>
            </div>
          </div>
          <div className="cards">
            <div
              style={{
                width: "18rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={collab}
                className="card-img-top"
                alt="Collaboration"
                height={385}
              />
              <div className="card-body">
                <h3 className="card-title">
                  <center>
                    <button className="profile-button" onClick={doNavigate2}>
                      Collaboration
                    </button>
                  </center>
                </h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <div
              style={{
                width: "18rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={logoutpic}
                className="card-img-top"
                alt="Logout"
                height={385}
              />
              <div className="card-body">
                <h3 className="card-title">
                  <center>
                  <button className="profile-button" onClick={doLogout}>
                  Logout
                  </button>
                  </center>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDash;
