import React from 'react';
import './reset.css';
import './global.css';
import ThirdPage from './ThirdPage';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

function SecondPage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p>Posso te contar umas coisas ? 😊</p>
        </div>
        <div class="btn">
          <Link to="/three">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
