import React, { useContext, useState } from "react";
import user from "../../context/userContext";
import { doPatchUser } from "../../API/UserApi";

const ComplainBox = () => {
  const { complaints } = useContext(user);
  const [replyId, setReplyId] = useState(null);
  const [mainID, setMainID] = useState(null);
  const [error, setError] = useState("");
  const [reply, setReply] = useState({
    replyText: "",
    replyDate: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
  });

  let validation = () => {
    if (!reply.replyText.trim()) {
      setError("Please enter a reply.");
      return false;
    }
    setError("");
    return true;
  };

  let replyHandler = (items, itemId) => {
    setReplyId(itemId);
    setMainID(items.id);
  };

  let sendHandler = async () => {
    if (!validation()) return;

    const response = await doPatchUser(mainID, {
      reply:
        complaints
          .find((comp) => comp.id === mainID)
          ?.reply.map((r) =>
            r.id === replyId
              ? { ...r, replyText: reply.replyText, replyDate: reply.replyDate }
              : r
          ) || [],
    });

    if (response.status === 200) {
      console.log("Reply updated successfully");
    } else {
      console.log("Failed to update reply");
    }
  };

  return (
    <>
      {complaints
        .filter((complaint) => complaint.role === "user")
        .map((items, index) => (
          <div key={index} className="w-full flex flex-wrap gap-4">
            {items.reply.map((item) => (
              <div
                key={item.id}
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
                        onClick={sendHandler}
                        className="text-xl hover:bg-blue-500 transition duration-500 bg-blue-700 px-4 py-1 cursor-pointer text-white rounded-md"
                      >
                        Send
                      </button>
                    </span>
                    <p className="text-center text-red-800 mt-3 italic">
                      {error}
                    </p>
                  </div>
                ) : (
                  <span className="flex justify-end w-[98%]">
                    <button
                      type="button"
                      className="w-1/4 mt-4 text-xl hover:bg-red-500 transition duration-300 bg-red-700 px-4 py-1 cursor-pointer text-white rounded-md"
                      onClick={() => replyHandler(items, item.id)}
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
