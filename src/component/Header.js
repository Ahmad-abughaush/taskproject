import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Header.css";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    id="navbar"
                    className="navbar navbar-expand-lg navbar-light fixed-top"
                    style={{ backgroundColor: "#fefefe" }}
                >
                    <div className="container">
                        <img
                            src="https://i.pinimg.com/564x/3b/9a/ab/3b9aab3626d35e29addc7d1924993814.jpg"
                            style={{ width: 100, height: 50 }}
                            alt="Logo"
                        />
                        <button
                            className="navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                        >
                            <span className="navbar-toggler-icon">b</span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul
                                className="navbar-nav me-auto mb-2 mb-lg-0  "
                                style={{ paddingLeft: 30 }}
                            >

                                <li className="nav-item">
                                    <Link to="/"
                                        className="nav-link"
                                        style={{ fontSize: "larger", color: "black" }}
                                        href="#"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About"
                                        className="nav-link  "
                                        style={{ fontSize: "larger", color: "black" }}
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contactus"
                                        className="nav-link  "
                                        style={{ fontSize: "larger", color: "black" }}
                                        href="#services"
                                    >
                                        Contactus
                                    </Link>
                                </li>
                            </ul>
                            <Link to="./Signup"
                                id="signinbut"
                                className="btn btn-secondary bs-btn-hover-color:rgb(9, 88, 178); "
                                target="_blank"
                                href="./register.html"
                                type="button"
                                style={{
                                    backgroundColor: "black",
                                    borderColor: "black",
                                    textDecoration: "none"
                                }}
                            >
Sign-Up                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}