
import Encabezado from './Encabezado';
import NavDats from './NavDats';
import Carrusel from './Carrusel';
import Mision from './Mision';
import Vision from './Vision';
import Compras from './Compras';
import Pie from './Pie';

import '../CSS/paginainicio.css'
function PaginaInicio() {
  return (
    <>
      <Encabezado />
      <NavDats />
      <div className='cuerpo'>

        <div><Carrusel /></div>
        <div><Mision /></div>
        <div><Vision /></div>
        <div><Compras /></div>
      </div>
      <Pie />
    </>
  );
}
export default PaginaInicio;