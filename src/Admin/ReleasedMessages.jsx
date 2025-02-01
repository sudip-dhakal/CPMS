import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ReleasedMessages = () => {

  return (
    <div className="ml-[18%] p-6 flex flex-col">
      <div className="flex flex-col mb-6">
        <h1 className="font-bold text-2xl">Release Message</h1>
        <textarea
          rows={4}
          cols={30}
          placeholder="Content here"
          className=" mt-2 border border-solid border-black rounded-md p-2"
        />
        <button className="rounded-md bg-blue-700 w-[20%] ml-auto px-4 py-2 mt-4 text-white">
          {" "}
          Release
        </button>
      </div>

      <h1 className="font-bold text-2xl mb-4 text-gray-800">
        Released Messages
      </h1>

      <div className="flex justify-between items-center bg-[#354f52] text-white px-6 py-4 rounded-md mt-4 w-[80%] shadow-md ">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            accusamus!
          </h1>
          <p className="text-sm text-gray-300 text-end mt-2 mr-12">Date here</p>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            className=" cursor-pointer bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition"
          >
            <FaEdit /> Edit
          </button>
          <button
            type="button"
            className=" cursor-pointer bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium  hover:bg-red-700 transition"
          >
            <ImCross /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleasedMessages;
