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
import OutsideClick from "../atoms/OutsideClick";
import { logout } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
const NavbarAdmin = () => {
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

  useEffect(() => {}, []);

  return (
    <div>
      <div className="w-full  ">
        <OutsideClick onOutsideClick={closeToggle}>
          <div
            className={`px-3 top-0 bottom-0 left-0   bg-[#E3F1FF] transition-all z-20 fixed ${
              active ? `w-[180px]` : `w-16 `
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
                  className={`relative  py-0 h-auto w-full flex justify-center items-center flex-col gap-4 ${
                    isShown
                      ? `overflow-hidden w-max bg-white rounded-lg pr-5 shadow-md`
                      : `overflow-hidden `
                  }`}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <div className="w-full flex justify-start items-end flex-row gap-4 ">
                    <div className="w-max ml-2 h-0 flex justify-center items-center">
                      <BiSolidUserDetail className="text-3xl w-[25px] h-[25px] " />
                    </div>
                    <span className="text-xl font-semibold ">Peserta</span>
                  </div>

                  <div
                    className={`${
                      isShown
                        ? "w-[180px] flex h-max opacity-100 flex-col relative z-30 left-2 right-2 gap-0 pb-4 "
                        : "w-0 h-0 opacity-0"
                    } transition-all overflow-hidden`}
                  >
                    <Link
                      className="min-w-max w-full px-2 py-1 rounded-sm hover:bg-[#ececec]"
                      to="/"
                    >
                      Semua Peserta
                    </Link>
                    <Link
                      className="min-w-max w-full px-2 py-1 rounded-sm hover:bg-[#ececec]"
                      to="/peserta-test"
                    >
                      Peserta Test
                    </Link>
                    <Link
                      className="min-w-max w-full px-2 py-1 rounded-sm hover:bg-[#ececec]"
                      to="/hasil-test"
                    >
                      Hasil Test
                    </Link>
                  </div>
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
                    <div className="w-max ml-2  flex justify-center items-center">
                      <BiSpreadsheet className="text-3xl w-[25px] h-[25px] " />
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
                  <div className="w-max ml-2  flex justify-center items-center">
                    <BiSolidSelectMultiple className="text-3xl w-[25px] h-[25px] " />
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
                    <div className="w-max ml-2  flex justify-center items-center">
                      <BiSolidBookBookmark className="text-3xl w-[25px] h-[25px] " />
                    </div>
                    <Link to={"/edit-soal"} className="text-xl font-semibold ">
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
                  <div className="w-max ml-2  flex justify-center items-center">
                    <BiSolidUserPlus className="text-3xl w-[25px] h-[25px] " />
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
    </div>
  );
};

export default NavbarAdmin;
