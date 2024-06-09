import React from "react";
import { useSelector } from "react-redux";
import { NavbarAdmin } from "../components";

const LayoutAdmin = ({ children }) => {
  // const getUserDataFromLocalStorage = () => {
  // const user = localStorage.getItem("type");
  // const token = localStorage.getItem("userToken");
  // console.log("siapa usernya", user);
  // return user ? JSON.parse(user) : {};
  // };

  // const { token, role } = getUserDataFromLocalStorage();
  const { type, status, error, token } = useSelector((state) => state.auth);

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
