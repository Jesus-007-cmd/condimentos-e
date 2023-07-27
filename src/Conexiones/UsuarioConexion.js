import axios from "axios"

const login = async (correo, contraseña) => {
    try {
        const response = await axios.post(
            'http://localhost:5500/user/login',
            {
                correo: correo,
                contraseña: contraseña
            }
        )
            console.log(response.data)
        return response.data;
    } catch (error) {

        return null;
    }
}
 export  {
    login
}