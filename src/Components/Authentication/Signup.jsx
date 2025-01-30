import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");
  const [signupData, setSignUpData] = useState({
    fullName: "",
    username: "",
    address: "",
    password: "",
  });

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  let validation = () => {
    if (
      !signupData.fullName ||
      !signupData.password ||
      !signupData.username ||
      !signupData.address
    ) {
      setError("Please fill all the credentials");
      return false;
    } else if (signupData.fullName.length < 4) {
      setError("Your name must be of at least 4 characters. ");
      return false;
    } else if (signupData.username.length < 4) {
      setError("Your username must be of at least 4 characters. ");
      return false;
    } else if (signupData.password.length < 8) {
      setError("Your password should contain at least 8 characters.");
      return false;
    } else {
      return true;
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let valid = validation();
    if (valid) {
      try {
        await axios.post("http://localhost:3031/storedData", {
          fullName: signupData.fullName,
          username: signupData.username,
          password: signupData.password,
          address: signupData.address,
        });

        console.log("Data sent successfully");
      } catch (error) {
        console.log("Error sending data");
      }
    }
  };

  console.log(signupData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <h2 className="text-center text-red-600">{error}</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="fullName"
              value={signupData.fullName}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              name="address"
              value={signupData.address}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              name="username"
              value={signupData.username}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={signupData.password}
              name="password"
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
