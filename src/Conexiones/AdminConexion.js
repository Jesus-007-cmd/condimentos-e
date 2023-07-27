import axios from "axios"
const loginAdmin = async (correo, password) => {
    try {
        const response = await axios.post(
            'http://localhost:5500/loginAdmin',
            {
                correo: correo,
                password: password
            }
        )
            console.log(response.data)
        return response.data;
    } catch (error) {

        return null;
    }
}
 export  {
    loginAdmin
}