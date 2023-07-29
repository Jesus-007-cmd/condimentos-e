
import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to

import {  useRef, useContext } from 'react';
import ButtonReactBS from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { login } from "../Conexiones/UsuarioConexion"; //aqui importamos el código de promesa para consultar usuario

import Form from 'react-bootstrap/Form';

import { UserContext, AuthContext } from '../App.js';


function IniSesModal(props) {
  const num_telefo = useRef(null);
  const refpassw = useRef(null);
  const { usuario, setUsuario, token, setToken } = useContext(UserContext)
  const { setAdmin } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const OnSubmit = async () => {
    const data = await login(num_telefo.current.value, refpassw.current.value);
    if (!data) {
      alert('Error de authenticacion');

    } else {
      console.log(data);

      // useState
      setToken(data.token);
      console.log(data.user)
      setUsuario(num_telefo.current.value);
      setAdmin(false)
      navigate('../OrdenesProductos')
      
    }
  }
  return (
    <Modal   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable='true'
    >
      <Modal.Body className="modal-css" >
        <Form >
          <Form.Group className='tems_config' >
            <Form.Label className='textborderL'>Número Celular o correo Electronico:</Form.Label>
            <Form.Control type="text" className='textborderT' ref={num_telefo} />
            <Form.Label className='textborderL'>Introducir Contraseña:</Form.Label>
            <Form.Control type="password" className='textborderT' ref={refpassw} />
          </Form.Group>
          <div className='btnsModalinicio' >
            <ButtonReactBS className='btnaceptar' variant="danger" onClick={() => {
              if (num_telefo.current.value === "") {
                alert("Por favor escribe tú número de telefono con el que te registraste")
                return false
              }
              if (refpassw.current.value === "") {
                alert("Por favor escribe tú contraseña")
                return false
              }
              OnSubmit()
            }}>ACEPTAR</ButtonReactBS>
            <ButtonReactBS className='btnaceptar' variant="danger" onClick={() => { 
                    navigate('../') 
                    setUsuario(false);
                    setAdmin(false)
                    }}>CANCELAR</ButtonReactBS>
          </div >
        </Form>




      </Modal.Body>


    </Modal>

  );


}



export default IniSesModal

