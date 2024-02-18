import axios from './axios'


export const getChar = async () => {
    try {
        const res = await axios('/char')
        return res
    } catch (error) {
        console.log(error);
    }
}