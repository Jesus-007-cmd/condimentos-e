import axios from 'axios';

const URL_BASE = 'http://localhost:5500'; // Reemplaza la URL base con la correcta de tu backend

const login = async (correo, contraseña) => {
  try {
    const response = await axios.post(`${URL_BASE}/user/login`, {
      correo: correo,
      contraseña: contraseña,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};

const registrarUsuario = async (jsonCliente) => {
  try {
    const response = await axios.post(`${URL_BASE}/user`, jsonCliente);
    return response;
  } catch (error) {
    throw error;
  }
};

export { login, registrarUsuario };
