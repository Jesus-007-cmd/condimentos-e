//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './PaginaInicio';
import Iniciarsesion from './IniciarSesion';
import Registrarse from './Registrarse';
import PaginaProductos from './PaginaProductos';
import PaginaAgregarProductos from './PaginaAgregarProductos';
//import PaginaP from './Header';
//import RegistroOiniciarSesion from './RegistroOiniciarSesion';
//import PaginaDescripcion from './PaginaDescripcion';
function Enrutador() {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicio/>}/>
            <Route path='/Iniciar_Sesion' element={<Iniciarsesion/>}/>
            <Route path='/Registrarse' element={<Registrarse/>}/>
            <Route path="/Productos" element={<PaginaProductos />} /> 
            <Route path="/AgregarProductos" element={<PaginaAgregarProductos />} /> 
        </Routes>
         
    )
}
export default Enrutador;
