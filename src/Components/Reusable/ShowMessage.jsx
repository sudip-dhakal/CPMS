import React from "react";

const ShowMessage = () => {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-xl font-semibold mb-4">Important Message</h2>

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowMessage;
