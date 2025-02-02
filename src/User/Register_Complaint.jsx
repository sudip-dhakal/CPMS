import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import user from "../context/userContext";
import axios from "axios";

const Register_Complaint = ({ setShowModal }) => {
  const { propagateID, complaints, index } = useContext(user);
  const [complainData, setComplainData] = useState({
    complainText: "",
    complainDate: "",
  });

  let changeEventHandler = (e) => {
    const { name, value } = e.target;
    setComplainData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let handleClear = () => {
    complainData.complainText = "";
    complainData.complainDate = "";
  };

  let newData = {
    replyText: "",
    complainText: complainData.complainText,
    complainDate: complainData.complainDate,
    replyDate: "",
    id: Math.floor(Math.random() * (23342 - 3272 + 1)) + 3272,
  };

  let handleRegister = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3031/storedData/${propagateID}`, {
        ...complaints[index],
        reply: [...complaints[index].reply, newData],
      })
      .then(() => {
        console.log("Data sent successfully");
      })
      .catch((e) => {
        console.log("error sending data");
      });
    handleClear();
  };
  return (
    <>
      <form>
        <div className="mb-10 mt-6 w-[90%] md:w-[50%] mx-auto bg-amber-100 text-black rounded-lg p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Enter your Complaint</h1>
            <ImCross
              size={18}
              color="black"
              className="cursor-pointer hover:text-red-600"
              onClick={() => setShowModal(false)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Complaint Date
            </label>
            <input
              type="date"
              value={complainData.complainDate}
              name="complainDate"
              onChange={changeEventHandler}
              className="w-full border border-gray-700 rounded-md px-3 py-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Complaint Description
            </label>
            <textarea
              rows={3}
              placeholder="Place your complaint here..."
              value={complainData.complainText}
              name="complainText"
              onChange={changeEventHandler}
              className="w-full border border-gray-700 rounded-md px-3 py-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleRegister}
              className="bg-red-800 text-white text-xl px-4 py-2 rounded-md hover:bg-red-900 cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register_Complaint;
