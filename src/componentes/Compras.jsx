import React from 'react';
import { Link } from 'react-router-dom';
import img_mision from '../IMGS/compras.jpg';
import '../CSS/mision-vision.css';

function Compras() {
  return (
    <div className="mision">
      <div className='tit-mision'>
        <Link to="/productos">Compras</Link> {/* Agregamos Link para redireccionar a PaginaProductos */}
      </div>
      <div>
        <img className="img_mision" src={img_mision} alt="Imagen de un reloj que apunta a un texto llamado misión" />
      </div>
      <div className="texto">
        <div>
          Para poder realizar compras, primero tienes que estar registrado o si ya estás iniciar sesión, dirige al menú inferior en la sección de NUESTRA EMPRESA y después la primera opción es compras.
        </div>
      </div>
    </div>
  );
}

export default Compras;