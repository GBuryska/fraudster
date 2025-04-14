import {useAuth} from "./UseAuth.jsx";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutesBank = () => {
    const {user, userRole} = useAuth()

    console.log(user);
    console.log(userRole);

    return (user && userRole === 'manager') ? <Outlet /> : <Navigate to="/login"/>;
}

export default PrivateRoutesBank;