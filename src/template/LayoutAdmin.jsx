import React from "react";
import { Navbar } from "../organism";

const Admin = ({ children }) => {
  // const getUserDataFromLocalStorage = () => {
  const user = localStorage.getItem("type");
  const token = localStorage.getItem("userToken");
  console.log("siapa usernya", user);
  // return user ? JSON.parse(user) : {};
  // };

  // const { token, role } = getUserDataFromLocalStorage();
  return (
    <div>
      {token && user ? <Navbar type={user} /> : <Navbar />}

      <main>{children}</main>
    </div>
  );
};

export default Admin;
