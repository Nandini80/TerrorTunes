import Navbar from "./Landingpage/components/Navbar";
import './LandingPagee/LandingPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useRef } from 'react';
import Row from "react-bootstrap/esm/Row";
import sound from '../assets/backgroundsound.mp3';
import GamesCard from './LandingPagee/GamesCard';


function LandingPage() {
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', () => {


    });
    return () => {
      audio.removeEventListener('ended', () => {

      });
    };
  }, []);

  return (
    <>
    <div className="wrapper">
    <audio ref={audioRef} autoPlay loop>
        <source src={sound} type="audio/mp3" />
      </audio>
      <Navbar />
        <div className="middle-part">
           <div className="text-area">
              Terror Tunes 
           </div>
          
        </div>

        <GamesCard />
    </div>
    </>
  )
}

export default LandingPage;