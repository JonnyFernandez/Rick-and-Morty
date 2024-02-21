import NavUp from "../../component/nav/navUp/NavUp";
import h from './Home.module.css'
import { AllChar, All_Fav, CreateFav, MyChars, Paginate, Random_Chars } from "../../component";
import { useState } from "react";
import Nav from '../../component/nav/navGral/Nav'


const Home = () => {

    const [showAll, setShowAll] = useState(true)
    const [showMyChars, setShowMyChars] = useState(false)
    const [showPaginate, setShowPaginate] = useState(false)
    const [showRamdon, setShowRandom] = useState(false)
    const [showFavs, setShowFavs] = useState(false)

    const selector = (selected) => {
        switch (selected) {
            case "all":
                setShowAll(true);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(false);
                setShowFavs(false);
                break;
            case "fav":
                setShowAll(false);
                setShowFavs(true);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(false);
                break;
            case "random":
                setShowAll(false);
                setShowMyChars(false);
                setShowPaginate(false);
                setShowRandom(true);
                setShowFavs(false);
                break;
            case "myChars":
                setShowAll(false);
                setShowMyChars(true);
                setShowPaginate(false);
                setShowRandom(false);
                setShowFavs(false);
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
                    <div className={h.divLeft}> div left </div>
                    <div className={h.divRight}>
                        {showAll && <AllChar />}
                        {showFavs && <All_Fav />}
                        {showMyChars && <MyChars />}
                        {showPaginate && <Paginate />}
                        {showRamdon && <Random_Chars />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home