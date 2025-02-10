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

  let getLoginData = () => {
    let data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setSelected(data);
    }
  };

  useEffect(() => {
    getUser();
    getLoginData();
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
