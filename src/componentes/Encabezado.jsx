//CSS
import '../CSS/header.css'
import { useState } from 'react';

//COMPONENTES
import IniciarSesion from "../componentes/RegIniSesModal"

//IMAGENES  <img src={fondo_header} className='' alt="" />
//import fondo_header from '../IMGS/presa rosales.jpg';


  

function Encabezado() {
  const [showIniciarSesion, setMostrarIniciarSesion] = useState(false);
  const iniciar_sesion=() =>{setMostrarIniciarSesion(!showIniciarSesion)}
    return (
      
        <header>
          <div className='header-img'>
          <div className='header-orden-text'>
            <div>

            </div>
            <div className='header-texto'>Condimentos del Rio
            </div>   
            {showIniciarSesion && <IniciarSesion show={showIniciarSesion} onHide={() => setMostrarIniciarSesion(false)} data="Iniciar_sesion"  /> } 
            <button className="btn_iniciar_sesion" > <div className='header-inicio' event={() => { iniciar_sesion()}}>Iniciar Sesión </div> </button>
           
            </div>   
          </div> 
               
          
            

        </header>    );
  }
  export default Encabezado;