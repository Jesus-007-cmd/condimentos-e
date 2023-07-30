import React, { useContext, useState, useEffect } from 'react';
import { CarritoContext, UserContext, AuthContext } from '../App';

import { useNavigate } from 'react-router-dom';
import '../CSS/nav_dats.css';
import IniciarAdmin from './IniSesAdminModal';

import Carrito from './Carrito';

import imgadmin from '../IMGS/admin.jpg';
import salir from '../IMGS/salir.jpg';
import imgcarrito from '../IMGS/carrito.jpg';

function NavDats() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const { usuario, setUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  const { admin, setAdmin } = useContext(AuthContext);

  const [mostrarCarro, setMostrarCarrito] = useState(false);
  const cerrarCarrito = () => setMostrarCarrito(false);
  const mostrarCarrito = () => {
    if (carrito.length==0){
    alert("No existen datos en Carrito, elige productos")
    navigate('../OrdenesProductos')
    }
    else
    setMostrarCarrito(true);}

  const [mostrarIniSesAdmin, setMostrarIniSesAdmin] = useState(false);
  const mostrarModInSesAdmin = () => {setMostrarIniSesAdmin(true);
  
  }
  const salirTodo = () => {
 setAdmin('')
 
    setUsuario('');
    navigate('../');
  };

  const total = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

  useEffect(() => {
  
  }, [navigate, usuario]);

  return (
    <>
    
      {/* Lo siguiente es para el administrador, se ocutara una vez que este en funciones de administración y se mostrara otro para salir de administrador */}
      {(!admin && !usuario) &&(
        <div className="nav-dats">
          <div>
            <button className='btn-admin' onClick={mostrarModInSesAdmin}>
            <img className='img-admin' src={imgadmin} alt="imagen de un texto que dice ADMIN para entrar a administrador" />
            </button></div>
          <div className="user-info">
            Inicia Sesión como cliente para hacer pedidos
            </div>
          <div >
            <button className='btn-carrito' onClick={mostrarCarrito}>
              <img className='img-carrito' src={imgcarrito} alt="imagen de un carrito de compras de supermercado" /> ({carrito.length})
            </button>
          </div>
          
        
        </div>
      )}
      {/* El siguiente  solo se mostrara cuando mostrarIniSesAdmin sea true que solo es cuando se presiona el boton de administrador*/ }
      
      {(admin && !usuario) && (
        <div className="nav-dats">
          <button className='btn-admin' onClick={salirTodo}>
            <img className='img-admin' src={salir} alt="imagen para salir de admin un monito saliendo " />
          </button>
          <div className="user-info">
            <p>Hola Admin: {admin} </p>
          </div>
        </div>
      )}
        {(!admin && usuario) && (
        <div className="nav-dats">
          <button className='btn-admin' onClick={salirTodo}>
            <img className='img-admin' src={salir} alt="imagen para salir de usuario o admin " />
          </button>
          <div className="user-info">
            <p>Bienvenido: {usuario} </p>
          </div>
          <div >
            <button className='btn-carrito' onClick={mostrarCarrito}>
              <img className='img-carrito' src={imgcarrito} alt="imagen de un carrito de compras de supermercado" /> ({carrito.length})
            </button>
          </div>
        </div>
      )}
      <IniciarAdmin show={mostrarIniSesAdmin}  onHide={() => setMostrarIniSesAdmin(false)}  />
      <Carrito show={mostrarCarro} onHide={() => cerrarCarrito}/>
      
      
      </>
  );
}

export default NavDats;