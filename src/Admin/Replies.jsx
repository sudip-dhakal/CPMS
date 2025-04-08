import { useContext, useEffect, useState } from "react";
import VerticalNavbar from "./VerticalNavbar";
import user from "../context/userContext";
import { doPatchUser } from "../API/UserApi";
import { toast } from "react-toastify";

const Replies = () => {
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyingUser, setReplyingUser] = useState({});
  const { complaints } = useContext(user);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const filteredComplaints = complaints.filter(
      (item) => item.role === "user"
    );

    setReplies(
      filteredComplaints.flatMap((items) =>
        items.reply.map((item) => ({
          flag: item.flag,
          userId: items.id,
          userName: items.fullName,
          adminReply: item.replyText,
          replyId: item.id,
          userComplaint: item.complainText,
          address: items.address,
          complainDate: item.complainDate,
          replyDate: item.replyDate,
        }))
      )
    );
  }, [complaints]);

  useEffect(() => {
    if (editingReplyId) {
      const outerItem = complaints.find((items) =>
        items.reply.some((item) => item.id === editingReplyId)
      );
      setReplyingUser(outerItem || {});
    }
  }, [editingReplyId, complaints]);

  let submitReply = async () => {
    if (reply == null || reply.length === 0) {
      toast.error("Please fill reply data");
      return;
    }

    let updatedData = {};

    let res = await doPatchUser(replyingUser.id, updatedData);
    if (res.status == 200) {
      toast.success("Reply updated successfully");
    } else {
      toast.error("Reply updation failure");
    }

    console.log(updatedData);
  };

  // console.log(reply);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="fixed top-0 left-0 h-screen w-[15%] bg-white shadow-md z-10">
          <VerticalNavbar />
        </div>

        <div className="ml-[15%] p-6 flex flex-wrap gap-6 w-full">
          {replies.map(
            (item) =>
              item.flag && (
                <div
                  key={item.replyId}
                  className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-[45%]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.userName}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {item.address}
                    </span>
                  </div>

                  <div className="text-sm text-gray-700 mb-3">
                    <p className=" mb-1 text-gray-600">
                      Complain Date: {item.complainDate}
                    </p>
                    <p className="text-black font-semibold">{item.userComplaint}</p>
                  </div>

                  <div className="text-sm text-gray-700 mb-4">
                    <p className=" text-gray-600 mb-1">
                      Reply Date: {item.replyDate}
                    </p>
                    <p className="text-black font-semibold">{item.adminReply}</p>
                  </div>

                  {editingReplyId === item.replyId ? (
                    <div className="mt-2">
                      <textarea
                        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your reply..."
                        rows="1"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                      ></textarea>
                      <button
                        className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        onClick={submitReply}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      onClick={() => setEditingReplyId(item.replyId)}
                    >
                      Edit
                    </button>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Replies;
