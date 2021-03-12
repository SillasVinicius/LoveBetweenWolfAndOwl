import React from 'react';
import './reset.css';
import './global.css';
import FourthPage from './FourthPage';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

function ThirdPage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p class="second">Eu penso em vc o tempo todo!</p>
          <p class="third">e eu amo ficar até tarde conversando com vc!</p>
          <p class="second" style={{marginTop: '10px'}}>😚😘</p>
        </div>
        <div class="btn">
          <Link to="/four">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
