import React, { useEffect } from 'react';
import './test.css';

function Index1() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      playSound(event.key.toUpperCase());
    };

    const handleKeyUp = () => {
      removePressedClass();
    };

    const handleMouseDown = (event) => {
      if (event.target.classList.contains("music")) {
        playSound(event.target.dataset.sound);
        addPressedClass(event.target);
      }
    };

    const handleMouseUp = () => {
      removePressedClass();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const playSound = (sound) => {
    var audio = new Audio(sound);
    audio.play();
  };

  const addPressedClass = (element) => {
    element.classList.add("pressed");
  };

  const removePressedClass = () => {
    var musical = document.querySelectorAll(".music");
    musical.forEach(function (music) {
      music.classList.remove("pressed");
    });
  };

  return (
    <div className='wrapper'>
      <h1 id="title">Instruments</h1>
      <div className="set">
        <button className="music" id="guitar" data-sound="guitar.mp3"></button>
        <button className="music" id="drum" data-sound="drum.mp3"></button>
        <button className="music" id="flute" data-sound="flute.mp3"></button>
        <button className="music" id="harmonium" data-sound="harmonium.mp3"></button>
        <button className="music" id="piano" data-sound="piano.mp3"></button>
        <button className="music" id="bell" data-sound="bell.mp3"></button>
        <button className="music" id="tabla" data-sound="tabla.mp3"></button>
        <button className="music" id="violen" data-sound="violin.mp3"></button>
        <button className="music" id="mandolin" data-sound="mandolin.mp3"></button>
        <button className="music" id="harp" data-sound="harp.mp3"></button>
      </div>
    </div>
  );
}

export default Index1;
