import axios from "axios";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const ReleaseNoteDescription = ({ setShowDesc, adminData, keyId, descKey }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [openClose, setOpenClose] = useState(false);

  //   console.log(adminData);
  //   console.log(keyId);

  let validation = () => {
    if (!feedback) {
      setMessage("Please write some feedback");
      return false;
    } else {
      return true;
    }
  };

  let handleSubmitFeedback = async () => {
    let valid = validation();
    if (valid) {
      try {
        await axios.patch(`http://localhost:3031/adminReleases/${keyId}`, {
          feedback: feedback,
        });
        console.log("Data sent successfully");
      } catch (e) {
        console.log("Error sending data", e);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-sm tansition-all duration-[2000ms]">
      <div className="bg-white text-black w-[50%] min-h-[40%] p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setShowDesc(false)}
        >
          <ImCross size={18} cursor="pointer"/>
        </button>

        <h1 className="font-bold text-black text-2xl mt-6">
          {adminData[descKey].releaseNoteTitle}
        </h1>
        <p className="italic text-gray-600 mt-3">
          {adminData[descKey].releaseNoteDescription}
        </p>

        {!openClose && (
          <div className="mt-6">
            <button
              className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              onClick={() => setOpenClose(true)}
            >
              Give Feedback
            </button>
          </div>
        )}

        {openClose && (
          <div className="flex space-x-6 mt-4">
            <input
              placeholder="Place your feedback here."
              className="border-2 px-2 border-black border-solid placeholder:text-black  rounded-md min-w-[60%]"
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
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
        <p className="text-red text-center">{message}</p>
      </div>
    </div>
  );
};

export default ReleaseNoteDescription;
