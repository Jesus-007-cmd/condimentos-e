import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App'; // Importa el contexto de autenticación
import { loginAdmin } from '../Conexiones/AdminConexion'; // Importa la función de login de admin
import Form from 'react-bootstrap/Form';
import ButtonReactBS from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function IniSesAdminModal(props) {
  const correoRef = useRef(null);
  const contraseñaRef = useRef(null);
  const { admin, setAdmin } = useContext(AuthContext); 
  const navigate = useNavigate();

  const OnSubmit = async () => {
    const data = await loginAdmin(correoRef.current.value, contraseñaRef.current.value);
    
    if (!data) {
      alert('Error de autenticación');
      
    } else {
      console.log(data);
      // useState 
      alert(correoRef.current.value)
      setAdmin(correoRef.current.value); // Actualiza el estado 'admin' en función de la respuesta del servidor
      alert(admin)
      navigate('../AgregarProductos');
    }
  };
  const [showmodal, setShowmodal] = useState(false)

  return (
    <Modal  show={showmodal} {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered scrollable='true'  >
      <Modal.Body className='modal-css'>
        <Form>
          <Form.Group className='tems_config'>
            <Form.Label className='textborderL'>Correo Electrónico:</Form.Label>
            <Form.Control type='text' className='textborderT' ref={correoRef} />

            <Form.Label className='textborderL'>Contraseña:</Form.Label>
            <Form.Control type='password' className='textborderT' ref={contraseñaRef} />
          </Form.Group>
          <div className='btnsModalinicio'>
            <ButtonReactBS
              className='btnaceptar'
              variant='danger'
              onClick={() => {
                if (correoRef.current.value === '') {
                  alert('Por favor ingresa tu correo electrónico');
                  return false;
                }
                if (contraseñaRef.current.value === '') {
                  alert('Por favor ingresa tu contraseña');
                  return false;
                }
                OnSubmit();
              }}
            >
              ACEPTAR
            </ButtonReactBS>
            <ButtonReactBS className='btnaceptar' variant='danger' onClick={() => {
                 
                  
                  props.onHide()
                  navigate('../')
                  }}>
              CANCELAR
            </ButtonReactBS>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default IniSesAdminModal;