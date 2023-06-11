//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './PaginaInicio';

//import PaginaP from './Header';
//import RegistroOiniciarSesion from './RegistroOiniciarSesion';
//import PaginaDescripcion from './PaginaDescripcion';
function Enrutador() {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicio/>}/>
        </Routes>
         
    )
}

export default Enrutador;

  /*  <Route path='/index' element={<PaginaP/>} />
            <Route path='/Comidas' element={<PaginaComidas/>} />
            <Route path='/Datos' element={<RegistroOiniciarSesion/>} />
            <Route path='/AcercadeNosotros' element={<PaginaDescripcion/>} />
            */