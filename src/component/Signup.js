import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const newUser = { name, email, password };
    const updatedUserData = [...userData, newUser];
    setUserData(updatedUserData);

    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    navigate('/');
    console.log(name, email, password);
  };

  return (
    <>
      <meta charSet="utf-8" />
      <title>Transparent Login Form UI</title>
      <form onSubmit={handleSignUpSubmit}>
        <div className="bg-img">
          <div className="content">
            <header>Sign up</header>
            <div className="field">
              <span className="fa fa-user" />
              <input type="text" required="" placeholder=" username" name="name" />
            </div>
            <br />

            <div className="field">
              <span className="fa fa-envelope" />
              <input type="email" required="" placeholder="Email" name="email" />
            </div>

            <div className="field space">
              <span className="fa fa-lock" />
              <input
                type="password"
                className="pass-key"
                required=""
                placeholder="Password"
                name="password"
              />
            </div>

            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="field">
              <input type="submit" defaultValue="LOGIN" />
            </div>
            <br />
            <div className="signup">
              Do you have an account? &nbsp;
              <div>
                <Link to="/Login">log in here</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}