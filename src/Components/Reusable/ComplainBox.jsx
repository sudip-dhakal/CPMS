import React, { useContext } from "react";
import user from "../../context/userContext";

const ComplainBox = () => {
  const { complaints } = useContext(user);

  console.log(complaints);
  return (
    <>
      {complaints.map((items, index) => (
        <div key={index} className="w-full flex flex-wrap gap-4">
          {items.reply.map((item, idx) => (
            <div
              key={idx}
              className="mr-auto rounded-md p-4 shadow-xl shadow-blue-700 w-[48%] max-w-[400px]"
            >
              <span className="flex justify-between">
                <h1 className="font-semibold pb-4">{item.name}</h1>
                <p>{item.date}</p>
              </span>

              <p className="italic">{item.description}</p>

              <button
                type="button"
                className="w-full mt-4 text-xl hover:bg-blue-500 transition duration-300 bg-blue-700 px-4 py-2 cursor-pointer text-white rounded-md ml-auto"
              >
                Reply
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ComplainBox;
