import React, { useState, useEffect } from 'react';
import './CardConjure.css';
import musicimg from './images/music.png';
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';
import img4 from './images/img-4.png';
import img5 from './images/img-5.png';
import img6 from './images/img-6.png';
import img7 from './images/img-7.png';
import img8 from './images/img-8.png';
import img9 from './images/img-9.png';
import img10 from './images/img-10.png';

function CardConjure() {
  const [cards, setCards] = useState([]);
  const [matched, setMatched] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disableDeck, setDisableDeck] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matched === 10) {
      setTimeout(() => {
        shuffleCards();
      }, 1000);
    }
  }, [matched]);

  const shuffleCards = () => {
    setMatched(0);
    setDisableDeck(false);
    setCardOne(null);
    setCardTwo(null);

    const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    const cardArray = imageArray.concat(imageArray).map((img, index) => ({
      id: `idno${index + 1}`,
      imgSrc: img,
      flipped: false,
    }));

    // Shuffle the cards
    cardArray.sort(() => Math.random() - 0.5);

    setCards(cardArray);
  };

  const flipCard = (clickedCard) => {
    if (cardOne !== clickedCard && !disableDeck) {
      const updatedCards = cards.map((card) => {
        if (card === clickedCard) {
          card.flipped = true;
        }
        return card;
      });

      setCards(updatedCards);

      if (!cardOne) {
        setCardOne(clickedCard);
      } else {
        setCardTwo(clickedCard);
        setDisableDeck(true);
        const cardOneImg = cardOne.imgSrc;
        const cardTwoImg = clickedCard.imgSrc;
        matchCards(cardOneImg, cardTwoImg);
      }
    }
  };

  const matchCards = (img1, img2) => {
    if (img1 === img2) {
      playMatchSound();
      setMatched((prevMatched) => prevMatched + 1);
      setCardOne(null);
      setCardTwo(null);
      setDisableDeck(false);
    } else {
      setTimeout(() => {
        setCardOne((prevCardOne) => ({ ...prevCardOne, flipped: false }));
        setCardTwo((prevCardTwo) => ({ ...prevCardTwo, flipped: false }));
        setCardOne(null);
        setCardTwo(null);
        setDisableDeck(false);
      }, 1200);
    }
  };

  const playMatchSound = () => {
    const sound = new Audio('victory_sound.mp3');

    sound.addEventListener('canplaythrough', () => {
      sound.play();
    });

    sound.addEventListener('error', (error) => {
      console.error('Error loading audio:', error);
    });
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>The Cards Conjure</h1>
      </div>
      <div className="artistContainer">
        <ul className="cards">
          {cards.map((card) => (
            <li
              key={card.id}
              className={`card ${card.flipped ? 'flip' : ''}`}
              id={card.id}
              onClick={() => flipCard(card)}
            >
              <div className="display front01">
                <img src={musicimg} alt="icon" />
              </div>
              <div className="display back01">
                <img src={card.imgSrc} alt="card-img" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardConjure;
