import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { doPatchUser } from "../API/UserApi";
import user from "../context/userContext";
import { toast } from "react-toastify";

const Register_Complaint = ({ setShowRegister }) => {
  const { selected, setSelected } = useContext(user);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    complainDate: "",
    complainText: "",
  });

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let validate = () => {
    if (!data.complainDate || !data.complainText) {
      toast.error("Both fields should be filled");
      return false;
    } else {
      return true;
    }
  };

  const updateData = [
    ...(selected.reply || []),
    {
      replyText: "Not yet",
      complainText: data.complainText,
      complainDate: data.complainDate,
      replyDate: "Not yet",
      id: Math.floor(Math.random() * (2841287421 - 37821) + 1) + 37821,
    },
  ];

  let handlePutData = async () => {
    let response = await doPatchUser(selected.id, { reply: updateData });

    if (response.status === 200) {
      toast.success("Your Complaint has been registered.");
      setSelected((prev) => {
        return {
          ...prev,
          reply: updateData,
        };
      });

      setShowRegister(false);
    } else {
      toast.error("Cannot register complaint, try again later.");
    }
  };

  let handleRegister = (e) => {
    e.preventDefault();
    let valid = validate();
    if (valid) {
      handlePutData();
    }
  };

  return (
    <>
      <form>
        <div className="mb-2 pt-24 w-[90%] md:w-[50%] mx-auto bg-amber-100 text-black rounded-lg p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Enter your Complaint</h1>
            <p
              className="text-black hover:bg-red-600 hover:text-white p-2 hover:rounded-full transition-all duration-500 cursor-pointer"
              onClick={() => setShowRegister(false)}
            >
              <ImCross size={18} />
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Complaint Date
            </label>
            <input
              type="date"
              name="complainDate"
              value={data.complainDate}
              onChange={handleInputChange}
              className="w-full border border-gray-700 rounded-md px-3 py-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Complaint Description
            </label>
            <textarea
              rows={3}
              value={data.complainText}
              onChange={handleInputChange}
              placeholder="Place your complaint here..."
              name="complainText"
              className="w-full border border-gray-700 rounded-md px-3 py-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          <p className="italic text-center text-red-600">{errorMessage}</p>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800"
              onClick={() => setShowRegister(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleRegister}
              type="submit"
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
