import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import admin from "../context/adminContext";
import axios from "axios";

const ReleasedMessages = () => {
  const { adminData, setAdminData } = useContext(admin);
  const [release, setRelease] = useState({
    releaseDate: "",
    releaseNoteTitle: "",
    releaseNoteDescription: "",
  });

  let callChangeHandler = (e) => {
    const { name, value } = e.target;
    setRelease((prev) => ({ ...prev, [name]: value }));
  };
  console.log(release);

  let releaseHandler = async () => {
    await axios
      .post("http://localhost:3031/adminReleases", {
        id: Math.floor(Math.random() * (877585789 - 2178098)) + 2178098,
        releaseNoteTitle: release.releaseNoteTitle,
        releaseNoteDescription: release.releaseNoteDescription,
        releaseDate: release.releaseDate,
      })
      .then((res) => {
        console.log("Data sent successfully");
      })
      .catch((e) => {
        console.log("Error sending data");
      });
  };

  let deleteHandler = (index) => {
    let idToDelete = adminData[index].id;
    console.log(idToDelete)
  };
  let editHandler = (index) => {};
  

  return (
    <div className="ml-[18%] p-6 flex flex-col">
      <div className="flex flex-col mb-6">
        <h1 className="font-bold text-2xl">Release Message</h1>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              name="releaseNoteTitle"
              value={release.releaseNoteTitle}
              onChange={callChangeHandler}
              className="mt-2 border border-solid border-black rounded-md p-2 w-full"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="releaseDate"
              value={release.releaseDate}
              onChange={callChangeHandler}
              className="mt-2 border border-solid border-black rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            rows={4}
            cols={30}
            placeholder="Content here"
            name="releaseNoteDescription"
            value={release.releaseNoteDescription}
            onChange={callChangeHandler}
            className="mt-2 border border-solid border-black rounded-md p-2 w-full"
          />
        </div>

        <button
          onClick={releaseHandler}
          className="rounded-md bg-blue-700 hover:bg-blue-500 cursor-pointer w-[20%] ml-auto px-4 py-2 mt-4 text-white transition-all duration-200"
        >
          Release
        </button>
      </div>

      <h1 className="font-bold text-2xl mb-4 text-gray-800">
        Released Messages
      </h1>

      {!adminData || adminData.length === 0 ? (
        <div>No data found</div>
      ) : (
        adminData.map((Item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#354f52] text-white px-6 py-4 rounded-md mt-4 w-[80%] shadow-md"
          >
            <div className="flex-1">
              <h1 className="text-lg font-semibold">{Item.releaseNoteTitle}</h1>
              <p className="italic text-center mt-2 w-[90%]">
                {Item.releaseNoteDescription}
              </p>
              <p className="text-sm text-gray-300 text-end mt-2 mr-12 ">
                {Item.releaseDate}
              </p>
            </div>

            <div className="flex space-x-4 flex-col gap-10">
              <button
                type="button"
                onClick={(index) => {
                  editHandler(index);
                }}
                className="cursor-pointer bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition"
              >
                <FaEdit /> Edit
              </button>
              <button
                type="button"
                onClick={(index) => {
                  deleteHandler(index);
                }}
                className="cursor-pointer bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
              >
                <ImCross /> Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReleasedMessages;
