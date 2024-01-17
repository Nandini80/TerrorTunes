import React, { useEffect } from "react";
import "./style.css";
import treeLeftImage from "./img/tree-left.png";
import treeRightImage from "./img/tree-right.png";
import gateLeftImage from "./img/gate-left.png";
import gateRightImage from "./img/gate-right.png";
import grassImage from "./img/grass.png";


function Index() {
  useEffect(() => {
    let ParallaxHeadingText = document.querySelector(".Parallax-heading");
    let TreeLeft = document.querySelector("#tree-left");
    let TreeRight = document.querySelector("#tree-right");
    let GateLeft = document.querySelector("#gate-left");
    let GateRight = document.querySelector("#gate-right");

    const handleScroll = () => {
      let Value = window.scrollY;

      ParallaxHeadingText.style.marginTop = Value * 2.5 + "px";
      TreeLeft.style.left = Value * -1.5 + "px";
      TreeRight.style.left = Value * 1.5 + "px";
      GateLeft.style.left = Value * 0.5 + "px";
      GateRight.style.left = Value * -0.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav>
        <div className="container nav-container">
          <a href="/" className="logo">
            <h3 className="text-danger">Terror Tunes</h3>
          </a>
          <ul className="nav-links">
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Games</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="Parallax">
        <h1 className="Parallax-heading">
          Dive into the abyss of eerie tunes{" "}
        </h1>
        <img src={treeLeftImage} alt="Tree" id="tree-left" />
        <img src={treeRightImage} alt="Tree" id="tree-right" />
        <img src={gateLeftImage} alt="Gate" id="gate-left" />
        <img src={gateRightImage} alt="Gate" id="gate-right" />
        <img src={grassImage} alt="Grass" id="grass" />
      </header>

      <section className="Parallax-demo">
        <div className="container demon-text-container">
          <div className="cards-list">
            {/* Card 1 */}
            <div className="card 1">
              <div className="card_image">
                <img
                  src="https://imgs.search.brave.com/U8dSeT8cZuPWS8f7dz7pw3f2DUIMsKhRTjDiMDW8c7Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVmLzFm/LzI5LzVmMWYyOTcz/MTFiMjkxNzg4YjFi/ZGFhOTkwZDk4NDgz/LmpwZw"
                  alt="Rock Music"
                />
              </div>
              <div className="card_title title-white">
                <p>ROCK MUSIC</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card 2">
              <div className="card_image">
                <img
                  src="https://imgs.search.brave.com/kiIvpnzdeM49et8X29mo-WrRerSTKn2eGBUAkzzkmIk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kYXJrLWhvcnJv/cmhhbGxvd2Vlbi1n/cmF2ZXN0b25lLWJh/Y2tncm91bmRfNDI2/NjUtMTEuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
                  alt="Pop Music"
                />
              </div>
              <div className="card_title title-white">
                <p>POP MUSIC</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card 3">
              <div className="card_image">
                <img
                  src="https://imgs.search.brave.com/ad3quyCUVFll1_Dgh_mlXnRpyhgAXdqvrIn_LStkR50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nyb2xsZHJvbGwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAxL1R1bWJi/YWQtTXVzdC1XYXRj/aC1Cb2xseXdvb2Qt/SG9ycm9yLU1vdmll/cy5qcGc"
                  alt="Bollywood Music"
                />
              </div>
              <div className="card_title">
                <p>BOLLYWOOD MUSIC</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card 4">
              <div className="card_image">
                <img
                  src="https://imgs.search.brave.com/BJ0rOH2S9Z2EmiTHIjRjYKbsCrbsUc54j3sUt8HVUuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDA1NDYx/Ni82MDg4MC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzYwODgwOTk0/MC1zdG9jay1waG90/by1yZW5kZXItYWJz/dHJhY3Qtc3Bvb2t5/LXBvcnRyYWl0LWZy/YWN0dXJlZC5qcGc"
                  alt="Music"
                />
              </div>
              <div className="card_title title-black">
                <p>MUSIC</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card 5">
              <div className="card_image">
                <img src="" alt="Bollywood Music" />
              </div>
              <div className="card_title">
                <p> MUSIC</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card 6">
              <div className="card_image">
                <img
                  src="https://imgs.search.brave.com/Ib6PzjLq0_hMC9mv1flIVIIp61bJ6z9nKad94_ncLGU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvem9tYmllLXBp/Y3R1cmVzLWV4cDYx/aW43czZ0aDBhMWUu/anBn"
                  alt="Music"
                />
              </div>
              <div className="card_title title-black">
                <p>MUSIC</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
