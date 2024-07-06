import React from "react";
import notfound from "../assets/notfound.jpg";
import { Button } from "../components/atoms";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container md:px-20 px-5 mx-auto w-full h-[100vh] grid md:grid-cols-2 grid-cols-1 items-center">
      <div className="mx-auto w-full flex flex-col gap-3">
        <h1 className=" md:text-6xl text-4xl font-bold">Opps!</h1>
        <span className="md:text-xl text-base">Halaman tidak ditemukan</span>
        <button
          className="px-3 py-1 bg-[#21a463] rounded-full w-max"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
      <img src={notfound} alt="notfound" className="mx-auto" />
    </div>
  );
};

export default NotFound;
