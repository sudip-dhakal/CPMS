import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { doUpdateAdmin } from "../API/AdminAPI";
import user from "../context/userContext";

const ReleaseNoteDescription = ({ description, setShowDescription }) => {
  const { selected } = useContext(user);
  const [desc, setDesc] = useState({});
  const [openClose, setOpenClose] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  console.log(selected);

  useEffect(() => {
    setDesc(description);
  }, [description]);

  let updatedFeedback = [
    ...(desc.feedback || []),
    {
      id: Math.floor(Math.random() * (87214129 - 8271) + 1) + 8271,
      userID: desc.id,
      UserName: selected.fullName,
      feedbackText: feedback,
    },
  ];

  let sendFeedback = async () => {
    let response = await doUpdateAdmin(desc.id, { feedback: updatedFeedback });

    if (response.status === 200) {
      console.log("send successful");
      setOpenClose(false);
    } else {
      console.log("send failure");
    }
    setMessage("Feedback sent !!!");
    setFeedback("");
  };

  let validation = () => {
    if (!feedback) {
      setMessage("Please write some feedback");
      return false;
    } else {
      return true;
    }
  };

  let handleSubmitFeedback = (e) => {
    e.preventDefault();
    let valid = validation();
    if (valid) {
      sendFeedback();
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-10 backdrop-blur-sm tansition-all duration-[2000ms]">
      <div className="bg-white text-black w-[50%] min-h-[40%] p-6 rounded-lg shadow-lg relative">
        <button
          onClick={() => setShowDescription(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ImCross size={18} cursor="pointer" />
        </button>
        <h1 className="font-bold text-black text-2xl mt-6">
          {desc.releaseNoteTitle}
        </h1>
        <p className="italic text-gray-600 mt-3">
          {" "}
          {desc.releaseNoteDescription}{" "}
        </p>

        {!openClose ? (
          <div className="mt-6">
            <button
              className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              onClick={() => {
                setOpenClose(true);
                setMessage("");
              }}
            >
              Give Feedback
            </button>
          </div>
        ) : (
          <div className="flex space-x-6 mt-4">
            <input
              placeholder="Place your feedback here."
              className="border-2 px-2 border-black border-solid placeholder:text-black  rounded-md min-w-[60%]"
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
                setMessage("");
              }}
            />
            <button
              className="text-black bg-amber-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded-md hover:text-white"
              onClick={handleSubmitFeedback}
            >
              Submit
            </button>
          </div>
        )}
        <p className="italic text-center text-red-700">{message}</p>
      </div>
    </div>
  );
};

export default ReleaseNoteDescription;
