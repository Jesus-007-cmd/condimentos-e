import axios from 'axios';
import React, { useContext } from 'react';
import { CarritoContext, UserContext } from '../App';
import { Button, Modal, Table } from 'react-bootstrap';
import '../CSS/carrito.css';
const Carrito = (props) => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const { usuario } = useContext(UserContext);

  
    const realizarPedido = async () => {
      if (usuario == '') {
        alert("Primero accede con tu usuario y contraseña para asignarte la orden");
        return;
      }
      if (carrito.length === 0) {
        alert("No hay productos en el carrito para realizar el pedido.");
        return;
      }
    
      try {
        const fecha = new Date(); // Fecha actual
        const totalPedido = calcularTotalCarrito(); // Calcular el total del pedido

        const orden = carrito.map((elemento) => ({
          nombre: elemento.nombre,
          costo: elemento.costo,
          cantidad: elemento.cantidad,
          gramos: elemento.gramos,
          _id: elemento._id
        }));

        // Crear el objeto de la orden
        const nuevaOrden = {
          fecha: fecha,
          products: orden,
          total: totalPedido,
          completada: false,
          fecha_completada: null,
          usuario: usuario
        };
        
        // Hacer la petición POST para guardar la orden en la base de datos
        const response = await axios.post('http://localhost:5500/order', nuevaOrden);
    
        if (response.status === 201) {
          // Si la respuesta es exitosa (código 201), mostrar mensaje y limpiar el carrito
          alert('Pedido realizado con éxito.');
          vaciarCarrito();
          props.onHide()
        } else {
          // Si hay un error en la respuesta, mostrar mensaje de error
          alert('Error al realizar el pedido. Inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al realizar el pedido:', error);
        alert('Error interno del servidor. Inténtalo de nuevo.');
      }
     
    };
    
  
 
  const totalProducto = (producto) => {
    return producto.cantidad * producto.costo;
  };
   const calcularTotalCarrito = () => {
    return carrito.reduce((total, elemento) => total + totalProducto(elemento), 0);
  };
   
  return (
    <Modal  {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Cantidad</th>
              <th>Total</th>
              
            </tr>
          </thead>
          <tbody className='centrar-elementos-carrito'>
            {carrito.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.costo}</td>
                <td>{producto.cantidad}</td>
                <td>{totalProducto(producto)}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>Total del Carrito: {Intl.NumberFormat('en-IN', {style: 'currency',currency: 'usd', minimumFractionDigits: 2}).format(calcularTotalCarrito())} pesos</h3> 
        <div className="carrito-buttons">
          <Button variant="primary" onClick={realizarPedido}>
            Realizar Pedido
          </Button>
          <Button variant="danger" onClick={vaciarCarrito}>
            Vaciar Carrito
          </Button>
          <Button variant="secondary" onClick={ props.onHide()}>
            Cerrar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Carrito;
