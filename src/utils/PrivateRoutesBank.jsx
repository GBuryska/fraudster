import {useAuth} from "./UseAuth.jsx";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutesBank = () => {
    const {user} = useAuth()

    return (user && user.labels.includes('bank')) ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRoutesBank;