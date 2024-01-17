import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import carddata from "./data";
import "./dashboard.css";
import bg from '../../assets/haunted1.jpg';

function Dashboard() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TERROR TUNES</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
            <Nav.Link href="#home">Collaboration</Nav.Link>
            <Nav.Link href="#features">games</Nav.Link>
            <Nav.Link href="#pricing">Insturments</Nav.Link>
          </Nav>
          <Button variant="primary" style={{marginRight:"1rem"}} >Enter Details to collaborate</Button>
          <Button variant="primary">Sign Out</Button>
        </Container>
      </Navbar>

      <div className="howitworks">
        <div className="bodypart">
          <div className="middlepart">
            <img src={bg} alt="" height="100%" width="100%"/>
          </div>

          <div className="dashboardcard">
            {carddata.map((item, index) => (
              <Card style={{ width: "18rem" }} key={index} className="">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button variant="primary">Play Now</Button>
                </Card.Body>
              </Card>

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
