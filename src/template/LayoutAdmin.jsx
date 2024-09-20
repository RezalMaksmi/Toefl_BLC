import React from "react";
import { NavbarAdmin } from "../components";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      {/* {token && type ? <Navbar type={type} /> : <Navbar />} */}
      <NavbarAdmin />
      <div className="pl-[40px] w-full h-full  flex justify-center ">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
