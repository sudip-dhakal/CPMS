import React, { useContext } from "react";
import Navbar from "../Components/Reusable/Navbar";
import Notes from "../Components/Reusable/Notes";
import user from "../context/userContext";

const Home = () => {
  // const { selected } = useContext(user);
  return (
    <>
      <div className="bg-[#cad2c5] w-screen h-full ">
        <Navbar />

        <h1 className="font-bold text-xl w-[90%] mx-auto pt-30">
          The Notes from the Authority.
        </h1>
        <Notes />
      </div>
    </>
  );
};

export default Home;
