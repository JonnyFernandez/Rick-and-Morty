import { allChar } from "../../config/char";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllChars } from "../../redux/charSlice";
import f from './AllFav.module.css'
import Search from '../search/Search'

const All_Fav = () => {
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
        <div className={f.char}>
            {/* <Search /> */}
            <div className={f.container} >
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
                <h1>hola mundo Favorito</h1>
            </div>
        </div>
    )
}


export default All_Fav