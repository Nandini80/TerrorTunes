import Navbar from "./Landingpage/components/Navbar";
import './LandingPagee/LandingPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bg from '../assets/bg.jpg';
import Row from "react-bootstrap/esm/Row";


function LandingPage() {
  return (
    <>
    <div className="wrapper">
      <Navbar />
        <div className="middle-part">
           <div className="text-area">
              Terror Tunes 
           </div>
          
        </div>

        <div className="cards">
          <Row>
        <Card bg="dark" key="dark" text="light">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quiz Of The Unknown</Card.Title>
        <Card.Text>
        Challenge your knowledge of horror-themed tunes with our Music Quiz. Can you identify the spine-tingling melodies?
        </Card.Text>
        <Button variant="primary">PLAY NOW </Button>
      </Card.Body>
    </Card>

    <Card bg="dark" key="dark" text="light">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>THE CARD CONJURE</Card.Title>
        <Card.Text>
        Unveil horrifying images and match them to test your memory in this chilling card-flipping game
        </Card.Text>
        <Button variant="primary">PLAY NOW</Button>
      </Card.Body>
    </Card>

    <Card bg="dark" key="dark" text="light">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>SPOOKY SCRABBLE</Card.Title>
        <Card.Text>
        Unscramble the letters to reveal spooky words in this eerie rendition of the classic word game.
        </Card.Text>
        <Button variant="primary">PLAY NOW</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" key="dark" text="light" >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnEmm1bQESFL6cXz7J16DgfSs0re6VTVIjA&usqp=CAU/100px180" />
      <Card.Body>
        <Card.Title>SCREAM TUNES </Card.Title>
        <Card.Text>
        Play haunting melodies on the Space Piano. Each key is a gateway to a different dimension of terror.
        </Card.Text>
        <Button variant="primary">PLAY NOW</Button>
      </Card.Body>
    </Card>
    </Row>
        </div>
    </div>
    </>
  )
}

export default LandingPage;