import React, { useContext, useState } from "react";
import Navbar from "../Components/Reusable/Navbar";
import user from "../context/userContext";
import Delete from "../Components/Reusable/Delete";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { doPatchUser } from "../API/UserApi";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const Your_complaints = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const { selected, setSelected } = useContext(user);
  const [deleteId, setDeleteId] = useState(null);
  const [feedbackId, setfeedbackId] = useState(null);
  const [edit, setEdit] = useState(null);
  const [editData, setEditData] = useState({
    complainText: "",
    complainDate: "",
  });

  console.log(openDelete);

  let handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let validation = () => {
    if (!editData.complainDate || !editData.complainText) {
      toast.error("Date and Complaint must should be filled.");
      return false;
    } else {
      return true;
    }
  };

  let sendUpdatedData = async () => {
    if (!validation()) return;

    let replyToUpdate = selected.reply.map((r) =>
      r.id === edit
        ? {
            ...r,
            complainText: editData.complainText,
            complainDate: editData.complainDate,
          }
        : r
    );

    let response = await doPatchUser(selected.id, { reply: replyToUpdate });

    if (response.status === 200) {
      toast.success("Data Updated Successfully");
      setSelected((prev) => {
        return {
          ...prev,
          reply: replyToUpdate,
        };
      });
      setEdit(null);
    } else {
      toast.error("Data not sent");
    }
  };

  console.log(editData);

  let editHandler = (item) => {
    if (!item.id) return;
    setEdit(item.id);
    setEditData({
      complainDate: item.complainDate || "",
      complainText: item.complainText || "",
    });
    console.log(item);
  };

  let prepareForDelete = async (id) => {
    console.log(id);
    let deleteData = selected.reply.filter((u) => u.id !== id);
    let response = await doPatchUser(selected.id, { reply: deleteData });
    if (response.status === 200) {
      toast.success("Deletion successful");
      setSelected((prev) => {
        return {
          ...prev,
          reply: deleteData,
        };
      });
    } else {
      toast.error("Delete not successful");
    }
  };

  let deleteHandler = async (id) => {
    prepareForDelete(id);
  };

  let seeFeedback = (item) => {
    setfeedbackId(feedbackId === item ? null : item);
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-center my-4">
          Your Complaints
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">S.N</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Date</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Complaint</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!selected ? (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    Loading...
                  </td>
                </tr>
              ) : !selected.reply ? (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    Loading data...
                  </td>
                </tr>
              ) : selected.reply.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No data available
                  </td>
                </tr>
              ) : (
                selected.reply.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b odd:bg-gray-100 even:bg-blue-50 text-xs sm:text-sm"
                  >
                    <td className="text-center p-2 sm:p-3">{index + 1}</td>
                    <td className="text-center p-2 sm:p-3">
                      {edit === item.id ? (
                        <input
                          type="date"
                          className="border rounded-md px-2 py-1 w-full"
                          name="complainDate"
                          value={editData.complainDate}
                          onChange={handleEditChange}
                        />
                      ) : (
                        <p>{item.complainDate}</p>
                      )}
                    </td>
                    <td className="text-left p-2 sm:p-3">
                      <div>
                        {edit === item.id ? (
                          <input
                            type="text"
                            className="border rounded-md px-2 py-1 w-full"
                            name="complainText"
                            value={editData.complainText}
                            onChange={handleEditChange}
                          />
                        ) : (
                          <p>{item.complainText}</p>
                        )}
                        {feedbackId === item.id && (
                          <p className="italic bg-green-700 text-white p-1 mt-2 rounded-md">
                            Reply: {item.replyText}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="text-center p-2 sm:p-3 flex flex-wrap justify-center gap-2">
                      {edit === item.id ? (
                        <button
                          className="text-blue-600 hover:text-white hover:bg-amber-950 rounded-full p-2"
                          title="Update"
                          onClick={sendUpdatedData}
                        >
                          <TiTick size={20} />
                        </button>
                      ) : (
                        <button
                          className="text-blue-600 hover:text-white hover:bg-amber-950 rounded-full p-2"
                          onClick={() => editHandler(item)}
                          title="Edit Complaints"
                        >
                          <FaEdit size={16} />
                        </button>
                      )}
                      <button
                        className="text-red-600 hover:text-white hover:bg-amber-950 rounded-full p-2"
                        onClick={() => {
                          setDeleteId(item.id);
                          setOpenDelete(true);
                        }}
                        title="Delete this row"
                      >
                        <FaTrash size={16} />
                      </button>
                      <button
                        className="text-gray-700 hover:text-white hover:bg-amber-950 rounded-full p-2"
                        onClick={() => seeFeedback(item.id)}
                        title="Reply from admin"
                      >
                        <FaEye size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {openDelete && (
            <Delete
              setOpenDelete={setOpenDelete}
              deleteData={() => deleteHandler(deleteId)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Your_complaints;
