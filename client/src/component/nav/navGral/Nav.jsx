import React from 'react';

import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";

const Nav = ({ selector }) => {

    let icon = <RiHome4Line size="30" />

    return (
        <nav className="fixed bottom-0 right-0 flex flex-col  md:flex-row bg-transparent md:bg-transparent md:justify-center md:items-center md:mx-auto md:py-4 md:px-6 z-10">


            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"all"} onClick={(e) => selector(e.target.value)} >Home</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"fav"} onClick={(e) => selector(e.target.value)}>Favorites</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"random"} onClick={(e) => selector(e.target.value)}>Random</button>
            <button className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black" value={"myChars"} onClick={(e) => selector(e.target.value)}>MyChars</button>

        </nav >
    );
};

export default Nav;
