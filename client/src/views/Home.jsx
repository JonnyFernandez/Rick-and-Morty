import { useChar } from "../context/CharacterContext"




const Home = () => {

    const { allChars, char } = useChar()
    console.log(char);
    return (
        <div>
            <button onClick={() => allChars()}>get</button>
            <div>{
                char.length > 0 ? <div>{
                    char.map((item, index) => {
                        return (

                            <div key={index} className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black">
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })
                }</div> : <div></div>
            }</div>
        </div>
    )
}

export default Home