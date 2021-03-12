import React from 'react';
import './reset.css';
import './global.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p>Eii corujinha tudo bem ? 😁</p>
        </div>
        <div class="btn">
          <Link to="/two">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
