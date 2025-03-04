import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import VerticalNavbar from "./VerticalNavbar";
import admin from "../context/adminContext";


const Feedbacks = () => {
const {adminData}=useContext(admin)
console.log(adminData)

  return (
    <div>
      <VerticalNavbar />

      <div className="max-w-2xl mx-auto p-6 font-sans">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-6 text-center border-b-4 border-blue-400 pb-2">
          Feedback for Title
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-lg">{<RxAvatar size={25} />}</span>
              <strong className="text-gray-700 font-semibold">User Name</strong>
            </div>
            <p className="text-gray-600">User feedback goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
