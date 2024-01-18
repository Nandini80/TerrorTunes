// sound.js
const playMatchSound = () => {
    const sound = new Audio('victory_sound.mp3');
  
    sound.addEventListener('canplaythrough', () => {
      sound.play();
    });
  
    sound.addEventListener('error', (error) => {
      console.error('Error loading audio:', error);
    });
  };
  
  export default playMatchSound;
  