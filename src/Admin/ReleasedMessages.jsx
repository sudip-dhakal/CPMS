import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import admin from "../context/adminContext";
import { VscFeedback } from "react-icons/vsc";
import { doDeleteAdmin, doPostAdmin, doUpdateAdmin } from "../API/AdminAPI";

const ReleasedMessages = () => {
  const { adminData, setAdminData } = useContext(admin);
  const [message, setMessage] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [release, setRelease] = useState({
    releaseDate: "",
    releaseNoteTitle: "",
    releaseNoteDescription: "",
  });

  let validation = () => {
    if (
      !release.releaseDate ||
      !release.releaseNoteDescription ||
      !release.releaseNoteTitle
    ) {
      setMessage("All the fields must be filled !");
      return false;
    } else {
      return true;
    }
  };

  let callChangeHandler = (e) => {
    const { name, value } = e.target;
    setRelease((prev) => ({ ...prev, [name]: value }));
  };
  console.log(release);

  let prepareForRelease = async () => {
    let response = await doPostAdmin(release);
    console.log(response);
    if (response.status === 201) {
      setAdminData((prev) => {
        return [...prev, release];
      });
      console.log("Data sent successfully");
      setMessage("");
      setRelease({
        releaseDate: "",
        releaseNoteTitle: "",
        releaseNoteDescription: "",
      });
    } else {
      console.log("Data sent failure");
    }
  };

  let handleRelease = (e) => {
    e.preventDefault();
    let valid = validation();
    if (valid) {
      prepareForRelease();
    }
  };

  let deleteHandler = async (id) => {
    console.log(id);
    let newData = adminData.filter((item) => item.id !== id);
    let res = await doDeleteAdmin(id);

    if (res.status == 200) {
      console.log("Deletion successful");
      setAdminData(newData);
    } else {
      console.log("Deletion error");
    }
  };

  let handleClear = () => {
    setRelease({
      releaseDate: "",
      releaseNoteTitle: "",
      releaseNoteDescription: "",
    });
    setEdit(false);
  };

  let prepareForEdit = (item) => {
    setEdit(true);
    setId(item.id);
    setRelease({
      releaseDate: item.releaseDate,
      releaseNoteTitle: item.releaseNoteTitle,
      releaseNoteDescription: item.releaseNoteDescription,
    });
  };

  console.log(id);

  let editNew = async () => {
    let response = await doUpdateAdmin(id, release);
    if (response.status === 200) {
      console.log("Edition successful");
      handleClear();
      setEdit(false);
    } else {
      console.log("Edition Failure");
    }
  };

  return (
    <div className="ml-[18%] p-6 flex flex-col">
      <div className="flex flex-col mb-6">
        {edit ? (
          <h1 className="font-bold text-2xl"> Update released message</h1>
        ) : (
          <h1 className="font-bold text-2xl">Release Message</h1>
        )}

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
        <div className="flex">
          <button
            type="button"
            onClick={handleClear}
            className="rounded-md bg-red-700 hover:bg-red-500 cursor-pointer   px-4 py-2 w-[20%] mt-4  text-white transition-all duration-200"
          >
            Clear
          </button>

          {!edit ? (
            <button
              type="submit"
              onClick={handleRelease}
              className="rounded-md bg-blue-700 hover:bg-blue-500 cursor-pointer w-[20%] ml-auto px-4 py-2 mt-4 text-white transition-all duration-200"
            >
              Release
            </button>
          ) : (
            <button
              type="submit"
              onClick={editNew}
              className="rounded-md bg-blue-700 hover:bg-blue-500 cursor-pointer w-[20%] ml-auto px-4 py-2 mt-4 text-white transition-all duration-200"
            >
              Update
            </button>
          )}
        </div>
      </div>

      <h1 className="font-bold text-2xl mb-2 mt-8 text-gray-800">
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

            <div className="flex space-x-4 flex-col gap-5">
              <button
                type="button"
                className="cursor-pointer bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition"
                onClick={() => prepareForEdit(Item)}
              >
                <FaEdit /> Edit
              </button>
              <button
                type="button"
                onClick={() => deleteHandler(Item.id)}
                className="cursor-pointer bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
              >
                <ImCross /> Delete
              </button>

              <button
                type="button"
                className="cursor-pointer bg-purple-700 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
              >
                <VscFeedback /> Feedbacks
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReleasedMessages;
