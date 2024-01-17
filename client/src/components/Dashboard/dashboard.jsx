import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import carddata from "./data";
import "./dashboard.css";

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
          <Button variant="primary">Enter Details to collaborate</Button>
          <Button variant="primary">Sign Out</Button>{' '}
        </Container>
      </Navbar>
      <div className="howitworks">
      <Carousel slide={false}>
      <Carousel.Item>
        <img src="https://imgs.search.brave.com/0EVuu2d2572nKawM6OCbKKik6sNTLtjCnODwKx2YxjM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/YXJrLWdydW5nZS1z/dHlsZS1zY3JhdGNo/ZWQtbWV0YWwtc3Vy/ZmFjZV8xMDQ4LTEy/OTUxLmpwZz9zaXpl/PTYyNiZleHQ9anBn"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://imgs.search.brave.com/0EVuu2d2572nKawM6OCbKKik6sNTLtjCnODwKx2YxjM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/YXJrLWdydW5nZS1z/dHlsZS1zY3JhdGNo/ZWQtbWV0YWwtc3Vy/ZmFjZV8xMDQ4LTEy/OTUxLmpwZz9zaXpl/PTYyNiZleHQ9anBn'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://imgs.search.brave.com/0EVuu2d2572nKawM6OCbKKik6sNTLtjCnODwKx2YxjM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/YXJrLWdydW5nZS1z/dHlsZS1zY3JhdGNo/ZWQtbWV0YWwtc3Vy/ZmFjZV8xMDQ4LTEy/OTUxLmpwZz9zaXpl/PTYyNiZleHQ9anBn'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      <div className="dashboardcard">
        {carddata.map((item, index) => (
          <Card style={{ width: "18rem" }} key={index} className="">
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button variant="primary" >Play Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
