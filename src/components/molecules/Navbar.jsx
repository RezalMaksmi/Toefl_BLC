// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuAlignRight, LuLogOut, LuX } from "react-icons/lu";

import { Images } from "../../assets";
import {
  BiSolidBookBookmark,
  BiSolidSelectMultiple,
  BiSolidUserDetail,
  BiSolidUserPlus,
  BiSpreadsheet,
} from "react-icons/bi";
import CardProfile from "../atoms/CardProfile";
import OutsideClick from "../atoms/OutsideClick";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const { users } = useSelector((state) => state.getAPI);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    console.log(user);
    return user ? JSON.parse(user) : {};
  };

  // const { token, role } = getUserDataFromLocalStorage();

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(localStorage);

  const [isShown, setIsShown] = useState(false);
  const [isShownTest, setIsShownTest] = useState(false);
  const [isShownActiveTest, setIsShownActiveTest] = useState(false);
  const [isShownQuis, setIsShownQuis] = useState(false);
  const [isShownListAdmin, setIsShownListAdmin] = useState(false);
  const [isShownProfile, setIsShownProfile] = useState(false);

  const closeToggle = () => {
    setActive(false);
  };

  const { type, status, error, token } = useSelector((state) => state.auth);

  return (
    <>
      {type && token ? (
        <div className="w-full  ">
          <OutsideClick onOutsideClick={closeToggle}>
            <div className="w-full py-4  h-[75px] bg-white flex justify-between items-center px-[40px] shadow z-10 border">
              <Images type="logo" className="bg-pink h-full ml-[80px]" />
              <CardProfile />
            </div>
          </OutsideClick>
        </div>
      ) : (
        pathname !== "/dashboard" && (
          <section className="bg-white border py-2 fixed w-full z-10 ">
            <div className="container  max-h-[80px]  w-full h-full mx-auto px-10 lg:px-15   lg:py-3 flex justify-between relative items-center ">
              <div
                className="h-[70px] cursor-pointer"
                onClick={() => navigate("/")}
              >
                <Images type="logo" className="h-full px-6  " />
              </div>
              <ul
                className={`${
                  active
                    ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2"
                    : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2"
                } `}
              ></ul>
              <div
                className="hidden  max-[1000px]:contents w-[30px] h-[30px] text-2xl"
                onClick={() => setActive(!active)}
              >
                {active ? <LuAlignRight /> : <LuX />}
              </div>

              {token ? (
                <>
                  <h1>{users ? users.username : ""}</h1>

                  <button
                    className="px-5 py-2 rounded-lg  font-semibold border bg-red-800 text-white "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="login"
                  className={` border-2 border-[#1283B6]  ${
                    pathname === "/login"
                      ? "borderr_active px-5 py-2 rounded-lg  font-semibold bg-white border text-[#1283B6]"
                      : "px-5 py-2 rounded-lg  font-semibold bg-white border text-[#1283B6]"
                  }
                  `}
                >
                  Mulai Test
                </Link>
              )}
            </div>
          </section>
        )
      )}
    </>
  );
};

export default Navbar;
