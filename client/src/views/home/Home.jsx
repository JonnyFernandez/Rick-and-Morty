import NavUp from "../../component/nav/navUp/NavUp";
import { allChar } from "../../config/char";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllChars } from "../../redux/charSlice";

import h from './Home.module.css'


const Home = () => {

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
    // console.log(chars);


    return (
        <div className="home">
            <NavUp />
            <div className={h.body}>
                <div>
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                    hola munod
                </div>
            </div>
        </div>
    )
}

export default Home