import React from "react";

const Delete = ({ setOpenDelete, deleteData }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[20%]">
      <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-center w-80 border border-white/40">
        <p className="text-lg font-semibold text-gray-900">
          Are you sure to delete this ?
        </p>
        <div className="mt-6 flex justify-center space-x-10">
          <button
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-black hover:text-white cursor-pointer"
            onClick={() => setOpenDelete(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 hover:bg-red-700 text-white rounded-lg  cursor-pointer bg-blue-700"
            onClick={() => {
              deleteData();
              setOpenDelete(false);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
