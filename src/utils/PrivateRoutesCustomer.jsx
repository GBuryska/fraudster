import { Outlet, Navigate } from 'react-router-dom'

import {useAuth} from "./UseAuth.jsx";

const PrivateRoutesCustomer = () => {
    const {user} = useAuth()

    return (user && user.labels.includes('customer')) ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRoutesCustomer