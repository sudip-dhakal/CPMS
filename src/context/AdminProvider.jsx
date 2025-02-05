import React, { useEffect, useState } from "react";
import admin from "./adminContext";
import { doGetAdmin } from "../API/AdminAPI";

const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState([]);

  let getAdmin = async () => {
    let res = await doGetAdmin();

    if (res.status === 200) {
      setAdminData(res.data);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <admin.Provider
      value={{
        adminData,
        setAdminData,
      }}
    >
      {children}
    </admin.Provider>
  );
};

export default AdminProvider;
