import { allChar } from "../../config/char";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllChars } from "../../redux/charSlice";
import a from './AllChar.module.css'
import Search from '../search/Search'



const AllChar = () => {

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
        <div className={a.char}>
            <Search />
            <div className={a.container} >
                <h1 >hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
                <h1>hola mundo</h1>
            </div>
        </div>
    )
}

export default AllChar