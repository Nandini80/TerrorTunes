import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PDashCSS.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CDash() {
  var [eml, getEml] = useState("");
  var [obj, setobj] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getEml(localStorage.getItem("user_email"));
    if (token) {
      getUser();
    }
    else 
      navigate("/");
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:2000/user/CurrentUser",
      {
        headers: {
          'Authorization': token
        }
      });
    if (res.data.status === false) {
      alert(res.data.message);
    }
    else {
      setobj(res.data.user);
    }
  }

  const doLogout = ()=>{
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  }

  const doNavigate = (btnId) => {
    if (btnId == 1)
      navigate('/PersonProfile');
    else if (btnId == 3)
      navigate('/collaborationPerson');
  };

  return (
    <div>
      <div>
      <div style={{ backgroundImage: `url('https://wallpaperdj.com/wallpapers/vinyl_life-1152x864.jpg')` }}>
        <center>
          <h1 className="mt-3">
            WELCOME {eml} <span id="user-email" />
          </h1>
        </center>
        <div className="fl">
        <div className="cards">
        <div
          style={{ width: "18rem", display: "flex", flexDirection: "column" }}
        >
          <img
            src="https://www.researchgate.net/profile/Yury-Korolev-4/publication/337781850/figure/fig2/AS:832956675395585@1575603755767/Our-dataset-of-images-with-size-256-256-pixels-Images-are-free-to-use-Images-f-j_Q320.jpg"
            className="card-img-top"
            alt="Profile"
          />
          <div className="card-body">
            <h3 className="card-title">
              <center>Profile Page</center>
            </h3>
            <center>
              <button className="btn btn-primary" onclick={() => doNavigate(1)}>
                Click here
              </button>
            </center>
          </div>
        </div>
      </div>
      <div className="cards">
        <div
          style={{ width: "18rem", display: "flex", flexDirection: "column" }}
        >
          <img
            src="https://www.researchgate.net/profile/Yury-Korolev-4/publication/337781850/figure/fig2/AS:832956675395585@1575603755767/Our-dataset-of-images-with-size-256-256-pixels-Images-are-free-to-use-Images-f-j_Q320.jpg"
            className="card-img-top"
            alt="Collaboration"
          />
          <div className="card-body">
            <h3 className="card-title">
              <center>Collaboration</center>
            </h3>
            <center>
              <button className="btn btn-primary" onclick={() => doNavigate(3)}>
                Click here
              </button>
            </center>
          </div>
        </div>
      </div>
          <div className="cards">
            <div
              style={{ width: "18rem", display: "flex", flexDirection: "column" }}
            >
              <img
                src="https://www.researchgate.net/profile/Yury-Korolev-4/publication/337781850/figure/fig2/AS:832956675395585@1575603755767/Our-dataset-of-images-with-size-256-256-pixels-Images-are-free-to-use-Images-f-j_Q320.jpg"
                className="card-img-top"
                alt="Logout"
              />
              <div className="card-body">
                <h3 className="card-title">
                  <center>Logout</center>
                </h3>
                <center>
                  {/* Corrected attribute name to onClick */}
                  <button className="btn btn-primary" onClick={doLogout}>
                    Click here
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CDash;