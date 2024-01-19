import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { DistinctCategories, fetchBands } from "../services/user";
import Cards from "./Cards";
import bg from "./g4.jpg";

function FindserviceProvider() {
  var c1 = ""; //city
  var c2 = ""; //music style
  const [jsonCat, setCategory] = useState([]);
  const [jsonCity, setCity] = useState([]);
  const [jsonAry, setAry] = useState([]);

  useEffect(() => {
    console.log("Use effect called");
    doFetchCat();
  }, []);

  const doFetchCat = async () => {
    const res = await DistinctCategories();
    setCategory(res.data.user[0]);
    setCity(res.data.user[1]);
  };

  const doSearch = async () => {
    if (c1 === "" || c2 === "") {
      alert("Please select all the feilds");
    } else {
      const resp = await fetchBands({ c1, c2 });
      // alert(JSON.stringify(resp));
      setAry(resp.data);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        color: "white",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <center>
        <h1 className="mt-3">Find Services</h1>
      </center>
      <Form method="post">
        <Row className="offset-md-2">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>City</Form.Label>
            <select
              name="city"
              required
              onChange={(e) => (c1 = e.target.value)}
            >
              <option value="" disabled selected>
                {" "}
                Select{" "}
              </option>
              {jsonCity.map((obj) => (
                <option value={obj}>{obj}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Music Style</Form.Label>
            <select name="" required onChange={(e) => (c2 = e.target.value)}>
              <option value="" disabled selected>
                {" "}
                Select{" "}
              </option>
              {jsonCat.map((obj) => (
                <option value={obj}>{obj}</option>
              ))}
            </select>
          </Form.Group>
        </Row>
        <Button
          md="1"
          as={Col}
          className="offset-md-6 mt-3"
          variant="primary"
          onClick={doSearch}
        >
          Search
        </Button>

        <Row>
          <div style={{ display: "flex", height: "5rem" }}>
            {jsonAry.map((obj) => {
              return (
                <Cards
                  key={obj}
                  Name={obj.name}
                  Email={obj.email}
                  Mobile={obj.mobile}
                  MusicStyle={obj.musicstyle}
                  Experience={obj.exp}
                  Members={obj.members}
                  City={obj.city}
                  address={obj.address}
                ></Cards>
              );
            })}
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default FindserviceProvider;
