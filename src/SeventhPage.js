import React from 'react';
import './reset.css';
import './global.css';
import { Link } from 'react-router-dom';

function SeventhPage() {
  return (
    <div>
      <div class="container">
        <div class="emojis">
          <span>🦉</span>
          <span>&#128058;</span>
        </div>
        <div class="question">
          <p class="second">E quero fazer isso seguindo tudo aquilo que acreditamos. ✞</p>
          <p class="third">e de acordo com a palavra de Deus. 😇🙏</p>
        </div>
        <div class="btn">
          <Link to="/eight">Próxima</Link>
        </div>
        <div class="btn-home">
          <Link to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default SeventhPage;