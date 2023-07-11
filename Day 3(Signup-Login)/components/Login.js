import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import { login , selectUser} from '../Features/userSlice';
import { redirect } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Successfully Logged in with " + email);
    dispatch(
      login({
        email: email,
        password: password,
        isLoggedIn: true,
      })
    );
    navigate("/home");
  };

    const css = require("../css/login.css").toString();
  return (
    <div>
      <Helmet>{css}</Helmet>
      <div className="body-container">
        <div className="login-container" style={{ float: "left" }}>
          <h3>Log-in</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
            <br />
              <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
