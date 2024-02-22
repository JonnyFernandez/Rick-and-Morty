import NavUp from "../../component/nav/navUp/NavUp";
import h from './Home.module.css'
import { AllChar, All_Fav, CreateChar, MyChars, Paginate, Random_Chars } from "../../component";
import { useEffect, useState } from "react";
import Nav from '../../component/nav/navGral/Nav'


const Home = () => {

    const [showAll, setShowAll] = useState(false)
    const [showMyChars, setShowMyChars] = useState(false)
    const [showPaginate, setShowPaginate] = useState(false)
    const [showRamdon, setShowRandom] = useState(false)
    const [showFavs, setShowFavs] = useState(false)
    const [showCreate, setShowCreate] = useState(false)

    useEffect(() => {
        setShowAll(true)
    }, [])

    const selector = (selected) => {
        switch (selected) {
            case "all":
                setShowAll(true);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(false);
                setShowFavs(false);
                setShowCreate(false);
                break;
            case "fav":
                setShowAll(false);
                setShowFavs(true);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(false);
                setShowCreate(false);
                break;
            case "random":
                setShowAll(false);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(true);
                setShowFavs(false);
                setShowCreate(false);
                break;
            case "myChars":
                setShowAll(false);
                setShowMyChars(true);
                setShowPaginate(false);
                setShowRandom(false);
                setShowFavs(false);
                setShowCreate(false);
                break;
            case "create":
                setShowAll(false);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(false);
                setShowFavs(false);
                setShowCreate(true);
                break;
            default:
                break;
        }
    }





    return (
        <div className="home">
            <NavUp />
            <Nav selector={selector} />
            <div className={h.body}>
                <div className={h.container}>
                    <div className={h.divRight}>
                        {showAll && <AllChar />}
                        {showFavs && <All_Fav />}
                        {showMyChars && <MyChars />}
                        {showPaginate && <Paginate />}
                        {showRamdon && <Random_Chars />}
                        {showCreate && <CreateChar />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home