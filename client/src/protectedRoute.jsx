import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContex"

const ProtectedRoute = () => {

    const { Loading, isAutenticated } = useAuth()


    if (Loading) return <h1> Loading...</h1>

    if (!Loading && !isAutenticated) return <Navigate to={'/login'} replace />

    return (
        <Outlet />
    )
}

export default ProtectedRoute