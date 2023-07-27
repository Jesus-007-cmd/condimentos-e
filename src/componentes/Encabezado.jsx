import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import React, { useContext } from 'react';
import { UserContext } from '../App';
//CSS
import '../CSS/header.css'



//IMAGENES  <img src={fondo_header} className='' alt="" />
//import fondo_header from '../IMGS/presa rosales.jpg';
function Encabezado() {
  const navigate = useNavigate();
  const { usuario } = useContext(UserContext);
return (
        <header>
          <div className='header-img'>
          <div className='header-orden-text'>
            <div>
            </div>
            <div className='header-texto'>Condimentos del Rio
            </div>   
            {!usuario && <div className="group_btns">
            <button className="btn_iniciar_sesion"  onClick={() => {                   

             navigate('../Iniciar_Sesion')
             }}> <div className='header-inicio' >Iniciar Sesión </div> </button>
            <button className="btn_iniciar_sesion"  onClick={() => { 
             navigate('../Registrarse')}}> <div className='header-inicio' >Registrarse </div> </button>
             </div>  }
             </div> 
          </div>
       </header>    );
  }
 

  export default Encabezado;