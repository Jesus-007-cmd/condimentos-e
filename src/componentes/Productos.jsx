import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../App';
import { Button, Table } from 'react-bootstrap';
import { obtenerProductos } from "../Conexiones/Productos";

function Productos() {
  const { carrito, agregarAlCarrito, quitarDelCarrito } = useContext(CarritoContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const AxiosProductos = async () => {
      const listaProductos = await obtenerProductos();
      setProductos(listaProductos);
    };
    AxiosProductos();
  }, []);

  const incrementarCantidad = (producto, cantidad) => {
    const existente = carrito.find((item) => item.id === producto.id);
    if (existente) {
      agregarAlCarrito({ ...producto, cantidad: existente.cantidad + cantidad });
    } else {
      agregarAlCarrito({ ...producto, cantidad });
    }
  };

  const decrementarCantidad = (producto, cantidad) => {
    const existente = carrito.find((item) => item.id === producto.id);
    if (existente) {
      if (existente.cantidad <= cantidad) {
        quitarDelCarrito(producto);
      } else {
        agregarAlCarrito({ ...producto, cantidad: existente.cantidad - cantidad });
      }
    }
  };

  const borrarProducto = (producto) => {
    quitarDelCarrito(producto);
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio al público</th>
          <th>Gramos</th>
       
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto._id}>
            <td><strong>{producto.nombre}</strong></td>
            <td>{producto.precioalpublico}</td>
            <td>{producto.gramos}</td>
            
            <td>{/* Mostrar el total del producto */}</td>
            <td>
              <Button variant="success" onClick={() => agregarAlCarrito(producto)}>
                Agregar <br /> al Carrito
              </Button>
              <Button variant="secondary" size="sm" onClick={() => incrementarCantidad(producto, 1)}>
                +1
              </Button>
              <Button variant="secondary" size="sm" onClick={() => incrementarCantidad(producto, 10)}>
                +10
              </Button>
              <Button variant="secondary" size="sm" onClick={() => incrementarCantidad(producto, 100)}>
                +100
              </Button>
              <Button variant="secondary" size="sm" onClick={() => decrementarCantidad(producto, 1)}>
                -1
              </Button>
              <Button variant="secondary" size="sm" onClick={() => decrementarCantidad(producto, 10)}>
                -10
              </Button>
              <Button variant="danger" size="sm" onClick={() => borrarProducto(producto)}>
                Borrar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Productos;
