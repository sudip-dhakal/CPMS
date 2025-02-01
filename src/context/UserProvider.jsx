import React, { useEffect, useState } from "react";
import user from "./userContext";
import axios from "axios";

const UserProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);
  const [propagatID, setPropagateID] = useState(null);

  return (
    <user.Provider
      value={{ propagatID, setPropagateID, complaints, setComplaints }}
    >
      {children}
    </user.Provider>
  );
};
export default UserProvider;
