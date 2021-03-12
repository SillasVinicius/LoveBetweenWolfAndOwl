import React from 'react';
import './reset.css';
import './global.css';
import { Link } from 'react-router-dom';

function FifthPage() {
  return (
    <div class="container">
      <div class="emojis">
        <span>🦉</span>
        <span>&#128058;</span>
      </div>
      <div class="question">
        <p class="second">O que na vida ninguém fez 😉</p>
        <p class="third">vc fez em menos de um mês 🎼</p>
      </div>
      <div class="btn">
        <Link to="/six">Próxima</Link>
      </div>
      <div class="btn-home">
        <Link to="/">Início</Link>
      </div>
    </div>
  );
}

export default FifthPage;