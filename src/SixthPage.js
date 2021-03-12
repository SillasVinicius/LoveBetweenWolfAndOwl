import React from 'react';
import './reset.css';
import './global.css';
import SeventhPage from './SeventhPage';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

function SixthPage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p class="second">E eu quero conhecer mais de vc 😊</p>
          <p class="third">ficar cada dia mais próximo e andar junto. 👫</p>
        </div>
        <div class="btn">
          <Link to="/seven">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default SixthPage;
