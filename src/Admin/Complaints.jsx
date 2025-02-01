import React from "react";
import VerticalNavbar from "./VerticalNavbar";
import ComplainBox from "../Components/Reusable/ComplainBox";

const Complaints = () => {
  return (
    <>
      <div className="p-0">
        <VerticalNavbar />
        <div className="ml-[18%] p-10 flex flex-wrap gap-x-5 gap-y-10 justify-center">
          <ComplainBox />
          
         
        </div>
      </div>
    </>
  );
};

export default Complaints;
