import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

import '../CSS/header.css';

function Encabezado() {
  const navigate = useNavigate();
  const { usuario } = useContext(UserContext);

  return (
    <header className="header-img" >
      <div className="header-orden-text">
        <div></div>
        <div className="header-texto">Condimentos del Río</div>
        {!usuario && (
          <div className="group_btns">
            <button
              className="btn_iniciar_sesion"
              onClick={() => {
                navigate('../Iniciar_Sesion');
              }}
            >
              <div className="header-inicio">Iniciar Sesión</div>
            </button>
            <button
              className="btn_iniciar_sesion"
              onClick={() => {
                navigate('../Registrarse');
              }}
            >
              <div className="header-inicio">Registrarse</div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Encabezado;
