import React, {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../utils/UseAuth.jsx";
import {role} from "../utils/UserActions.js";


const Login = () => {
    const {user, loginUser} = useAuth()
    const navigate = useNavigate()

    const loginForm = useRef(null)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(  () => {
        setIsLoading(true)
        if (user) {
            async function checkLogin() {
                const userRole = await role(user.$id);
                if (userRole === 'customer') {
                    navigate('/transactions')
                } else if (userRole === 'manager') {
                    navigate('/create-customer')
                } else if (userRole === 'bank') {
                    navigate('/admintransactions')
                } else {
                    navigate('/login')
                }
            }
            checkLogin()
        }
        setIsLoading(false)
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const userInfo = {email, password}

        loginUser(userInfo)
    }

    return (
        <>
        {isLoading
            ? <p>Loading...</p>
            : <div className="login">
                <form onSubmit={handleSubmit} ref={loginForm} className={"login-form"}>
                    <div className={"login-fields"}>
                        <label>Email:</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                        />
                    </div>
                    <div className={"login-fields"}>
                        <label>Password:</label>
                        <input
                            required
                            type="password"
                            name="password"
                            placeholder="Enter your password..."
                        />
                    </div>

                    <div className={"login-fields"}>
                        <input
                            type="submit"
                            value="Login"
                            className="login-button"
                        />
                    </div>
                </form>
            </div>
        }
        </>
    )
}

export default Login;