import React, { useContext } from 'react';
import Encabezado from './Encabezado';
import NavDats from './NavDats';
import AgregarProducto from './AgregarProducto';
import Pie from './Pie';
import '../CSS/paginainicio.css'; // Puedes reutilizar la misma hoja de estilos que tenías
import { AuthContext } from '../App'; // Importa el contexto de autenticación

function PaginaAgregarProductos() {
  const { admin } = useContext(AuthContext); // Obtiene el estado 'admin' del contexto

  // Función para renderizar el contenido dependiendo del estado 'admin'
  const renderContent = () => {
    if (!admin) {
      return (
        <div className='mensaje-privado'>
          <h2>Sitio Privado</h2>
          <p>No has iniciado sesión como administrador.</p>
          <p>Por favor, inicia sesión como administrador para agregar productos.</p>
          {/* Aquí podrías agregar algún botón o enlace para redirigir a la página de inicio de sesión */}
        </div>
      );
    } else {
      // Renderiza el componente AgregarProducto si el usuario es administrador
      return <AgregarProducto />;
    }
  };

  return (
    <>
      <Encabezado />
      <NavDats />
      <div className='cuerpo'>
        {/* Renderiza el contenido dependiendo del estado 'admin' */}
        {renderContent()}
      </div>
      <Pie />
    </>
  );
}

export default PaginaAgregarProductos;