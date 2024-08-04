import React from "react";
import { Images } from "../assets";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen  flex justify-center ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:px-[70px] w-full">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-6xl  font-serif">English Proficiency Test</h1>
          <span className="text-2xl text-[#1283B6] font-semibold">online</span>
          <span className="text-xl text-[#4c4c4c]">
            Peserta wajib melakukan English Proficiency Test sebelum mengikuti
            English Training.
          </span>
          <button
            onClick={() => navigate("/login-peserta")}
            className="flex bg-[#1283B6] mt-2 w-max px-3 py-2 text-xl justify-center items-center gap-3 rounded-md text-white"
          >
            Get Started <BiRightArrowAlt />
          </button>
        </div>
        <div className=" w-full h-[700px] relative">
          <Images type="vektor1" className="absolute h-[100%] right-0 " />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
