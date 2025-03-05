import React, { useContext, useState } from "react";
import Register_Complaint from "../../User/Register_Complaint";
import { useNavigate } from "react-router-dom";
import user from "../../context/userContext";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { selected, setSelected } = useContext(user);
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="w-full h-[5rem] bg-gradient-to-r from-orange-700 to-orange-800 text-white shadow-md p-3 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1
          className="ml-4 text-2xl font-semibold cursor-pointer hover:bg-yellow-400 p-2 hover:text-black transition duration-500 ease-in-out hover:rounded-md"
          onClick={() => navigate("/edit")}
        >
          {selected.fullName}
        </h1>
        <div className="mr-4 flex space-x-5">
          <button
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Home
          </button>
          <button
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 cursor-pointer"
            onClick={() => setShowRegister(true)}
          >
            Register Complaint
          </button>
          <button
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 cursor-pointer"
            onClick={() => navigate("/complaints")}
          >
            Your Complaints
          </button>

          <button
            className="bg-red-600 cursor-pointer text-white py-2 px-4 rounded-lg font-medium flex items-center gap-2 hover:bg-red-500"
            onClick={() => {
              setSelected({});
              localStorage.removeItem("user");
              localStorage.setItem("loggedIn", "0");
              toast.success("Logged out successfully.")
              navigate("/");
            }}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {showRegister && <Register_Complaint setShowRegister={setShowRegister} />}
    </>
  );
};

export default Navbar;
