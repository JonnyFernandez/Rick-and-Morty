import { allChar } from "../../config/char";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllChars } from "../../redux/charSlice";
import a from './AllChar.module.css'
import Search from '../search/Search'
import Card from "../card/Card";


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
                {
                    chars && chars.map((item, index) =>
                        <div key={index}>
                            <Card
                                id={item.id}
                                name={item.name}
                                status={item.status}
                                species={item.species}
                                gender={item.gender}
                                origin={item.origin}
                                image={item.image}
                                code={item.id}
                                user={item.user} />
                        </div>)
                }
            </div>
        </div>
    )
}

export default AllChar