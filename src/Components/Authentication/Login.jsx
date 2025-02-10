import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../context/userContext";

const Login = () => {
  let navigation = useNavigate();
  const { complaints, selected } = useContext(user);
  const [errorMessage, setErrorMessage] = useState("");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: null,
  });

  console.log(selected);

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessage("");
  };

  let setUpForLogin = (role) => {
    role == "user"
      ? navigation("/home")
      : role == "admin"
      ? navigation("/admin/home")
      : console.log("No role identified for this credential");
  };

  let validation = () => {
    if (!loginData.username || !loginData.password) {
      setErrorMessage("All credentials must be filled ! ");
      return false;
    } else if (loginData.username.length < 4) {
      setErrorMessage("Username length must be of 4 characters. ");
      return false;
    } else if (loginData.password.length < 8) {
      setErrorMessage("Password length must be at least 8 characters.");
      return false;
    } else if (!loginData.role) {
      setErrorMessage("Select role");
      return false;
    } else {
      return true;
    }
  };

  let handleLogin = () => {
    let user = complaints.find((u) => {
      return (
        u.username === loginData.username &&
        u.password === loginData.password &&
        u.role === loginData.role
      );
    });
    if (user) {
      let loginData = JSON.stringify(user);
      localStorage.setItem("user", loginData);
      localStorage.setItem("loggedIn", "1");
    } else {
      setErrorMessage("Invalid username or password");
    }

    setUpForLogin(user.role);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let valid = validation();
    if (valid) {
      handleLogin();
    }
  };

  // console.log(loginData.username, loginData.password, loginData.role);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Complaint Management System
          </h1>
          <p className="text-lg text-center">
            Register your complaints to the local authority.
          </p>
          <p className="text-lg text-center">BE SAFE AND BE HAPPY !!!</p>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
            Login
          </h2>
          <p className="text-center font-bold text-red-600 ">{errorMessage}</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Role
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={loginData.role === "user"}
                    onChange={handleInputChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">User</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={loginData.role === "admin"}
                    onChange={handleInputChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Admin</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
