import { useContext, useState } from "react";
import VerticalNavbar from "./VerticalNavbar";
import user from "../context/userContext";

const Replies = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const { complaints } = useContext(user);
  console.log(complaints);

  const handleReplyClick = () => {
    setShowTextarea(true);
  };
  return (
    <div>
      <div>
        <VerticalNavbar />
      </div>

      <div className="flex">
        <div className="w-[18%]"></div>

        <div className="w-[40%] p-4">
          <div className="border p-4 rounded-lg shadow-md">
            <div className="flex justify-between font-semibold">
              <span>Name</span>
              <span>Address</span>
            </div>

            <div className="mt-2 text-sm">
              <p className="font-semibold">Complaint Date: 2025-02-10</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-2 text-sm">
              <p className="font-semibold">Reply Date: 2025-02-12</p>
              <p className="text-gray-600">
                Thank you for your complaint. We are working on it.
              </p>
            </div>

            <div className="mt-4">
              {!showTextarea ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleReplyClick}
                >
                  Reply Again
                </button>
              ) : (
                <div className="mt-2">
                  <textarea
                    className="w-full border p-2 rounded-md"
                    placeholder="Write your reply..."
                  ></textarea>
                  <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md">
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Replies;
