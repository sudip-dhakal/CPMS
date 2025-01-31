import React, { useContext, useState } from "react";
import Navbar from "../Components/Reusable/Navbar";
import user from "../context/userContext";

const Your_complaints = () => {
  const { complaints } = useContext(user);
  const [complainData, setComplainData] = useState(complaints);

  console.log(complainData[0].reply[0].complainText);

  return (
    <>
      <Navbar />
      <div className="mt-6 ml-19 mr-19 bg-white text-black">
        <table className="">
          <thead className="border-b-1 border-solid border-gray-600 p-4">
            <tr className="p-2">
              <th className="p-4">S.N</th>
              <th className="p-4">Date</th>
              <th className="p-4">Complaint</th>
            </tr>
          </thead>
          <tbody>
            {complainData.map((item, index) => {
              return item.reply.map((ComplainItem, complainIndex) => {
                return (
                  <tr className="border-b border-dashed border-gray-700">
                    <td className="text-center p-3">{complainIndex + 1}</td>
                    <td className="text-center p-3">{ComplainItem.complainDate}</td>
                    <td className="text-left p-3">{ComplainItem.complainText}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Your_complaints;
