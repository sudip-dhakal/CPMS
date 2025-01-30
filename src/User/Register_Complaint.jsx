import React from "react";
import { ImCross } from "react-icons/im";

const Register_Complaint = ({ setShowModal }) => {
  return (
    <>
      <form>
        <div className="mb-10 mt-6 max-h-[10rem] w-[50%] mx-auto bg-amber-600 text-black rounded-md px-4 py-2 flex justify-between items-center space-x-2">
          <h1 className="font-bold text-xl">Enter your Complaint here. </h1>
          <textarea
            rows={1}
            cols={20}
            placeholder="Place your complaint here. "
            className="border-2 border-solid border-gray-700 mt-2 rounded-md p-3 placeholder:text-black text-md"
          ></textarea>
          <button
            type="submit"
            className="bg-red-800 text-white text-xl px-4 py-2 rounded-md"
          >
            Register
          </button>
          <ImCross
            size={15}
            color="black"
            className="relative bottom-[20px] cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>
      </form>
    </>
  );
};

export default Register_Complaint;
