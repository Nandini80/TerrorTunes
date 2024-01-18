import React from 'react'
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
  return (
    <div  className='main'>
        <div className="heading">
        <h1> The Cards Conjure </h1>
    </div>
    <div className="artistContainer">
        <ul className="cards">
            <li className="card" id="idno001">
                <div className="display front01"> 
                    <img src={musicimg} alt="icon" />
                </div>
                <div className="display back01">
                    <img src={img1} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno002">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img2} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno003">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img8} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno004">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img4} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno005">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img5} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno006">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img6} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno007">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img9} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno008">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src="images/img-1.png" alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno009">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img1} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno010">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img10} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno011">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img7} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno012">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img5} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno013">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img4} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno014">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img3} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno015">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img2} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno016">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img8} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno017">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img10} alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno018">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src={img9} alt="card-img"/>
                </div>
            </li> 
            <li className="card" id="idno019">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src="images/img-7.png  " alt="card-img"/>
                </div>
            </li>
            <li className="card" id="idno020">
                <div className="display front01">
                    <img src={musicimg} alt="icon"/>
                </div>
                <div className="display back01">
                    <img src="images/img-3.png" alt="card-img"/>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default CardConjure