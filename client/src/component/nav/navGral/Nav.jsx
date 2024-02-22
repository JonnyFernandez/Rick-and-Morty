import React from 'react';



const Nav = ({ selector }) => {



    return (
        <nav className="fixed bottom-0 right-0 flex flex-col  md:flex-row bg-transparent md:bg-transparent md:justify-center md:items-center md:mx-auto md:py-4 md:px-6 z-10">


            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"all"} onClick={(e) => selector(e.target.value)} >Home</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"paginate"} onClick={(e) => selector(e.target.value)}>Paginate</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"fav"} onClick={(e) => selector(e.target.value)}>Favorites</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"random"} onClick={(e) => selector(e.target.value)}>Random</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"myChars"} onClick={(e) => selector(e.target.value)}>MyChars</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"create"} onClick={(e) => selector(e.target.value)}>Create</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"create"} onClick={(e) => selector(e.target.value)}>Perfil</button>

        </nav >
    );
};

export default Nav;
