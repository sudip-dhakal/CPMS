import React, { useContext, useEffect } from "react";
import Login from "./Components/Authentication/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Authentication/Signup";
import Home from "./User/Home";
import user from "./context/userContext";
import admin from "./context/adminContext";
import axios from "axios";

const App = () => {
  const { complaints, setComplaints } = useContext(user);
  const { adminData, setAdminData } = useContext(admin);

  let fetchAdminData = async () => {
    await axios
      .get("http://localhost:3031/adminReleases")
      .then((res) => {
        setAdminData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let fetchData = async () => {
    await axios
      .get("http://localhost:3031/storedData")
      .then((res) => {
        setComplaints(res.data);
      })
      .catch((e) => {
        console.log("Error getting data");
      });
  };

  useEffect(() => {
    fetchAdminData();
    fetchData();
  }, []);

  if (!adminData && !complaints) {
    return <div className="text-bold text-black">Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
