import Navbar from "./LandingPagee/Navbar";
import "./LandingPagee/LandingPage.css";
import { useEffect, useRef } from "react";
import sound from "../assets/backgroundsound.mp3";
import GamesCard from "./LandingPagee/GamesCard";
// import Footer from "./LandingPagee/Footer";
function LandingPage() {
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", () => {});
    return () => {
      audio.removeEventListener("ended", () => {});
    };
  }, []);

  
  

  return (
    <>
      <div className="wrapper">
        <audio ref={audioRef} autoPlay loop  >
          <source src={sound} type="audio/mp3" autoPlay loop  />
        </audio>
        <Navbar />
        <div className="middle-part">
          <div className="text-area">
            Terror Tunes
            <br />
            <p> A Platfrom where you can collaborate, learn and Play. </p>
            <p>Keep your Feets safe</p>
          </div>
        </div>

        <div className="gamescards-comp">
          <GamesCard />
        </div>
      </div>
      {/* <div className="flex-container">
            <Footer />
            
        </div> */}
    </>
  );
}

export default LandingPage;
