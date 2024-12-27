import React, { useEffect, useState } from "react";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Navbar from "./Navbar";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const navigate = useNavigate();



  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
  
    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://localhost:3001/auth/login",
          formData
        );
        
        const token = response.data.token;
        
        // Store token in localStorage
        localStorage.setItem('auth', JSON.stringify(token));
        
        // Decode token to get the user's role
        const decodedToken = jwtDecode(token); // Use decode function
        console.log(decodedToken.role)
        const userRole = decodedToken.role; 
  
        toast.success("Login successful");
  
        alert("Login successful !");
        if (email === 'admin@gmail.com') {
          navigate("/DashAdmin");
        
        } else {
          navigate("/dashboard");
        }
  
      } catch (err) {
        console.log(err);
        toast.error(err.message);
        alert("errrreur !");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if(token !== ""){
      toast.success("You already logged in");
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <Navbar/>
    <div className="login-main">
     
      <div className="login-right">
        <div className="login-right-container">
        
          <div className="login-center">
            <h2>Welcome !</h2>
         
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" name="email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="submit">
              
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/Signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;