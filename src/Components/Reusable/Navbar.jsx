import React, { useContext, useState } from "react";
import Register_Complaint from "../../User/Register_Complaint";
import { useNavigate } from "react-router-dom";
import user from "../../context/userContext";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { IoHome } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import { LuFileSearch2 } from "react-icons/lu";

const Navbar = () => {
  const { selected, setSelected } = useContext(user);
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="w-full h-[5rem] bg-orange-800 text-white shadow-md p-3 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1
          className="ml-4 text-2xl md:text-xl sm:text-xl font-semibold cursor-pointer hover:bg-yellow-400 p-2 hover:text-black transition duration-500 ease-in-out hover:rounded-md"
          onClick={() => navigate("/edit")}
        >
          {selected.fullName}
        </h1>
        <div className="lg:mr-4 md:mr-2 flex lg:space-x-5">
          <button
            className="lg:bg-yellow-500 text-black py-2 px-4 md:py-1 md:px-2 rounded-lg md:font-sm hover:bg-yellow-400 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <span className="text-center lg:hidden">
              <span className="flex flex-col items-center">
                <IoHome color="white" size={20} />
                <p className="p-0 text-white text-[0.8rem]">Home</p>
              </span>
            </span>
            <span className="lg:inline hidden ">Home</span>
          </button>

          <button
            className="lg:bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 cursor-pointer"
            onClick={() => {
              setShowRegister(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-center lg:hidden flex flex-col items-center">
              <GrEdit color="white" size={20} />
              <p className="p-0 text-white text-[0.8rem]">Register</p>
            </span>
            <span className="lg:inline hidden ">Register Complaints</span>
          </button>

          <button
            className="lg:bg-yellow-500 text-black py-2 px-4 rounded-lg  hover:bg-yellow-400 cursor-pointer"
            onClick={() => navigate("/complaints")}
          >
            <span className="text-center flex flex-col items-center lg:hidden">
              <LuFileSearch2 color="white" size={20} />
              <p className="p-0 text-white text-[0.8rem]">Complaints</p>
            </span>
            <span className="lg:inline hidden ">Your Complaints</span>
          </button>

          <button
            className="lg:bg-red-600 cursor-pointer text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-red-500"
            onClick={() => {
              setSelected({});
              localStorage.removeItem("user");
              localStorage.setItem("loggedIn", "0");
              toast.success("Logged out successfully.");
              navigate("/");
            }}
          >
            <span className="text-center lg:hidden flex flex-col ">
              <FaSignOutAlt color="white" size={20} />
              <p className="p-0 text-[0.8rem] text-white">Logout</p>
            </span>
            <span className="lg:inline hidden ">Logout</span>
          </button>
        </div>
      </div>

      {showRegister && <Register_Complaint setShowRegister={setShowRegister} />}
    </>
  );
};

export default Navbar;
