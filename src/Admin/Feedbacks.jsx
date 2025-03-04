import React, { useContext, useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import VerticalNavbar from "./VerticalNavbar";
import admin from "../context/adminContext";
import { useLocation } from "react-router-dom";

const Feedbacks = () => {
  let location = useLocation();
  const { adminData } = useContext(admin);
  let { id } = location.state || {};
  const [data, setData] = useState({});

  useEffect(() => {
    if (adminData && id) {
      const foundItem = adminData.find((item) => item.id === id);
      setData(foundItem || {});
    }
  }, [adminData, id]);

  console.log(data);

  return (
    <div>
      <VerticalNavbar />

      <div className="max-w-2xl mx-auto p-6 font-sans">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-6 text-center border-b-4 border-blue-400 pb-2">
          {data.releaseNoteTitle}
        </h2>
        <div className="space-y-4">
          <div className="bg-white">
            <div className="font-semibold text-gray-800 italic mb-6">
              <p>{data.releaseNoteDescription}</p>
            </div>
            <p className="block font-semibold text-xl border-b-2 border-solid border-black">
              Feedbacks
            </p>

            {data?.feedback?.map((item, index) => {
              console.log(item);
              return (
                <div key={index} className=" rounded-lg   mb-5">
                  <div className="flex items-center space-x-3 mb-3 mt-3">
                    <span className="text-lg">{<RxAvatar size={25} />}</span>
                    <strong className="text-gray-700 font-semibold">
                      {item.UserName}
                    </strong>
                  </div>
                  <p className="text-gray-600 italic ml-8">
                    {item.feedbackText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
