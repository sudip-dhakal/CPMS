import React from "react";
import Navbar from "../Components/Reusable/Navbar";
import Register_Complaint from "./Register_Complaint";
import Notes from "../Components/Reusable/Notes";

const Home = () => {
  return (
    <div className="bg-[#cad2c5] w-screen h-screen">
      <Navbar />
      <h1 className="font-bold text-xl w-[90%] mx-auto mt-6">
        The Notes from the Authority.
      </h1>
      <Notes />
    </div>
  );
};

export default Home;
