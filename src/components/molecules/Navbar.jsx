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

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const { users } = useSelector((state) => state.getAPI);

  let navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    console.log(user);
    return user ? JSON.parse(user) : {};
  };

  const { token, role } = getUserDataFromLocalStorage();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
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
  return (
    <>
      {role === "admin" && token ? (
        <div className="w-full  ">
          <OutsideClick onOutsideClick={closeToggle}>
            <div className="w-full py-4  h-[75px] bg-white flex justify-between items-center px-[40px] shadow z-10 border">
              <Images type="logo" className="bg-pink h-full ml-[80px]" />
              <CardProfile />
            </div>
            <div
              className={`px-3 top-0 bottom-0 left-0  w-20  bg-[#E3F1FF] transition-all z-20 fixed ${
                active ? `w-[180px]` : ``
              }`}
            >
              <div
                className="text-[#1283B6] text-2xl h-[80px] rounded-sm w-full flex justify-center items-center"
                onClick={() => setActive(!active)}
              >
                {active ? <LuX /> : <LuAlignRight />}
              </div>
              <div className="flex flex-col justify-between h-[85%] text-[#1283B6]  ">
                <div className="flex flex-col gap-3 ">
                  <div
                    className={`relative py-2 w-full  flex justify-start items-center flex-col gap-4 ${
                      isShown
                        ? `overflow-visible w-max bg-white rounded-lg pr-5 `
                        : `overflow-hidden`
                    }`}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  >
                    <div className="w-full  flex justify-start items-center flex-row gap-4 ">
                      <div className="w-max ml-3  flex justify-center items-center">
                        <BiSolidUserDetail className="text-3xl w-[35px] h-[35px] " />
                      </div>
                      <span className="text-xl font-semibold ">Peserta</span>
                    </div>
                    {isShown && (
                      <div className="flex flex-col relative w-max z-30 left-4 gap-2 pb-4">
                        <Link to="/">Semua Peserta</Link>
                        <Link to="/peserta-test">Peserta Test</Link>
                        <Link to="/hasil-test">Hasil Test</Link>
                      </div>
                    )}
                  </div>
                  <div
                    className={`relative py-2 w-full  flex justify-start items-center flex-col gap-4 ${
                      isShownTest
                        ? `overflow-visible w-max bg-white rounded-lg pr-8 `
                        : `overflow-hidden`
                    }`}
                    onMouseEnter={() => setIsShownTest(true)}
                    onMouseLeave={() => setIsShownTest(false)}
                  >
                    <div className="w-full  flex justify-start items-center flex-row gap-4 ">
                      <div className="w-max ml-3  flex justify-center items-center">
                        <BiSpreadsheet className="text-3xl w-[35px] h-[35px] " />
                      </div>
                      <span className="text-xl font-semibold ">Test</span>
                    </div>
                    {isShownTest && (
                      <div className="flex flex-col relative w-max z-30 left-4 gap-2 pb-4">
                        <Link to="/hasil-test" className="hover:text-black  ">
                          Test
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* ================== */}
                  <div
                    className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${
                      isShownActiveTest
                        ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                        : `overflow-hidden`
                    }`}
                    onMouseEnter={() => setIsShownActiveTest(true)}
                    onMouseLeave={() => setIsShownActiveTest(false)}
                  >
                    <div className="w-max ml-3  flex justify-center items-center">
                      <BiSolidSelectMultiple className="text-3xl w-[35px] h-[35px] " />
                    </div>
                    <span className="text-xl font-semibold">Active</span>
                  </div>

                  {/* ===== */}
                  <div
                    className={`relative py-2 w-full  flex justify-start items-center flex-col gap-4 ${
                      isShownQuis
                        ? `overflow-visible w-max bg-white rounded-lg pr-8 `
                        : `overflow-hidden`
                    }`}
                    onMouseEnter={() => setIsShownQuis(true)}
                    onMouseLeave={() => setIsShownQuis(false)}
                  >
                    <div className="w-full  flex justify-start items-center flex-row gap-4 ">
                      <div className="w-max ml-3  flex justify-center items-center">
                        <BiSolidBookBookmark className="text-3xl w-[35px] h-[35px] " />
                      </div>
                      <Link
                        to={"/edit-soal"}
                        className="text-xl font-semibold "
                      >
                        Soal
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${
                      isShownListAdmin
                        ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                        : `overflow-hidden`
                    }`}
                    onMouseEnter={() => setIsShownListAdmin(true)}
                    onMouseLeave={() => setIsShownListAdmin(false)}
                  >
                    <div className="w-max ml-3  flex justify-center items-center">
                      <BiSolidUserPlus className="text-3xl w-[35px] h-[35px] " />
                    </div>
                    <span className="text-xl font-semibold">Admin</span>
                  </div>
                </div>
                <LuLogOut
                  className="text-3xl w-[30px] h-[30px]  ml-3"
                  onClick={handleLogout}
                />
              </div>
            </div>
          </OutsideClick>
        </div>
      ) : (
        pathname !== "/dashboard" && (
          <section className="bg-white border py-2 fixed w-full z-10 ">
            <div className="max-w-[1800px] max-h-[80px]  w-full h-full mx-auto px-10 lg:px-40   lg:py-3 flex justify-between relative items-center ">
              <div className="h-[80px]">
                <Images type="logo" className="h-full px-6  " />
              </div>
              <ul
                className={`${
                  active
                    ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2"
                    : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2"
                } `}
              >
                <li className="h-full flex justify-center items-center borderr ">
                  <Link
                    to="/"
                    className={
                      pathname === "/"
                        ? "borderr_active "
                        : "w-full max-[1000px]:px-3"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="h-full flex justify-center items-center borderr ">
                  <Link
                    to="product"
                    className={
                      pathname === "/product"
                        ? "borderr_active"
                        : "w-full max-[1000px]:px-3 "
                    }
                  >
                    Product
                  </Link>
                </li>
                <li className="h-full flex justify-center items-center borderr ">
                  <Link
                    to="saved"
                    className={
                      pathname === "/saved"
                        ? "borderr_active"
                        : "w-full max-[1000px]:px-3"
                    }
                  >
                    Saved
                  </Link>
                </li>
                <li className="h-full flex justify-center items-center borderr ">
                  {role === "admin" ? (
                    <Link
                      to="/rekap"
                      className={
                        pathname === "/rekap"
                          ? "borderr_active"
                          : "w-full max-[1000px]:px-3"
                      }
                    >
                      Rekap Penjualan
                    </Link>
                  ) : (
                    role === "user" && (
                      <Link
                        to="/cart"
                        className={
                          pathname === "/cart"
                            ? "borderr_active"
                            : "w-full max-[1000px]:px-3"
                        }
                      >
                        Cart
                      </Link>
                    )
                  )}
                </li>
              </ul>
              <div
                className="hidden  max-[1000px]:contents w-[30px] h-[30px] text-2xl"
                onClick={() => setActive(!active)}
              >
                {active ? <LuAlignRight /> : <LuX />}
              </div>

              {token ? (
                <>
                  <h1>{users.username}</h1>

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
                  className={
                    pathname === "/login"
                      ? "borderr_active px-5 py-2 rounded-lg  font-semibold bg-white border text-black"
                      : "px-5 py-2 rounded-lg  font-semibold bg-white border text-black"
                  }
                >
                  Login
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
