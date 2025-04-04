import { useContext, useEffect, useState } from "react";
import VerticalNavbar from "./VerticalNavbar";
import user from "../context/userContext";

const Replies = () => {
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [replies, setReplies] = useState([]);
  const { complaints } = useContext(user);

  let filter = complaints.filter((item) => item.role === "user");

  const getReplies = () => {
    let allReplies = [];
    filter.map((items) => {
      items.reply.map((item) => {
        allReplies.push({
          flag: item.flag,
          userId: items.id,
          userName: items.fullName,
          adminReply: item.replyText,
          replyId: item.id,
          userComplaint: item.complainText,
          address: items.address,
          complainDate: item.complainDate,
          replyDate: item.replyDate,
        });
      });
    });
    setReplies(allReplies);
  };

  useEffect(() => {
    getReplies();
  }, [complaints]);

  const handleReplyClick = (id) => {
    setEditingReplyId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="fixed top-0 left-0 h-screen w-[15%] bg-white shadow-md z-10">
          <VerticalNavbar />
        </div>

        <div className="ml-[15%] p-6 flex flex-wrap gap-6 w-full">
          {replies?.map((item, index) =>
            item.flag === true ? (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-[45%] "
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.userName}
                  </h2>
                  <span className="text-sm text-gray-500">{item.address}</span>
                </div>

                <div className="text-sm text-gray-700 mb-3">
                  <p className="font-semibold mb-1">
                    Complain Date: {item.complainDate}
                  </p>
                  <p className="text-gray-600">{item.userComplaint}</p>
                </div>

                <div className="text-sm text-gray-700 mb-4">
                  <p className="font-semibold mb-1">
                    Reply Date: {item.replyDate}
                  </p>
                  <p className="text-gray-600">{item.adminReply}</p>
                </div>

                <div>
                  {editingReplyId !== item.replyId ? (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      onClick={() => handleReplyClick(item.replyId)}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="mt-2">
                      <textarea
                        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your reply..."
                        rows="1"
                      ></textarea>
                      <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Replies;
