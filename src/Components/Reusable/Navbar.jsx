import React, { useState } from "react";
import Register_Complaint from "../../User/Register_Complaint";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigation = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-full h-[5rem] text-xl bg-orange-800 text-white p-3 flex justify-between items-center">
        <h1 className="ml-4"> CMPS</h1>
        <div className="mr-4 flex space-x-10">
          <button
            className="cursor-pointer bg-[#fb8500] text-black py-2 px-4 rounded-md"
            onClick={() => setShowModal(true)}
          >
            Register Complaint
          </button>
          <button
            className="cursor-pointer bg-[#fb8500] text-black py-2 px-4 rounded-md"
            onClick={() => navigation("/complaints")}
          >
            Your Complaints
          </button>
          <button
            className="cursor-pointer bg-[#fb8500] text-black py-2 px-4 rounded-md"
            onClick={() => navigation("/edit")}
          >
            Edit Profile
          </button>
          <button className="cursor-pointer bg-[#fb8500] text-black py-2 px-4 rounded-md">Logout</button>
        </div>
      </div>
      {showModal && <Register_Complaint setShowModal={setShowModal} />}
    </>
  );
};

export default Navbar;
