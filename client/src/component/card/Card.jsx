import { RiHeartLine, RiPencilLine, RiDeleteBinLine, RiHeartFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/charSlice';
import styles from './Card.module.css'; // Cambié la importación para usar estilos con módulos CSS

const Card = ({ id, name, status, species, gender, origin, image, code, user }) => {
    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.char.fav);
    const isFavorite = myFavorites.some(item => item.id === id);
    console.log(user);

    const handleFavorite = () => {
        const storedFav = JSON.parse(localStorage.getItem('fav')) || [];
        if (isFavorite) {
            dispatch(removeFromFavorites(id));
        } else {
            dispatch(addToFavorites({ id, name, status, species, gender, origin, image, code, user }));
        };

        const updatedFav = isFavorite
            ? storedFav.filter(item => item.id !== id)
            : [...storedFav, { id, name, status, species, gender, origin, image, code, user }];

        localStorage.setItem('fav', JSON.stringify(updatedFav));
    };


    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-auto hover:scale-105 transition duration-300" src={image} alt={name} />
            <div className="p-4">
                <div className="font-bold text-sm mb-2 text-black">{name}</div>
                <div className="flex justify-center">
                    {/* Botón de favoritos */}
                    <button onClick={handleFavorite} className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center ${styles.favoriteButton}`}>
                        {
                            isFavorite ?
                                <RiHeartFill className="text-red-500 w-4 h-4 mr-2" /> :
                                <RiHeartLine className="w-4 h-4 mr-2" />
                        }

                    </button>

                    {
                        user ? <div><button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                            <RiPencilLine className="w-4 h-4 mr-2 ml-2" />
                        </button>

                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                <RiDeleteBinLine className="w-4 h-4 mr-2" />
                            </button></div> : ''
                    }

                </div>
            </div>
        </div>
    );
};

export default Card;
