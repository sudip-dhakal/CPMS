import React, { useContext } from "react";
import user from "../../context/userContext";

const Notes = () => {
  const { complaints } = useContext(user);
  console.log(complaints);
  return (
    <>
      <div className="flex text-black   rounded-md">
        <div className="  px-4 py-2 rounded-md w-[80%] mt-6 ml-19 bg-[#354f52] text-white  ">
          <div className="">
            <p className="text-[2rem] text-start">Note here</p>
            <p className="text-end">Date here</p>
          </div>
        </div>

        {/* <button className="bg-red-800 text-white ">Give Feedback</button> */}
      </div>
    </>
  );
};

export default Notes;
