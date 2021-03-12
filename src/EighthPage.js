import React from 'react';
import './reset.css';
import './global.css';

import { Link } from 'react-router-dom';

function EighthPage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p class="second">Mas pra isso temos q dar um passo adiante. 😊</p>
          <p class="third">e quero te fazer uma pergunta...</p>
        </div>
        <div class="btn">
          <Link to="/final">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default EighthPage;