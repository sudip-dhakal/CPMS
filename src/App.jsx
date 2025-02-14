import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Authentication/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Authentication/Signup";
import Home from "./User/Home";
import user from "./context/userContext";
import admin from "./context/adminContext";
import Your_complaints from "./User/Your_complaints";
import Edit_profile from "./User/Edit_profile";
import Admin_home from "./Admin/Admin_home";
import Complaints from "./Admin/Complaints";
import Settings from "./Admin/Settings";
import Feedbacks from "./Admin/Feedbacks";

const App = () => {
  const { complaints, setComplaints } = useContext(user);
  const { adminData, setAdminData } = useContext(admin);
  const loggedIn = localStorage.getItem("loggedIn");

  if (!adminData && !complaints) {
    return <div className="text-bold text-black">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Login />} />)
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/complaints" element={<Your_complaints />} />
          <Route path="/edit" element={<Edit_profile />} />
          <Route path="/complaint" element={<Complaints />} />
          <Route path="/admin/setting" element={<Settings />} />
          <Route path="/admin/home" element={<Admin_home />} />
          <Route path="/admin/feedback" element={<Feedbacks />} />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
