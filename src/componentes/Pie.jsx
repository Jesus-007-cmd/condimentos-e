import React from 'react';
import condimentos from '../IMGS/presa rosales.jpg';
import '../CSS/pie.css';

function Pie() {
  return (
    <footer className="final">
      <nav className="contenedorFinal">
        
        <div className='group-elments'>
          <ul>
            <li>
              <h2>NUESTRA EMPRESA</h2>
            </li>
            <li>
              <a href="#">Compras</a>
            </li>
            <li>
              <a href="#">Ventas</a>
            </li>
            <li>
              <a href="#">Historia</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
          </ul>
        </div>
        <div className='group-elments'>
          <img className="condimentos-img" src={condimentos} alt="imagen de presa de rosales" />
        </div>
        <div className='group-elments'>
          <ul>
            <li>
              <h2>ENLACES ÚTILES</h2>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
            <li>
              <a href="#">Nuestra Aplicación</a>
            </li>
            <li>
              <a href="#">Recetas con nuestros productos</a>
            </li>
            <li>
              <a href="#">Uso culinario</a>
            </li>
          </ul>
        </div>
        <div className='group-elments'>
        <div class="redess">
          <div class="espacio">
            <a href="https://www.instagram.com/">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <div class="espacio">
            <a href="https://twitter.com/">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
          <div class="espacio">
            <a href="https://www.facebook.com/">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </div>
        </div>
      </nav>
    </footer>
  );
}

export default Pie;
