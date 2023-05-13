import React, { useState, useEffect } from "react";
import Signup from './Signup';
import "../css/Login.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]); // Add useState hook

    useEffect(() => {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);

    const handleSignInSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        for (let i = 0; i < userData.length; i++) {
            if (userData[i].email === email && userData[i].password === password) {
                navigate('/');
                // localStorage.clear();
                return;
            }
        }

const alert= "invalid Passowrd or Email "

    };

    return (
        <div>
            <>
                <meta charSet="utf-8" />
                <title>Transparent Login Form UI</title>
                <div className="bg-img">
                    <div className="content">
                        <header>Login</header>
                        <form onSubmit={handleSignInSubmit}>
                            <div className="field">
                                <span className="fa fa-user" />
                                <input type="text" required="" placeholder="Email " name='email' />
                            </div>
                            <div className="field space">
                                <span className="fa fa-lock" />
                                <input
                                    type="password"
                                    className="pass-key"
                                    required=""
                                    placeholder="Password"
                                    name='password'
                                />
                            </div>
                            <div className="pass">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="field">
                                <input type="submit" defaultValue="LOGIN" />
                            </div>
                        </form>
                        <div className="signup">
                            Don't have an account?
                            <Link to="/Signup">Signup Here</Link>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}