import c from './Card.module.css'
import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine, RiHeartLine, RiPencilLine, RiDeleteBinLine, RiDeleteBin2Fill } from "react-icons/ri";


const Card = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-auto hover:scale-105 transition duration-300" src={props.image} alt={props.name} />

            <div className="p-4">
                <div className="font-bold text-sm mb-2 text-black">{props.name}</div>
                <div className="flex justify-center">


                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <RiHeartLine className="w-4 h-4 mr-2" />
                    </button>

                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <RiPencilLine className="w-4 h-4 mr-2 ml-2" />
                    </button>


                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <RiDeleteBinLine className="w-4 h-4 mr-2" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Card;