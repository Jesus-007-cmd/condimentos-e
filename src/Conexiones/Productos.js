import axios from 'axios';

const baseURL = 'http://localhost:5500'; // Actualiza la URL base según corresponda

const api = axios.create({
  baseURL,
});

const obtenerProductos = async () => {
  try {
    const response = await api.get('/product');
    return response.data.products;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];
  }
};

const agregarProducto = async (formData) => {
  try {
    const response = await api.post('/product', formData);
    return response.data;
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    throw new Error('Error al agregar el producto');
  }
};

const actualizarProducto = async (productId, updatedData) => {
  try {
    const response = await api.put(`/product/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    throw new Error('Error al actualizar el producto');
  }
};

const eliminarProducto = async (productId) => {
  try {
    const response = await api.delete(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw new Error('Error al eliminar el producto');
  }
};

// Función para subir una imagen


export { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto };