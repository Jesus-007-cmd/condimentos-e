
import './App.css';
import Enrutador from './componentes/Enrutador'
import React, { useState, createContext } from 'react';




export const CarritoContext = createContext();
export const  UserContext= createContext();
export const AuthContext = createContext();

function App() {
  
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    const existente = carrito.find((item) => item.id === producto.id);
    if (existente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const quitarDelCarrito = (producto) => {
    const existente = carrito.find((item) => item.id === producto.id);
    if (existente.cantidad === 1) {
      setCarrito(carrito.filter((item) => item.id !== producto.id));
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };


 
  
  const [usuario, setUsuario] = useState('');
  const [token, setToken] = useState('');  
  const [admin, setAdmin] = useState('');
  const [tokenadmin, setTokenAdmin] = useState('');
  return (
    <AuthContext.Provider value={{ admin, setAdmin, tokenadmin, setTokenAdmin }}>
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}>
<UserContext.Provider value={{usuario, setUsuario, token, setToken }}>    
    <body> 
     
         <Enrutador/>
       
    </body>
    </UserContext.Provider>   
    </CarritoContext.Provider>
    </AuthContext.Provider>
  );
}
export default App;
