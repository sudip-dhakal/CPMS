import React, { useState } from "react";
import Navbar from "../Components/Reusable/Navbar";
import { useNavigate } from "react-router-dom";

const Edit_profile = () => {
  let navigation = useNavigate();
  const [message, setMessage] = useState("");
  const [credentails, setCredentials] = useState({
    fullName: "",
    address: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  let handleEventChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentails,
      [name]: value,
    });
  };

  let validation = () => {
    if (
      !credentails.fullName ||
      !credentails.address ||
      !credentails.password ||
      !credentails.username ||
      !credentails.confirmPassword
    ) {
      setMessage("All the credentials must be filled.");
      return false;
    } else if (
      credentails.username.length < 4 &&
      credentails.password.length < 4
    ) {
      setMessage(
        "Username and Password's length must be at least 4 characters."
      );
      return false;
    } else if (password !== confirmPassword) {
      setMessage("Password and confirm password must be same");
      return false;
    } else {
      return true;
    }
  };


  let handleChange=async()=>{
    let valid=validation();
    if(valid){
      await axios.patch('')
    }
  }

  console.log(credentails);

  return (
    <>
      <Navbar />
      <div className="bg-[#F8F9FA] min-h-screen flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Edit Your Profile
          </h1>
          <p className="text-red-700">{message}</p>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Username</label>
              <input
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="username"
                value={credentails.username}
                onChange={handleEventChange}
                placeholder="Enter Username"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Full Name</label>
              <input
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="fullName"
                value={credentails.fullName}
                onChange={handleEventChange}
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Address</label>
              <input
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="address"
                value={credentails.address}
                onChange={handleEventChange}
                placeholder="Enter Address"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Password</label>
              <input
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                value={credentails.password}
                onChange={handleEventChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Confirm Password</label>
              <input
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Enter Confirm Password"
                value={credentails.confirmPassword}
                onChange={handleEventChange}
              />
            </div>
            <div className="flex space-x-10 justify-between">
              <button
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 ease-in-out cursor-pointer"
                onClick={() => navigation("/")}
              >
                Cancel
              </button>

              <button
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold  hover:bg-blue-700 transition duration-200 ease-in-out cursor-pointer"
                onClick={handleChange}
              >
                Change Credentials
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_profile;
