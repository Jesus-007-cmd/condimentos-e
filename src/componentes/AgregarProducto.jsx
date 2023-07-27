import React, { useState, useEffect, useRef } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import '../CSS/agregar_producto.css';
import { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } from '../Conexiones/Productos';

const AgregarProducto = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);

  const nombreRef = useRef(null);
  const costoRef = useRef(null);
  const precioRef = useRef(null);
  const gananciaRef = useRef(null);
  const gramosRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productList = await obtenerProductos();
      setProducts(productList);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      alert('Error al obtener los productos');
    }
  };

  const handleSaveProduct = async (productId) => {
    try {
      const productToUpdate = products.find((product) => product._id === productId);

      if (!productToUpdate) {
        console.error('No se encontró el producto a actualizar');
        return;
      }

      const fieldsToUpdate = {
        nombre: editedFields.nombre !== undefined ? editedFields.nombre : productToUpdate.nombre,
        costo: editedFields.costo !== undefined ? parseInt(editedFields.costo) : productToUpdate.costo,
        precioalpublico: editedFields.precioalpublico !== undefined ? parseInt(editedFields.precioalpublico) : productToUpdate.precioalpublico,
        ganancia: editedFields.ganancia !== undefined ? parseInt(editedFields.ganancia) : productToUpdate.ganancia,
        gramos: editedFields.gramos !== undefined ? parseInt(editedFields.gramos) : productToUpdate.gramos,
      };

      await actualizarProducto(productId, fieldsToUpdate);
      fetchProducts();
      setEditingProduct(null);
      setEditedFields({});
    } catch (error) {
      console.error('Error al guardar los cambios del producto:', error);
      alert('Error al guardar los cambios del producto');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await eliminarProducto(productId);
      setDeleteProductId(null);
      fetchProducts();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      alert('Error al eliminar el producto');
    }
  };

  const handleAddProduct = async () => {
    try {
      const nuevoProducto = {
        nombre: nombreRef.current.value,
        costo: parseInt(costoRef.current.value),
        precioalpublico: parseInt(precioRef.current.value),
        ganancia: parseInt(gananciaRef.current.value),
        gramos: parseInt(gramosRef.current.value),
      };

      await agregarProducto(nuevoProducto);
      fetchProducts();

      nombreRef.current.value = '';
      costoRef.current.value = '';
      precioRef.current.value = '';
      gananciaRef.current.value = '';
      gramosRef.current.value = '';
      setShowAddForm(false);
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('Error al agregar el producto');
    }
  };

  const handleEditProduct = (productId) => {
    setEditingProduct(productId);
    const productToEdit = products.find((product) => product._id === productId);
    setEditedFields({ ...productToEdit });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditedFields({});
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Precio al Público</th>
            <th>Ganancia</th>
            <th>Gramos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <React.Fragment key={product._id}>
              <tr>
                <td>{product.nombre}</td>
                <td>{product.costo}</td>
                <td>{product.precioalpublico}</td>
                <td>{product.ganancia}</td>
                <td>{product.gramos}</td>
                <td>
                  {editingProduct === product._id ? (
                    <div>
                      <Button variant="success" onClick={() => handleSaveProduct(product._id)}>
                        Guardar
                      </Button>
                      <Button variant="secondary" onClick={handleCancelEdit}>
                        Cancelar
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button variant="info" onClick={() => handleEditProduct(product._id)}>
                        Editar
                      </Button>
                      <Button variant="danger" onClick={() => setDeleteProductId(product._id)}>
                        Eliminar
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
              {editingProduct === product._id && (
                <tr>
                  <td colSpan="6">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={editedFields.nombre !== undefined ? editedFields.nombre : product.nombre}
                        onChange={(e) => setEditedFields({ ...editedFields, nombre: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="costo">Costo:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={editedFields.costo !== undefined ? editedFields.costo : product.costo}
                        onChange={(e) => setEditedFields({ ...editedFields, costo: parseInt(e.target.value) })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="precioalpublico">Precio al Público:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={editedFields.precioalpublico !== undefined ? editedFields.precioalpublico : product.precioalpublico}
                        onChange={(e) => setEditedFields({ ...editedFields, precioalpublico: parseInt(e.target.value) })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ganancia">Ganancia:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={editedFields.ganancia !== undefined ? editedFields.ganancia : product.ganancia}
                        onChange={(e) => setEditedFields({ ...editedFields, ganancia: parseInt(e.target.value) })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gramos">Gramos:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={editedFields.gramos !== undefined ? editedFields.gramos : product.gramos}
                        onChange={(e) => setEditedFields({ ...editedFields, gramos: parseInt(e.target.value) })}
                      />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
          {showAddForm && (
            <tr>
              <td>
                <input type="text" className="form-control" ref={nombreRef} />
              </td>
              <td>
                <input type="number" className="form-control" ref={costoRef} />
              </td>
              <td>
                <input type="number" className="form-control" ref={precioRef} />
              </td>
              <td>
                <input type="number" className="form-control" ref={gananciaRef} />
              </td>
              <td>
                <input type="number" className="form-control" ref={gramosRef} />
              </td>
              <td>
                <Button variant="success" onClick={handleAddProduct}>
                  Guardar Producto
                </Button>
                <Button variant="secondary" onClick={() => setShowAddForm(false)}>
                  Cancelar
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal show={deleteProductId !== null} onHide={() => setDeleteProductId(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteProductId(null)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDeleteProduct(deleteProductId)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      {!showAddForm && (
        <Button variant="primary" onClick={() => setShowAddForm(true)}>
          Agregar Producto
        </Button>
      )}
    </div>
  );
};

export default AgregarProducto;
