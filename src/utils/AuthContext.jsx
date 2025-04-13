import {createContext, useEffect, useState} from "react";
import {account} from "../appwriteConfig";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        checkUserStatus()
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)

        try{
            await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/transactions')
        }catch(error){
            console.error(error)
        }
        setLoading(false)

    }

    const logoutUser = async () => {
        await account.deleteSession('current');
        setUser(null)
    }

    const registerUser = async (userInfo) => {
        setLoading(true)

        try{

            await account.create(userInfo.customer_id, userInfo.email, userInfo.password, userInfo.name);
            
        }catch(error){
            console.error(error)
        }

        // store new user to user database
        // store user settings to settings database

        setLoading(false)
    }

    const checkUserStatus = async () => {
        try{
            let accountDetails = await account.get();
            setUser(accountDetails)
        }catch(error){
            console.error(error)
        }
        setLoading(false)
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <>Loading...</> : children}
        </AuthContext.Provider>
    )
}

export default AuthContext;