import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import bg from "./g4.jpg";

function Profile() {
  const [validated, setValidated] = useState(false);
  const [eml, getEml] = useState("");
  const [obj, doSetObj] = useState({
    email: "",
    mobile: "",
    name: "",
    state: "",
    city: "",
    exp: "",
    musicstyle: "",
    address: "",
  });

  //taking email from localstorage
  useEffect(() => {
    var mail = localStorage.getItem("user_email");
    getEml(mail);
  }, []);

  // Bootstrap validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const FillEmail = () => {
    doSetObj({ ...obj, ["email"]: eml });
  };

  // Taking inpout box values
  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  };

  //axios request fire
  async function doSaveInfo() {
    var url = "http://localhost:2000/person/profile";
    var resp = await axios.post(url,obj);
    alert(JSON.stringify(resp.data));
  }

  async function doUpdateInfo() {
    var url = "http://localhost:2000/person/doUpdate";
    var resp = await axios.post(url,obj);
    alert(JSON.stringify(resp.data));
  }

  async function doFetchInfo() {
    var url = "http://localhost:2000/person/doFetch?email=" + obj.email;
    var resp = await axios.post(url);

    doSetObj({
      ...obj,
      name: resp.data.name,
      mobile: resp.data.mobile,
      state: resp.data.state,
      city: resp.data.city,
      address: resp.data.address,
      exp: resp.data.exp,
      musicstyle: resp.data.musicstyle,
    });
  }

  return (
    <div style={{backgroundImage: `url(${bg})`,height:"100vh",color:"white"}}>
      <center>
        <h1>Person Profile</h1>
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post" style={{overflowX:"hidden"}}>
        <Row className="mb-1">
          <Form.Group
            as={Col}
            md="4"
            className="mt-1 me-5"
            style={{ marginLeft: "300px" }}
          >
            <Form.Label>Email id</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="email"
              value={eml}
              onBlur={FillEmail} //For email
              // disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mt-4 ms-5" >
            <Button type="button" as={Col} onClick={doFetchInfo} style={{width:"8rem"}}>
              Fetch
            </Button>
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-2">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }} >
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full name"
              name="name"
              onChange={doSetObjValue}
              value={obj.name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            style={{ margin: "40px" }}
            controlId="validationCustom02"
          >
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="phone number"
              name="mobile"
              onChange={doSetObjValue}
              value={obj.mobile}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
         {/* ======================================================= */}
        <Row className="mb-3 offset-md-1">
          <Form.Group
            as={Col}
            md="5"
            className="ms-5"
            controlId="validationCustom03"
          >
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={doSetObjValue}
              value={obj.address}
              name="address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              onChange={doSetObjValue}
              value={obj.city}
              name="city"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              onChange={doSetObjValue}
              value={obj.state}
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        
        {/* ======================================================== */}
        <Row className="mb-3  offset-md-2">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Music Style</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="All Music Styles"
              name="musicstyle"
              onChange={doSetObjValue}
              value={obj.musicstyle}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            style={{ margin: "40px" }}
            controlId="validationCustom02"
          >
            <Form.Label>Experience</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Experience in years"
              name="exp"
              onChange={doSetObjValue}
              value={obj.exp}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <center>
          <Button md="1" as={Col} onClick={doSaveInfo}>
            Save
          </Button>
          <Button md="1" as={Col} className="ms-5" onClick={doUpdateInfo}>
            Update
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default Profile;
