import React, { useEffect, useState } from "react";
import user from "./userContext";
import axios from "axios";

const UserProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);

  let fetchData = async () => {
    await axios
      .get("http://localhost:3031/storedData")
      .then((res) => {
        console.log(res.data);
        setComplaints(res.data);
      })
      .catch((e) => {
        console.log("Error getting data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(complaints);

  return (
    <user.Provider value={{ complaints, setComplaints }}>
      {children}
    </user.Provider>
  );
};
export default UserProvider;
