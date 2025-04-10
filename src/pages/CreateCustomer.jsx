import React, { useRef } from 'react'
import {useAuth} from "../utils/UseAuth.jsx";
import Navbar from "../components/Navbar.jsx";

const CreateCustomer = () => {
    const {registerUser} = useAuth()

    const registerForm = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = registerForm.current.email.value
        const password = registerForm.current.password.value
        const name = registerForm.current.name.value

        const userInfo = {email, password, name}

        registerUser(userInfo)
    }

    return (
        <div className="login">
            <Navbar className="navbar" />
            <div className="page">
                <form onSubmit={handleSubmit} ref={registerForm} className={"login-form"}>
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
                            type="text"
                            name="password"
                            placeholder="Enter your password..."
                        />
                    </div>
                    <div className={"login-fields"}>
                        <label>Name:</label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Enter your name..."
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
        </div>
    )
}

export default CreateCustomer;