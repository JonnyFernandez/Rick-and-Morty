import axios from "./axios";

export const registerRequest = async (user) => {

    try {
        const res = await axios.post('/auth/register', user)
        return res.data
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
}

export const loginRequest = async (user) => {
    try {
        const res = await axios.post(`/auth/login`, user);
        return res;
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
};




export const verifyTokenRequest = () => axios.get('/auth/verify')
// export const registerRequest = (user) => axios.post('/auth/register', user)