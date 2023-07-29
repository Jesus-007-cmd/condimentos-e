import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../App';
import { Button, Table } from 'react-bootstrap';
import { obtenerProductos } from '../Conexiones/Productos';
import '../CSS/productos.css';

function Productos() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [productos, setProductos] = useState([]);
  const [ordenProductos, setOrdenProductos] = useState([]);

  useEffect(() => {

    const AxiosProductos = async () => {
      var listaProductos = await obtenerProductos();
      listaProductos = listaProductos.map((listaProductos) => ({
        ...listaProductos,
        cantidad: 0,
      }));
      setProductos(listaProductos);
    };
    AxiosProductos();
  }, []);

  const calcularTotalProducto = (producto) => {
    return producto.costo * producto.cantidad;
  };

  const calcularTotalOrden = () => {
    return ordenProductos.reduce((total, producto) => total + calcularTotalProducto(producto), 0);
  };

  const incrementarCantidad = (producto, cant) => {
    setProductos(
      productos.map((p) =>
        p._id === producto._id ? { ...p, cantidad: p.cantidad + cant } : p
      )
    );
  };

  const decrementarCantidad = (producto, cant) => {
    setProductos(
      productos.map((p) =>
        p._id === producto._id ? { ...p, cantidad: (p.cantidad - cant) >= 0 ? p.cantidad - cant : 0 } : p
      )
    );
  };

  const borrarProducto = (producto) => {
    setProductos(
      productos.map((p) =>
        p._id === producto._id ? { ...p, cantidad: 0 } : p
      )
    );
  };

  const agregarProductoALaOrden = (producto) => {
    if(producto.cantidad==0)
    alert("Debes de elegir una cantidad")
    else {
      agregarAlCarrito(producto) //este es un context para validar si ya existe el producto en el carrito
      //de ser así lo sumara en caso de que no lo creara. 
      borrarProducto(producto)
      }
  };



  return (
    <>
      <Table striped bordered hover  className='tabla_orden'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Precio al público</th>
            <th>Gramos</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>
                <strong>{producto.nombre}</strong>
              </td>
              <td>{producto.costo}</td>
              <td>{producto.precioalpublico}</td>
              <td>{producto.gramos}</td>
              <td>{producto.cantidad || 0}</td>
              <td>{calcularTotalProducto(producto)}</td>
              <td className='order-ctrls-btns1'>
                <Button variant='success' className='btn-agregar-carrito' onClick={() => agregarProductoALaOrden(producto)}>
                Agregar al Carrito
                </Button>
                <div className='order-ctrls-btns'>
                  <Button variant='secondary' size='sm' onClick={() => incrementarCantidad(producto, 1)}>
                    +1
                  </Button>
                  <Button variant='secondary' size='sm' onClick={() => decrementarCantidad(producto, 1)}>
                    -1
                  </Button>
                </div>
                <div className='order-ctrls-btns'>
                  <Button variant='secondary' size='sm' onClick={() => incrementarCantidad(producto, 10)}>
                    +10
                  </Button>
                  <Button variant='secondary' size='sm' onClick={() => decrementarCantidad(producto, 10)}>
                    -10
                  </Button>
                </div>
                <div className='order-ctrls-btns'>
                  <Button variant='secondary' size='sm' onClick={() => incrementarCantidad(producto, 100)}>
                    +100
                  </Button>
                  <Button variant='danger' size='sm' onClick={() => borrarProducto(producto)}>
                    Borrar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



      {/*ordenProductos.length > 0 && (
        <div>
          <Button variant='primary' onClick={realizarOrden}>
            Realizar Orden
          </Button>
        </div>
      )*/}
    </>
  );
}

export default Productos;
