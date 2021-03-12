import React from 'react';
import './reset.css';
import './global.css';
import { Link } from 'react-router-dom';

function FourthPage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p class="second">Vc é linda por dentro e por fora! 😎</p>
          <p class="third">e eu me apaixonei 😍 completamente por vc!</p>
        </div>
        <div class="btn">
          <Link to="five">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
