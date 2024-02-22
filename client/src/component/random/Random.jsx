import { allChar } from "../../config/char";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllChars } from "../../redux/charSlice";
import r from './Random.module.css'

const Random_Chars = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await allChar();
                dispatch(getAllChars(userData));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    const chars = useSelector(state => state.char.allchars)


    return (
        <div className={r.char}>

            <div className={r.container} >
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
                <h1>hola Random</h1>
            </div>
        </div>
    )
}

export default Random_Chars