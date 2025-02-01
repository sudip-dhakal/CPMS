import React from "react";
import VerticalNavbar from "./VerticalNavbar";
import Complaints from "./Complaints";
import ReleasedMessages from "./ReleasedMessages";

const Admin_home = () => {
  return (
    <>
      <div>
        <VerticalNavbar />
        <ReleasedMessages/>
      </div>
    </>
  );
};

export default Admin_home;
