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
    address: "",
    exp: "",
    musicstyle: "",
    members: "",
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
    var url = "http://localhost:2000/band/profile";
    var resp = await axios.post(url, obj);
    alert(JSON.stringify(resp.data));
  }

  async function doUpdateInfo() {
    var url = "http://localhost:2000/band/doUpdate";
    var resp = await axios.post(url, obj);
    alert(JSON.stringify(resp.data));
  }

  async function doFetchInfo() {
    var url = "http://localhost:2000/band/doFetch?email=" + obj.email;
    var resp = await axios.post(url);

    doSetObj({
      ...obj,
      name: resp.data.name,
      mobile: resp.data.mobile,
      state: resp.data.state,
      city: resp.data.city,
      address: resp.data.address,
      exp: resp.data.exp,
      members: resp.data.members,
      musicstyle: resp.data.musicstyle,
    });
  }

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, height: "120vh", color: "white" }}
    >
      <center className="mb-4">
        <h1>Service provider Profile Manager</h1>
      </center>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        method="post"
        style={{ overflowX: "hidden" }}
      >
        <Row className="mb-1">
          <Form.Group as={Col} md="4" className="mt-3 me-5 offset-md-3">
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
          <Form.Group as={Col} className="mt-5 ms-5">
            <Button
              type="button"
              as={Col}
              style={{ width: "6rem" }}
              onClick={doFetchInfo}
            >
              Fetch
            </Button>
          </Form.Group>
        </Row>

        <Row className="mb-2 offset-md-2">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Band Name</Form.Label>
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
            <Form.Label>Contact</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="phone number"
              name="mobile"
              onChange={doSetObjValue}
              value={obj.mobile}
              maxLength={10}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-5 offset-md-1">
          <Form.Group
            as={Col}
            md="5"
            className="ms-5"
            controlId="validationCustom03"
          >
            <Form.Label>Adderss</Form.Label>
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

        <Row className="mb-5  offset-md-1">
          <Form.Group as={Col} md="5" className="ms-5">
            <Form.Label>Music Style</Form.Label>
            <Form.Control
              required
              placeholder="Write your Music Style"
              type="text"
              name="musicstyle"
              value={obj.musicstyle}
              onChange={doSetObjValue}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" className="ms-5">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              required
              placeholder="Write your experience"
              type="text"
              name="exp"
              onChange={doSetObjValue}
              value={obj.exp}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="4" className="me-5 offset-md-4">
            <Form.Label>Members</Form.Label>
            <Form.Control
              required
              type="text"
              name="members"
              placeholder="Team members count"
              onChange={doSetObjValue}
              value={obj.members}
            />
          </Form.Group>
        </Row>

        <center className="">
          <Button md="1" as={Col} onClick={doSaveInfo}>
            Upload
          </Button>
          <Button md="1" as={Col} className="ms-5" onClick={doUpdateInfo}>
            Modify
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default Profile;
