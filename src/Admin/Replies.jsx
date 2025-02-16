import { useContext, useState } from "react";
import VerticalNavbar from "./VerticalNavbar";
import user from "../context/userContext";

const Replies = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const { complaints } = useContext(user);
  console.log(complaints);

  const data = [
    {
      fullName: "Pravakar Rijal",
      role: "user",
      address: "address",
      username: "pravakar_11",
      password: "password",
      reply: [
        {
          flag: true,
          replyText: "Ok we will do it very soon.",
          complainText: "The street lights are broken and need to be fixed.",
          complainDate: "2002-04-07",
          replyDate: "2025-02-13",
          id: 3728732,
        },
        {
          flag: false,
          replyText:
            "Your issue has been resolved, and the street lights are now operational.",
          complainText: "The street lights were repaired today.",
          complainDate: "2002-07-17",
          replyDate: "2002-08-08",
          id: 3728733,
        },
        {
          flag: true,
          replyText: "",
          complainText: "NIice, Hi there",
          complainDate: "2025-02-18",
          replyDate: "",
          id: 22970,
        },
      ],
      id: "50b6",
      confirmPassword: "password",
    },
    {
      fullName: "Sudip Bro",
      role: "user",
      address: "456 Elm St, Springfield, USA",
      username: "jane_smith",
      password: "12345678",
      reply: [
        {
          flag: true,
          replyText: "The potholes have been repaired successfully.",
          complainText: "Road repair has been Started",
          complainDate: "2023-04-06",
          replyDate: "2023-04-10",
          id: 3728735,
        },
        {
          flag: false,
          replyText: "Not yet",
          complainText: "This is the new complaint.",
          complainDate: "2025-02-19",
          replyDate: "Not yet",
          id: 1345427070,
        },
        {
          flag: true,
          replyText: "Water supply has been restored.",
          complainText: "No water supply in the area.",
          complainDate: "2024-06-15",
          replyDate: "2024-06-20",
          id: 8473629,
        },
      ],
      id: "78c9",
    },
  ];

  const filteredData = data
    .map((user) => ({
      ...user,
      reply: user.reply.filter((reply) => reply.flag === false),
    }))
    .filter((user) => user.reply.length > 0);

  console.log(filteredData);

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
