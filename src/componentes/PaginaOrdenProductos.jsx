import React from 'react';
import Encabezado from './Encabezado';
import NavDats from './NavDats';
import OrdenProductos from './OrdenProductos';
import Pie from './Pie';
import '../CSS/paginainicio.css'; // Puedes reutilizar la misma hoja de estilos que tenías

function PaginaOrdenProductos() {
  // Supongamos que 'productos' es un array de productos que obtienes de tu base de datos o de alguna fuente de datos
  

  return (
    <>
      <Encabezado />
      <NavDats />
      <div className='cuerpo'>
        {/* Renderiza el componente Productos y pasa el array productos como prop */}
        <OrdenProductos />
      </div>
      <Pie />
    </>
  );
}

export default PaginaOrdenProductos;