import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import user from "../context/userContext";

const VerticalNavbar = () => {
  const { selected, setSelected } = useContext(user);
  let navigation = useNavigate();
  return (
    <>
      <div className="max-w-[18%] fixed h-screen bg-[#354f52]  text-white ">
        <h1 className="text-left border-b-2 border-red-700 border-solid p-4 font-bold text-xl">
          {`👋 \n ${selected.fullName}  `}
        </h1>
        <ul className="p-4">
          <li
            onClick={() => navigation("/admin/home")}
            className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-pointer"
          >
            Home
          </li>
          <li
            className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-pointer"
            onClick={() => navigation("/complaint")}
          >
            Complaints
          </li>
          <li
            className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-not-allowed"
            onClick={() => navigation("/repliedMessage")}
          >
            Replies
          </li>

          <li
            onClick={() => navigation("/admin/setting")}
            className="text-xl mt-6 bg-red-700 rounded-md px-4 py-2 cursor-not-allowed"
          >
            Settings
          </li>
          <li
            onClick={() => {
              setSelected({});
              localStorage.removeItem("user");
              localStorage.setItem("loggedIn", "0");

              navigation("/");
            }}
            className="text-xl mt-60 bg-red-700 rounded-md px-4 py-2 cursor-pointer"
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default VerticalNavbar;
