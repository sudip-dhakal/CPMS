import React, { useContext, useState } from "react";
import user from "../../context/userContext";
import { doPatchUser } from "../../API/UserApi";

const ComplainBox = () => {
  const { complaints } = useContext(user);
  const [replyId, setReplyId] = useState(null);
  const [error, setError] = useState("");
  let userData = complaints.filter((complaint) => complaint.role === "user");
  const [reply, setReply] = useState({
    replyDate: new Date(),
    replyText: "",
  });

  let validation = () => {
    if (!reply.replyText) {
      setError("Please fill the data first");
      return false;
    } else {
      return true;
    }
  };

  let replyHandler = (items) => {
    console.log(items);
    let updateReply = items.reply.filter((i) => i.id === replyId);
    console.log(updateReply);
  };

  let sendHandler = () => {
    let valid = validation();
  };

  console.log(reply);

  return (
    <>
      {userData.map((items, index) => (
        <div key={index} className="w-full flex flex-wrap gap-4">
          {items.reply.map((item) => (
            <div
              key={item.id} // Assuming each reply has a unique `id`
              className="mr-auto rounded-md p-4 shadow-sm shadow-blue-700 w-[48%] max-w-[400px]"
            >
              <span className="flex justify-between">
                <h1 className="font-semibold pb-4">{items.fullName}</h1>
                <p className="text-black italic">{item.complainDate}</p>
              </span>

              <p className="italic">{item.complainText}</p>

              {replyId === item.id ? (
                <div>
                  <span className="flex items-center space-x-2 mt-3">
                    <input
                      type="text"
                      placeholder="Enter reply here"
                      className="flex-grow border-2 border-gray-300 rounded-md p-1"
                      value={reply.replyText}
                      onChange={(e) =>
                        setReply({ ...reply, replyText: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => sendHandler()}
                      className="text-xl hover:bg-blue-500 transition duration-500 bg-blue-700 px-4 py-1 cursor-pointer text-white rounded-md"
                    >
                      Send
                    </button>
                  </span>
                  {
                    <p className="text-center text-red-800 mt-3 italic">
                      {error}
                    </p>
                  }
                </div>
              ) : (
                <span className="flex justify-end w-[98%]">
                  <button
                    type="button"
                    className="w-1/4 mt-4 text-xl hover:bg-red-500 transition duration-300 bg-red-700 px-4 py-1 cursor-pointer text-white rounded-md"
                    onClick={() => {
                      setReplyId(item.id);
                      replyHandler(items);
                    }}
                  >
                    Reply
                  </button>
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ComplainBox;
