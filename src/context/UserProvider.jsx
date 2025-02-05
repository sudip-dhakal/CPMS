import React, { useEffect, useState } from "react";
import user from "./userContext";
import { doGetUser } from "../API/UserApi";

const UserProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);
  const [selected, setSelected] = useState({});

  const getUser = async () => {
    let res = await doGetUser();
    if (res.status === 200) {
      setComplaints(res.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <user.Provider
      value={{
        selected,
        setSelected,
        complaints,
        setComplaints,
      }}
    >
      {children}
    </user.Provider>
  );
};
export default UserProvider;
