import React, { useContext, useState } from "react";
import Navbar from "../Components/Reusable/Navbar";
import { useNavigate } from "react-router-dom";
import user from "../context/userContext";
import { doPatchUser } from "../API/UserApi";
import { toast } from "react-toastify";

const Edit_profile = () => {
  const { selected, setSelected } = useContext(user);
  let navigation = useNavigate();
  const [message, setMessage] = useState("");
  const [credentails, setCredentials] = useState({
    fullName: selected.fullName,
    address: selected.address,
    password: "",
    username: selected.username,
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
      !credentails.confirmPassword ||
      !credentails.address
    ) {
      toast.error("All the field must be filled");
      return false;
    } else if (credentails.password !== credentails.confirmPassword) {
     toast.error("The password and confirm password didn't match");
      return false;
    } else {
      setMessage("");
      return true;
    }
  };

  let updateData = {
    fullName: credentails.fullName,
    address: credentails.address,
    username: credentails.username,
    password: credentails.password,
  };

  let updateProfile = async () => {
    let response = await doPatchUser(selected.id, updateData);

    if (response.status === 200) {
      toast.error("Data sent successfully");
      setSelected((prev) => {
        return {
          ...prev,
          updateData,
        };
      });
      navigation("/home");
    } else {
      console.log("Data cannot be sent");
    }
  };

  console.log(selected);

  let handleChange = (e) => {
    e.preventDefault();
    let valid = validation();
    if (valid) {
      updateProfile();
    }
  };

  console.log(credentails);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6 pt-24">
        <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Edit Your Profile
          </h1>
          {message && (
            <p className="text-red-600 text-center mb-4">{message}</p>
          )}
          <div className="space-y-5">
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2 space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  Username
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  type="text"
                  name="username"
                  value={credentails.username}
                  onChange={(e) => {
                    handleEventChange(e);
                    setMessage("");
                  }}
                  placeholder="Enter Username"
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  type="text"
                  name="fullName"
                  value={credentails.fullName}
                  onChange={(e) => {
                    handleEventChange(e);
                    setMessage("");
                  }}
                  placeholder="Enter Full Name"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2 space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  Address
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  type="text"
                  name="address"
                  value={credentails.address}
                  onChange={(e) => {
                    handleEventChange(e);
                    setMessage("");
                  }}
                  placeholder="Enter Address"
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  Password
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  type="password"
                  name="password"
                  value={credentails.password}
                  onChange={(e) => {
                    handleEventChange(e);
                    setMessage("");
                  }}
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                type="password"
                name="confirmPassword"
                value={credentails.confirmPassword}
                onChange={(e) => {
                  handleEventChange(e);
                  setMessage("");
                }}
                placeholder="Enter Confirm Password"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-6 py-3 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition duration-200 ease-in-out"
                onClick={() => navigation("/")}
              >
                Cancel
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
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
