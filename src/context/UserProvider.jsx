import React, { useEffect, useState } from "react";
import user from "./userContext";

const UserProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);
  const [propagateID, setPropagateID] = useState(null);
  const [index, setIndex] = useState(null);

  return (
    <user.Provider
      value={{
        propagateID,
        setPropagateID,
        index,
        setIndex,
        complaints,
        setComplaints,
      }}
    >
      {children}
    </user.Provider>
  );
};
export default UserProvider;
