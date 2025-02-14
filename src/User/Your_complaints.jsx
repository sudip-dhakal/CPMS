import React, { useContext, useState } from "react";
import Navbar from "../Components/Reusable/Navbar";
import user from "../context/userContext";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { doPatchUser } from "../API/UserApi";

const Your_complaints = () => {
  const { selected, setSelected } = useContext(user);
  const [feedbackId, setfeedbackId] = useState(null);
  console.log(selected);

  let editHandler = (item) => {
    console.log(item);
  };

  let prepareForDelete = async (id) => {
    console.log(id);
    let deleteData = selected.reply.filter((u) => u.id !== id);
    let response = await doPatchUser(selected.id, { reply: deleteData });
    if (response.status === 200) {
      console.log("Deletion successful");
      setSelected((prev) => {
        return {
          ...prev,
          reply: deleteData,
        };
      });
    } else {
      console.log("Delete not successful");
    }
  };

  let deleteHandler = async (id) => {
    prepareForDelete(id);
  };

  let seeFeedback = (item) => {
    setfeedbackId(feedbackId === item ? null : item);
  };

  console.log(selected);

  return (
    <>
      <Navbar />
      <div className="pt-20 px-10">
        <h2 className="text-2xl font-semibold text-center my-4">
          Your Complaints
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">S.N</th>
                <th className="p-3">Date</th>
                <th className="p-3">Complaint</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!selected ? (
                <div>Loading...</div>
              ) : !selected.reply ? (
                <div>Loading data...</div>
              ) : selected.reply.length === 0 ? (
                <div>No data available</div>
              ) : (
                selected.reply.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b odd:bg-gray-100 even:bg-blue-50"
                  >
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">{item.complainDate}</td>
                    <td className="text-left p-3">
                      <div>
                        <p>{item.complainText}</p>
                        {feedbackId === item.id && (
                          <p className="italic  bg-green-700 text-white p-1 mt-2 rounded-md">
                            {" "}
                            Reply: {item.replyText}{" "}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="text-center p-3 flex justify-center gap-3">
                      <button
                        className="text-blue-600 hover:text-white  hover:bg-amber-950 hover:rounded-full p-2 cursor-pointer"
                        onClick={() => editHandler(item)}
                        title="Edit Complaints"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:rounded-full  p-2 cursor-pointer hover:bg-amber-950 hover:text-white"
                        onClick={() => deleteHandler(item.id)}
                        title="Delete this row"
                      >
                        <FaTrash />
                      </button>
                      <button
                        className="text-red-699 hover:rounded-full p-2 hover:bg-amber-950 hover:text-white cursor-pointer "
                        onClick={() => seeFeedback(item.id)}
                        title="Reply from admin"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Your_complaints;
