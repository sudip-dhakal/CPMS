import React from "react";
import { useNavigate } from "react-router-dom";

const VerticalNavbar = () => {
  let navigation = useNavigate();
  return (
    <>
      <div className="max-w-[18%] fixed h-screen bg-[#354f52]  text-white ">
        <h1 className="text-left border-b-2 border-red-700 border-solid p-4 font-bold text-xl">
          Hi there
        </h1>
        <ul className="p-4">
          <li
            className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-pointer"
            onClick={() => navigation("admin/complaints")}
          >
            Complaints
          </li>
          <li className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-pointer">
            Release Message
          </li>
          <li
            onClick={() => navigation("/admin/setting")}
            className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-pointer"
          >
            Settings
          </li>
          <li className="text-xl mt-60 bg-red-700 rounded-md px-4 py-2 cursor-pointer">
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default VerticalNavbar;
