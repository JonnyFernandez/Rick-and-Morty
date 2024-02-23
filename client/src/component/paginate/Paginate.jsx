import { allChar } from "../../config/char";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllChars } from "../../redux/charSlice";
import p from './Paginate.module.css'

const Paginate = () => {
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
        <div className={p.char}>

            <div className={p.container} >
                {
                    chars && chars.map(item => <h1>paginate:{item.name}</h1>)
                }
            </div>
        </div>
    )
}

export default Paginate