import React, { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuAlignRight, LuLogOut, LuX } from "react-icons/lu";

import {
  BiSolidBookBookmark,
  BiSolidSelectMultiple,
  BiSolidUserDetail,
  BiSolidUserPlus,
  BiSpreadsheet,
} from "react-icons/bi";
import OutsideClick from "../atoms/OutsideClick";
import { logout } from "../../redux/slices/authSlice";
import { getTypeTestAct } from "../../redux/fetch/Get";
import axiosInstance from "../../api/axiosInstance";
import axios from "axios";
const NavbarAdmin = () => {
  const [active, setActive] = React.useState(false);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const [isShownQuiz, setIsShownQuiz] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShownTest, setIsShownTest] = useState(false);
  const [isShownActiveTest, setIsShownActiveTest] = useState(false);
  const [isShownListAdmin, setIsShownListAdmin] = useState(false);
  const [test, setTest] = useState();

  const closeToggle = () => {
    setActive(false);
  };

  const { typeTest } = useSelector((state) => state.getAPI);

  const fetchJenisTest = async () => {
    const response = await axiosInstance.get("/test");
    setTest(response.data.data);
  };
  useEffect(() => {
    fetchJenisTest();
    // dispatch(getTypeTestAct("/test"));
  }, []);
  console.log("isinya .env", process.env.REACT_APP_API_BASE_URL);
  return (
    <div>
      <div className="w-full  ">
        <OutsideClick onOutsideClick={closeToggle}>
          <div
            className={`px-3 top-0 bottom-0 left-0   bg-[#E3F1FF] transition-all z-20 fixed ${
              active ? `w-[225px]` : `w-16 `
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
                    <div className="w-max ml-2 h-0 flex justify-center items-center relative">
                      <BiSolidUserDetail className="text-3xl w-[25px] h-[25px] " />
                    </div>
                    <span className="text-xl font-semibold top-3 relative">
                      Peserta
                    </span>
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
                <Link to="/activated-test">
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
                </Link>

                {/* ===== */}
                <div
                  className={`relative  py-0 h-auto w-full flex justify-center items-center flex-col gap-4 ${
                    isShownQuiz
                      ? `overflow-hidden w-max bg-white rounded-lg pr-5 shadow-md`
                      : `overflow-hidden `
                  }`}
                  onMouseEnter={() => setIsShownQuiz(true)}
                  onMouseLeave={() => setIsShownQuiz(false)}
                >
                  <div className="w-full flex justify-start items-end flex-row gap-4 ">
                    <div className="w-max ml-2 h-0 flex justify-center items-center">
                      <BiSolidBookBookmark className="text-3xl w-[25px] h-[25px] " />
                    </div>
                    <span className="text-xl font-semibold top-3 relative">
                      Soal
                    </span>
                  </div>

                  <div
                    className={`${
                      isShownQuiz
                        ? "w-[180px] flex h-max opacity-100 flex-col relative z-30 left-2 right-2 gap-0 pb-4 "
                        : "w-0 h-0 opacity-0"
                    } transition-all overflow-hidden`}
                  >
                    {test &&
                      test.map((item, i) => {
                        return (
                          <Link
                            key={i}
                            className="min-w-max w-full px-2 py-1 rounded-sm hover:bg-[#ececec]"
                            to={`/tambah-soal/${item.id}`}
                          >
                            {item.jenis_test}
                          </Link>
                        );
                      })}
                  </div>
                </div>

                <Link to="/admin-setting">
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
                </Link>
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
