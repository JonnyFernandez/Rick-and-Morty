import { createContext, useState, useContext, useEffect } from "react";
import { getChar } from "../config/char";

export const CharContext = createContext({})

export const CharProvider = ({ children }) => {


    const [char, setChar] = useState([])
    const [charSelected, setCharSelected] = useState([])



    const allChars = async () => {
        try {
            const res = await getChar()
            setChar(res.data)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <CharContext.Provider value={{ allChars, char }}>
            {children}
        </CharContext.Provider>
    )
}

export const useChar = () => useContext(CharContext)





