import React, { useContext, useState } from "react";
import admin from "../../context/adminContext";
import ReleaseNoteDescription from "../../User/ReleaseNoteDescription";

const Notes = () => {
  const { adminData } = useContext(admin);
  const [description, setDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6">
      {!adminData || adminData.length === 0 ? (
        <div className="px-6 py-4 bg-gray-800 text-white text-center rounded-md shadow-md">
          <p className="italic text-lg ">No releases made by admin yet.</p>
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          {adminData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setDescription(item);
                setShowDescription(true);
              }}
              className="bg-[#2C3E50] min-h-full hover:bg-amber-900 transition-all duration-300 ease-in-out cursor-pointer text-white p-5 mb-4 rounded-lg shadow-lg md:text-[0.8rem] sm:text-[0.8rem]"
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">{item.releaseNoteTitle}</p>
                <p className="text-sm opacity-80">{item.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showDescription && (
        <ReleaseNoteDescription
          description={description}
          setShowDescription={setShowDescription}
          adminData={adminData}
        />
      )}
    </div>
  );
};

export default Notes;
