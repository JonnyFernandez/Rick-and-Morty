import { Link } from "react-router-dom"


const Landing = () => {
    return (
        <>
            <h1>Landing</h1>
            <Link to={'/signup'}>Signup</Link>
        </>
    )
}

export default Landing