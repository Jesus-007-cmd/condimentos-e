
import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import { useState, useRef, useEffect } from 'react';
import ButtonReactBS from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function RegSesModal(props) {
  const correo = useRef(null);
  const contraseña = useRef(null);
  const contraseña2 = useRef(null);
  const nombre = useRef(null);
  const num_tel = useRef(null);
  const apellido = useRef(null);
  const colonia = useRef(null);
  const calle = useRef(null);
  const numero = useRef(null);
  const ciudad = useRef(null);

  const num_telefo = useRef(null);
  const refpassw = useRef(null);

  const [ultireg, setData] = useState([]);
  const [usuarioexistente, setUsuarioexistente] = useState([]);

  const [sellamo, setSellamo] = useState(false);
  const [pagReg, setpagReg] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (sellamo === true) {
      navigate('../PaginaP')

      setpagReg(false)
      setSellamo(false)
    }
  }, [pagReg]);



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
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Número de contacto:</Form.Label>
              <Form.Control id="id_numero_tel" type="text" className='textborder' ref={num_tel} />
              <div className='orden_registro'>
                <div>
                  <Form.Label>Introduce tú contraseña:</Form.Label>
                  <Form.Control id="id_pass1" type="password" className='textborder' ref={contraseña} />
                </div>
                <div>
                  <Form.Label>Vuelve a introducir tú contraseña:</Form.Label>
                  <Form.Control id="id_pass2" type="password" className='textborder' ref={contraseña2} />
                </div>
              </div>
            </Form.Group >
            <Form.Group controlId="exampleForm.ControlInput1">
              <div className='orden_registro' >
                <div >
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control id="id_nombre" type="text" className='textborder' ref={nombre} />
                  <Form.Label>Apellido:</Form.Label>
                  <Form.Control id="id_apellido" type="text" className='textborder' ref={apellido} />

                </div>
                <div>
                  <Form.Label>Escribe tú dirección de correo:</Form.Label>
                  <Form.Control type="email" placeholder="nombre@proveedor.com" autoFocus className='textborder' ref={correo} />
                  <Form.Label>Colonia:</Form.Label>
                  <Form.Control id="id_colonia" type="text" className='textborder' ref={colonia} />

                </div>

              </div>
              <div className='orden_registro'>
                <div>
                  <Form.Label>Calle: </Form.Label>
                  <Form.Control id="id_calle" type="text" className='textborder' ref={calle} />
                </div>
                <div>
                  <Form.Label >Número: </Form.Label>
                  <Form.Control id="id_num" type="text" className='textborder textborder2' ref={numero} />
                </div>
                <div>
                  <Form.Label>Ciudad: </Form.Label>
                  <Form.Control id="id_ciudad" type="text" className='textborder' ref={ciudad} />
                </div>
              </div>
              <div className='btnsModalinicio'> <ButtonReactBS  className='btnaceptar'  variant="danger" onClick={() => { navigate('../') }}>ACEPTAR</ButtonReactBS>
              <ButtonReactBS  className='btnaceptar'  variant="danger" onClick={() => { navigate('../') }}>CANCELAR</ButtonReactBS>
              </div>
            </Form.Group>

          </Form>
        </Modal.Body>
        </div>
        
     
    </Modal>

  );
  function lista_clientes() {


    let x;
    for (x = 0; x < usuarioexistente.Count; x++) {

      console.log(usuarioexistente.Items[x].numero_tel)
      if (usuarioexistente.Items[x].numero_tel === num_telefo.current.value)
        if (usuarioexistente.Items[x].contraseña === refpassw.current.value) {
          alert("inicio de sesion correcto :-)")
          setSellamo(true)
          setpagReg(true)
          localStorage.setItem("nmbdynanmo", usuarioexistente.Items[x].nombre + " " + usuarioexistente.Items[x].apellidos)
          localStorage.setItem("id_usdynamo", usuarioexistente.Items[x].id_cliente)
          localStorage.setItem("registrado", true)



          return
        }


    } alert("Usuario o contraseñas no validas")
  }
  function registro_cliente() {

    if (!(contraseña.current.value === contraseña2.current.value)) {
      alert("Las contraseñas deben coincidir")
      return
    }

    const jsonCLiente = {
      id_clie: ultireg,
      correo: correo.current.value,
      contraseña: contraseña.current.value,
      nombre: nombre.current.value,
      numero_tel: num_tel.current.value,
      apellidos: apellido.current.value,
      colonia: colonia.current.value,
      calle: calle.current.value,
      numero: numero.current.value,
      ciudad: ciudad.current.value,
    }

    //regCliente(jsonCLiente)
    alert("Usuario Registrado correctamente :-)")
    setSellamo(true)
    setpagReg(true)
    localStorage.setItem("nmbdynanmo", nombre.current.value + " " + apellido.current.value)
    localStorage.setItem("id_usdynamo", ultireg)
    localStorage.setItem("registrado", true)
  }

}
export default RegSesModal 

