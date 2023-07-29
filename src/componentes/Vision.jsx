import React from 'react';
import img_mision from '../IMGS/vision.jpg';
import '../CSS/mision-vision.css';

function Vision() {
  return (
    <div className="mision">
      <div className="tit-mision">Visión</div>
      <div className="contenido">
        <div className="texto">
          Proporcionar la imagen de la empresa la cual represente calidad en los productos así como economía y de fácil
          obtención para nuestros clientes, brindándoles servicios de logística de venta.
        </div>
        
        <div className="img-container">
          <img className="img_mision" src={img_mision} alt="Imagen de un reloj que apunta a un texto llamado misión" />
        </div>
      </div>
      
    </div>
  );
}

export default Vision;
