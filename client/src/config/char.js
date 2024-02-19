import axios from './axios'


export const getChar = async () => {
    try {
        const res = await axios('/char')
        return res
    } catch (error) {
        console.log(error);
    }
}

export const allChar = async () => {
    try {
        const res = await axios('/char')
        return res.data
    } catch (error) {
        console.log(error);
    }

}