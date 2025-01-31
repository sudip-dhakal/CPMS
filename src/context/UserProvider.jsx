import React, { useEffect, useState } from "react";
import user from "./userContext";
import axios from "axios";

const UserProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);

  return (
    <user.Provider value={{ complaints, setComplaints }}>
      {children}
    </user.Provider>
  );
};
export default UserProvider;
