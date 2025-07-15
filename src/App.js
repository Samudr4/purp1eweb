import React from 'react';
import './App.css';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <div id="particles">
        <div id="intro">
          <h2 className="hover-color" style={{ fontFamily: "'Syncopate', sans-serif", fontWeight: 10 }}>
            &lt; PURP1E /&gt;
          </h2>
          <h3 style={{ fontFamily: "'Syncopate', sans-serif", fontWeight: 20 }}>
            Samudra K. Saikia
          </h3>
          <h1>
            <span className="txt-rotate" data-period="1000" data-rotate='[ "Developer.", "Editor/Graphic Designer.", "Gamer." ]'></span>
          </h1>
          <div className="social-links">
              <a href="https://www.instagram.com/samudr4.io/" style={{ color: 'white' }}>
                <i className="fab fa-instagram" data-bss-hover-animate="pulse"></i>
              </a>
              <a href="https://www.facebook.com/samudr4.io/" style={{ color: 'white' }}>
                <i className="fab fa-facebook" data-bss-hover-animate="pulse"></i>
              </a>
              <a href="https://youtube.com/channel/UC7y81yZN6jSr65sDu4fLmmA" style={{ color: 'white' }}>
                <i className="fab fa-youtube" data-bss-hover-animate="pulse"></i>
              </a>
              <a href="https://twitter.com/purp1exd" style={{ color: 'white' }}>
                <i className="fab fa-twitter" data-bss-hover-animate="pulse"></i>
              </a>
              <a href="https://discord.gg/hc4y8fCqCD" style={{ color: 'white' }}>
                <i className="fab fa-discord" data-bss-hover-animate="pulse"></i>
              </a>
              <a href="https://github.com/Samudr4" style={{ color: 'white' }}>
                <i className="fab fa-github" data-bss-hover-animate="pulse"></i>
              </a>
              <a href="https://www.linkedin.com/in/samudr4/" style={{ color: 'white' }}>
                <i className="fab fa-linkedin" data-bss-hover-animate="pulse"></i>
              </a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
