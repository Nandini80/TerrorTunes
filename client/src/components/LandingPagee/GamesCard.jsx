import './GamesCard.css';
import { useNavigate } from 'react-router-dom';

function GamesCard() {
  const navigate = useNavigate();
  function doNavigate(){
    navigate("/quiz");
  }

  return (
    <div>
      <div className="uk-position-relative teamh" id="event"  style={{ overflow: 'hidden', maxWidth: '100vw' }}>
        <div className="uk-position-top-center">
          <div className="uk-tile uk-tile-transparent">
            <span className="sectionHead">GAMES</span>
          </div>
        </div>
        <br />
        <div className="event-final">
          <div className="containerevent">
            <div className="card">
              <div className="box box1">
                <div className="content12">
                  <h2>01</h2>
                  <h3>Doomed Melodies</h3>
                  <p>Tap And Listen</p>
                  <a href="https://yashj29.github.io/DoomedMelodies/" target="_blank" rel="noopener noreferrer">Play</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box2">
                <div className="content12">
                  <h2>02</h2>
                  <h3>Spooky Scrabble</h3>
                  <p>Don't Die Early</p>
                  <a href="https://tanyalakhani.github.io/SpookyScrabble/" target="_blank" rel="noopener noreferrer">Play</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box3">
                <div className="content12">
                  <h2>03</h2>
                  <h3>The Card Conjure</h3>
                  <p>Try To finish Earlier</p>
                  <a href="https://yashj29.github.io/TheCardsConjure/" target="_blank" rel="noopener noreferrer">Play</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box4">
                <div className="content12">
                  <h2>04</h2>
                  <h3>Scream Tunes</h3>
                  <p>Press Carefully</p>
                  <a href="https://lava1008.github.io/Scream-Tunes/" target="_blank" rel="noopener noreferrer">Play</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box5">
                <div className="content12">
                  <h2>05</h2>
                  <h3>Quiz Of The UnKnown</h3>
                  <p>Let's Check Your knowledge about music</p>
                  <a  target="_blank" onClick={doNavigate} rel="noopener noreferrer">Play</a>
                </div>
              </div>
            </div>

            {/* <div className="card">
              <div className="box box6">
                <div className="content12">
                  <h2>06</h2>
                  <h3>Treasure Trail</h3>
                  <a href="https://bit.ly/3HT4xk7" target="_blank" rel="noopener noreferrer">Play</a>
                </div>
              </div>
            </div> */}

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesCard;
