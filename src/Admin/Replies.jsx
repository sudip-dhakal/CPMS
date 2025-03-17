import { useContext, useEffect, useState } from "react";
import VerticalNavbar from "./VerticalNavbar";
import user from "../context/userContext";

const Replies = () => {
  const [showTextarea, setShowTextarea] = useState(false);
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

  console.log(replies);

  const handleReplyClick = () => {
    setShowTextarea(true);
  };

  return (
    <div>
      <div>
        <VerticalNavbar />
      </div>

      <div className="ml-[15%] flex flex-wrap">
        {replies?.map((item, index) =>
          item.flag === true ? (
            <div key={index} className="max-w-full w-[40%] p-4">
              <div className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between font-semibold">
                  <span className="text-xl mb-2">{item.userName}</span>
                  <span>{item.address}</span>
                </div>

                <div className="mt-2 text-sm">
                  <p className="font-semibold">
                    Complain Date: {item.complainDate}
                  </p>
                  <p className="text-gray-600">{item.userComplaint}</p>
                </div>

                <div className="mt-2 text-sm">
                  <p className="font-semibold">Reply Date: {item.replyDate}</p>
                  <p className="text-gray-600">{item.adminReply}</p>
                </div>

                <div className="mt-4">
                  {!showTextarea ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={handleReplyClick}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="mt-2">
                      <textarea
                        className="w-full border p-2 rounded-md"
                        placeholder="Write your reply..."
                      ></textarea>
                      <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md cursor-pointer">
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Replies;
