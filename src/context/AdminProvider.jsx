import React, { useEffect, useState } from "react";
import admin from "./adminContext";
import axios from "axios";

const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);



  return (
    <admin.Provider value={{ adminData, setAdminData }}>
      {children}
    </admin.Provider>
  );
};

export default AdminProvider;
