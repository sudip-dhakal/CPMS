import React, { useContext, useState } from "react";
import admin from "../../context/adminContext";
import ReleaseNoteDescription from "../../User/ReleaseNoteDescription";

const Notes = () => {
  const { adminData } = useContext(admin);
  const [showDesc, setShowDesc] = useState(false);
  const [descKey, setDescKey] = useState(null);
  const [keyId, setKeyId] = useState(null);

  const isSet = () => {
    setKeyId(adminData[descKey].id);
  };

  return (
    <>
      {!adminData ? (
        <div className="ml-19">No data available yet. </div>
      ) : (
        adminData.map((item, index) => {
          return (
            <div key={index} className="flex text-black   rounded-md">
              <div
                className="  px-4 py-2 rounded-md w-[80%] mt-6 ml-19 bg-[#354f52] text-white hover:bg-amber-700 cursor-pointer "
                onClick={() => {
                  setDescKey(index);
                  setShowDesc(true);
                }}
              >
                <div className="">
                  <p className="text-[1.5rem] text-start text-white">
                    {item.releaseNoteTitle}
                  </p>
                  <p className="text-end">{item.releaseDate}</p>
                </div>
              </div>
              {showDesc && (
                <ReleaseNoteDescription
                  descKey={descKey}
                  keyId={keyId}
                  adminData={adminData}
                  setShowDesc={setShowDesc}
                />
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default Notes;
