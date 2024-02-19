import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserData } from '../Slice/userSlice';
import loginbg from "../public/Images/loginbg.webp"; // Import the background image

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login/validate", {
        username,
        password,
      });

      console.log(response, "loginresponse");

      if (response.data.message === "Login successful") {
        const userRole = response?.data?.data?.userRole;
        dispatch(setUserData(response?.data?.data));
        navigate(`/${userRole}`);
      } else {
        setError(response.data.error || "An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <>
      <section className="vh-100 gradient-custom" 
       style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right'
      }}>
        <div className="container py-4 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card text-white"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#333531",
                  boxShadow: "0px 25px 80px rgba(0, 0, 0, 0.5)",
                  
                }}
              >
                <div className="card-body p-4 text-center">
                  <div className="mb-md-1 mt-md-2 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-4">
                      Please enter your login and password!
                    </p>
                    {error && <p className="text-danger mb-3">{error}</p>}
                    <form onSubmit={handleLogin}>
                      <div className="form-outline form-white mb-2">
                        <input
                          type="text"
                          id="username"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Username
                        </label>
                      </div>
                      <div className="form-outline form-white mb-2">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>
                      <p className="small mb-2 pb-lg-1">
                        <Link className="text-white-50" to="#">
                          Forgot password?
                        </Link>
                      </p>
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
