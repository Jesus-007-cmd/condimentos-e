import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReactBS from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { registrarUsuario } from '../Conexiones/UsuarioConexion'; // Importar la función para registrar usuario

function RegSesModal(props) {
  const navigate = useNavigate();
  const correoRef = useRef(null);
  const contraseñaRef = useRef(null);
  const contraseña2Ref = useRef(null);
  const nombreRef = useRef(null);
  const num_telRef = useRef(null);
  const RFCRef = useRef(null);
  const coloniaRef = useRef(null);
  const calleRef = useRef(null);
  const codigoPostalRef = useRef(null);
  const ciudadRef = useRef(null);
  const responsableRef = useRef(null);

  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [error, setError] = useState('');

  const registro_cliente = async () => {
    if (contraseñaRef.current.value !== contraseña2Ref.current.value) {
      setError('Las contraseñas no coinciden');
      return;
    }
    const fecha = new Date(); // Fecha actual
    const jsonCliente = {
      correo: correoRef.current.value,
      contraseña: contraseñaRef.current.value,
      nombreNegocio: nombreRef.current.value,
      telefono: num_telRef.current.value,
      RFC: RFCRef.current.value,
      colonia: coloniaRef.current.value,
      calle: calleRef.current.value,
      codigo_postal: codigoPostalRef.current.value,
      ciudad: ciudadRef.current.value,
      fecha_de_alta: fecha,
      responsables: responsableRef.current.value,
    };

    try {
      const response = await registrarUsuario(jsonCliente);
      if (response.status === 201) {
        alert('Usuario registrado correctamente.');
        setRegistroExitoso(true);
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setError('Error al registrar el usuario. Inténtalo de nuevo.');
    }
    navigate('../')
  };


  return (

    <Modal //autoFocus='false'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable='true'
    >
      <div className="modal-css">
        <Modal.Body  >

          <Form  >
            <Form.Group  >
              <div className='orden_coloum' >
                <Form.Label className='text_label textborder'>Nombre del Negocio:</Form.Label>
                <Form.Control type="text" autoFocus className='textborder2' ref={nombreRef} />
              </div>
              <div className='orden_row' >
                <div >
                <Form.Label className='text_label textborder'>Contraseña:</Form.Label>
                  <Form.Control type="password" className='textborder2' ref={contraseñaRef} />
                  <Form.Label className='text_label textborder'>Correo Electronico:</Form.Label>
                  <Form.Control type="email" placeholder="nombre@proveedor.com" className='textborder2' ref={correoRef} />
                  <Form.Label className='text_label textborder'>Telefono:</Form.Label>
                  <Form.Control type="text" className='textborder2' ref={num_telRef} />
                </div>
                <div>
                <Form.Label className='text_label textborder'>Repetir contraseña:</Form.Label>
                  <Form.Control type="password" className='textborder2' ref={contraseña2Ref} />
                  <Form.Label className='text_label textborder'>RFC:</Form.Label>
                  <Form.Control className='textborder2' ref={RFCRef} />
                  <Form.Label className='text_label textborder'>Colonia:</Form.Label>
                  <Form.Control className='textborder2' ref={coloniaRef} />
                </div>

              </div>
              <div className='orden_coloum'>
                  <Form.Label className='text_label textborder'>Calle y número: </Form.Label>
                  <Form.Control type="text" className='textborder2' ref={calleRef} />
                </div>
                  
                <div className='orden_row'>
                <div>
                  <Form.Label className='text_label textborder' >Codigo Postal: </Form.Label>
                  <Form.Control type="text" className='textborder2' ref={codigoPostalRef} />
                </div>
                <div>
                  <Form.Label className='text_label textborder'>Ciudad: </Form.Label>
                  <Form.Control type="text" className='textborder2' ref={ciudadRef} />
                </div>
              </div>
              <div>
                <Form.Label className='text_label textborder'>Nombre del Encargado: </Form.Label>
                <Form.Control type="text" className='textborder2' ref={responsableRef} />
              </div>

              <div className='btnsModalinicio'> <ButtonReactBS className='btnaceptar' variant="danger" onClick={() => {registro_cliente()  }}>ACEPTAR</ButtonReactBS>
                <ButtonReactBS className='btnaceptar' variant="danger" onClick={() => { props.onHide()
                   navigate('../') }}>CANCELAR</ButtonReactBS>
              </div>
            </Form.Group>

          </Form>
        </Modal.Body>
      </div>


    </Modal>

  );

}
export default RegSesModal

