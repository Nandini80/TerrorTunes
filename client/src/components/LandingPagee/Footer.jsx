import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="uk-position-relative footer-distributed" id="contact"
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}>

        <div className="footer-left">
          <p className="footer-company-name">
            <img src="static/img/ieee-white.png" style={{ width: '70%', marginTop: '-10px' }} alt="IEEE Logo" />
          </p>
          <br /><br />
        </div>

        <div className="footer-center">
          <div className="nme">
            <div style={{ float: 'left' }}>
              <i className="fa fa-map-marker" aria-hidden="true" id="ig"></i>
            </div>
            <p style={{ display: 'flex', textAlign: 'left' }}>
              Xenith 2023 <br />
              Jaypee Institute Of Information Technology<br />
              Sector-62, Noida <br />
              India
            </p>
          </div>
        </div>

        <div className="footer-center1">
          <div className="nme">
            <div style={{ float: 'left' }}>
              <i className="fa fa-phone" aria-hidden="true" id="ph"></i>
            </div>
            <p style={{ display: 'flex' }}>Yuvraj Chaudhary : +91 8279723230</p>
          </div>

          <div className="nme">
            <div style={{ float: 'left' }}>
              <i className="fa fa-phone" aria-hidden="true" id="ph"></i>
            </div>
            <p style={{ display: 'flex' }}>Parth Punia : +91 8960970816</p>
          </div>
          <div className="nme">
            <div style={{ float: 'left' }}>
              <i className="fa fa-at" aria-hidden="true" id="ph"></i>
            </div>
            <p style={{ display: 'flex' }}>Email - ieeesbjiitweb@gmail.com</p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span className="uk-text-center uk-text-large">Find us here</span>
          </p>
          <hr style={{ margin: '-15px 0 5px 0', color: 'lightslategray' }} />

          <div className="footer-icons">
            <div className="container">
              <div className="btn fb-btn" onClick={() => window.open("https://www.facebook.com/ieeesbjiit/", "noopener noreferrer")}>
                <i className="fa fa-facebook" aria-hidden="true" id="fb"></i>
              </div>
              <div className="btn ig-btn" onClick={() => window.open('https://www.instagram.com/ieeesbjiit/', 'noopener noreferrer')}>
                <i className="fa fa-instagram" aria-hidden="true" id="ig"></i>
              </div>
              <div className="btn ln-btn" onClick={() => window.open('https://www.linkedin.com/company/ieee-student-branch-jiit/', 'noopener noreferrer')}>
                <i className="fa fa-linkedin" aria-hidden="true" id="ln"></i>
              </div>
              <div className="btn gt-btn" onClick={() => window.open('https://github.com/ieeesbjiit', 'noopener noreferrer')}>
                <i className="fa fa-github" aria-hidden="true" id="gt"></i>
              </div>
              <div className="btn yt-btn" onClick={() => window.open('https://www.youtube.com/c/IEEESBJIIT', 'noopener noreferrer')}>
                <i className="fa fa-youtube-play" aria-hidden="true" id="yt"></i>
              </div>
            </div>
          </div>
        </div>

        <div id="totop-icon">
          <a href="#postLoader"></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
