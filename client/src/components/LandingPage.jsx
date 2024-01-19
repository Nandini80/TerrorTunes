import Navbar from "./LandingPagee/Navbar";
import "./LandingPagee/LandingPage.css";
import { useEffect, useRef } from "react";
import sound from "../assets/backgroundsound.mp3";
import GamesCard from "./LandingPagee/GamesCard";
<<<<<<< HEAD
// import Footer from "./LandingPagee/Footer";
=======

>>>>>>> 449514878778096df350baeb6ae6f88e8ee45624
function LandingPage() {
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
<<<<<<< HEAD
    const handleEnded = () => {
      // Reset the currentTime to 0 to replay the audio
      audio.currentTime = 0;
      audio.play();
    };
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
=======
    audio.addEventListener("ended", () => {

    });
    return () => {
      audio.removeEventListener("ended", () => {

      });
>>>>>>> 449514878778096df350baeb6ae6f88e8ee45624
    };
  }, []);
 

  // useEffect(() => {
  //   const audio = audioRef.current;
  
  //   const handleEnded = () => {
  //     // Reset the currentTime to 0 to replay the audio
  //     audio.currentTime = 0;
  //     audio.play();
  //   };
  
  //   audio.addEventListener("ended", handleEnded);
  
  //   return () => {
  //     audio.removeEventListener("ended", handleEnded);
  //   };
  // }, []);
  
  

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
    </>
  );
}

export default LandingPage;
