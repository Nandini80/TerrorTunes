import React from 'react';
import './GamesCard.css';

function GamesCard() {
  return (
    <div>
      <div className="uk-position-relative teamh" id="event"  style={{ overflow: 'hidden', maxWidth: '100vw' }}>
        <div className="uk-position-top-center">
          <div className="uk-tile uk-tile-transparent">
            <span className="sectionHead">EVENTS</span>
          </div>
        </div>
        <br />
        <div className="event-final">
          <div className="containerevent">
            <div className="card">
              <div className="box box1">
                <div className="content12">
                  <h2>01</h2>
                  <h3>Hackstreet</h3>
                  <p>Online Hackathon</p>
                  <a href="https://hackstreet23.vercel.app/" target="_blank" rel="noopener noreferrer">Register</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box2">
                <div className="content12">
                  <h2>02</h2>
                  <h3>Runtime Terror</h3>
                  <p>Coding Contest</p>
                  <a href="https://bit.ly/3jiQt9R" target="_blank" rel="noopener noreferrer">Register</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box3">
                <div className="content12">
                  <h2>03</h2>
                  <h3>Tech Talk</h3>
                  <p>Striver</p>
                  <a href="https://bit.ly/3XQWlq1" target="_blank" rel="noopener noreferrer">Register</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box4">
                <div className="content12">
                  <h2>04</h2>
                  <h3>Trident Arc</h3>
                  <p>Quiz</p>
                  <a href="https://bit.ly/3RhaA50" target="_blank" rel="noopener noreferrer">Register</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box5">
                <div className="content12">
                  <h2>05</h2>
                  <h3>Tech Talk 2.0</h3>
                  <p>Utkarsh Gupta</p>
                  <a href="https://bit.ly/3WHj32l" target="_blank" rel="noopener noreferrer">Register</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box box6">
                <div className="content12">
                  <h2>06</h2>
                  <h3>Treasure Trail</h3>
                  <a href="https://bit.ly/3HT4xk7" target="_blank" rel="noopener noreferrer">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesCard;
