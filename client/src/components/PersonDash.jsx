import axios from "axios";
import "./PDashCSS.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilepic from "../assets/profileper.jpg";
import signoutpic from "../assets/signoutper.jpg";
import collaboration from "../assets/collaborationper.jpg";

function CDash() {
  var [eml, getEml] = useState("");
  var [obj, setobj] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getEml(localStorage.getItem("user_email"));
    if (token) {
      getUser();
    } else navigate("/");
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:2000/user/CurrentUser", {
      headers: {
        Authorization: token,
      },
    });
    if (res.data.status === false) {
      alert(res.data.message);
    } else {
      setobj(res.data.user);
    }
  };

  const doLogout = () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  };

  const doNavigate = (btnId) => {
    if (btnId == 1) navigate("/PersonProfile");
    else if (btnId == 3) navigate("/collaborationPerson");
  };

  return (
    <div>
      <div className="main">
        <center>
          <h1 className="mt-3">
            WELCOME {eml}
            <span id="user-email"></span>
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
                height={355}
                className="card-img-top"
                alt="Profile"
              />
              <div className="card-body">
                <h3 className="card-title">
                  <center>
                    <button
                      className="profile-button"
                      onClick={() => doNavigate(1)}
                    >
                      Person Profile
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
                src={collaboration}
                className="card-img-top"
                alt="Collaboration"
              />
              <div className="card-body">
                <h3 className="card-title">
                  <center>
                    <button
                      className="profile-button"
                      onClick={() => doNavigate(3)}
                    >
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
                src={signoutpic}
                height={355}
                className="card-img-top"
                alt="Logout"
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

export default CDash;
