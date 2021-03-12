import React, { useEffect } from 'react';
import './reset.css';
import './global.css';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

import anime from "animejs";

function FinalPage() {
  
  const animationRef = React.useRef(null);

  useEffect(()=> {

    const container = document.querySelector('.container-heart');
    for (let i = 0; i <= 50; i++) {
        const hearts = document.createElement('div');
        hearts.classList.add('heart');
        container.appendChild(hearts);
    }
  
    function animateHearts() {
      anime({
        targets: '.heart',
        translateX: function () {
          return anime.random(-700, 700);
        },
        translateY: function () {
          return anime.random(-700, 700);
        },
        rotate: 45,
        scale: function () {
          return anime.random(1, 4);
        },
  
        easing: 'easeInOutBack',
        duration: 3500,
        // delay: anime.stagger(10),
        complete: animateHearts,
      });
    }

    animateHearts();
  }, []);

  return (
    <div>
      <div class="container-heart">
        <div class="text">
          <p>Eai, Quer Namorar Comigo ?</p>
          <div class="emojis">
            <span>🦉</span>
            <span>❤️</span>
            <span>&#128058;</span>
          </div>
          <div class="inicio">
            <Link to="/">Início</Link>
          </div>
        </div>
        <div class="heart"></div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js" integrity="sha256-hBMojZuWKocCflyaG8T19KBq9OlTlK39CTxb8AUWKhY=" crossorigin="anonymous"></script>
    </div>
  );
}

export default FinalPage;