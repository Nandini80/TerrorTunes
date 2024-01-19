
import React, { useState, useEffect } from "react";
import "./quiz.css";
import questions from "./ques.jsx";
// import pic from './g4.jpg';


function Quiz() {
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.2).slice(0, 5);

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (currentQuestion === 5) {
      setShowResults(true);
    }
  }, [currentQuestion]);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);

     
    }
  

    if (currentQuestion + 1 < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    const audioElement = document.getElementById("endGameAudio");
    audioElement.play();
  };

  return (
    <>
    {/* <img src={pic} alt="not aval" width="100%"/> */}
    <div className="outer">
      {/* <video src={videobg} className="video-background" autoPlay loop muted playsInline /> */}

      <h1 className="heading">QUIZ OF THE UNKNOWN</h1>
      <h2 className="scoreboard">Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of 5 correct - ({(score / 5) * 100}%)
          </h2>
          <button className="btn"onClick={restartGame}>Restart game</button>
          {/* added  */}
         
        </div>
      ) : (
        <div className="question-card">
          <h2 className="quescnt">Question: {currentQuestion + 1} out of 5</h2>
          <h3 className="question-text">{shuffledQuestions[currentQuestion].text}</h3>
          <ul className="unlist">
            {shuffledQuestions[currentQuestion].options.map((option) => (
              <li  className="litem" key={option.id} onClick={() => optionClicked(option.isCorrect) }>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}

export default Quiz;





