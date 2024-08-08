import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";
import book_main from "../../assets/img/book-main.png";
import user_profile from "../../assets/img/default-profile.png";
import book_active from "../../assets/img/book-test-active.png";
import book_deactive from "../../assets/img/book-test-deactive.png";
import axios from "axios";

const HomePeserta = () => {
  const navigate = useNavigate();
  const [resTest, setResTest] = useState([]);

  const id_hasil = "95a270bf-9af1-4a8d-8d17-9db9a13c1721";

  const fetchResTest = async () => {
    const response = await axios.get(
      `http://localhost:8000/user/result/${id_hasil}`
    );
    setResTest(response.data.data);
  };

  useEffect(() => {
    fetchResTest();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col justify-center">
      <div className="mt-[75px] grid grid-cols-6 gap-10 lg:px-[120px] w-full">
        <div className="bg-[#E4EDF1] col-span-4 flex items-center justify-between mt-10 rounded-3xl shadow-lg p-10">
          <div className="flex-col text-gray-800">
            <p className="font-bold text-6xl">Hello, Erga Febriawan</p>
            <p className="font-semibold text-2xl mt-3">
              Selamat Datang di Brawijaya Language Center
            </p>
          </div>
          <Images src={book_main} />
        </div>
        <div className="bg-gray-50 h-auto col-span-2 flex justify-center items-center flex-col mt-10 rounded-3xl shadow-lg p-10 ring-1 ring-gray-500">
          <Images src={user_profile} className="h-[200px] " />
          <p className="font-semibold text-center text-2xl text-gray-900 mb-3">
            Erga Febriawan
          </p>
          <button className="bg-blue-500  text-gray-50 py-2 px-6 rounded-md font-semibold">
            Lihat profil
          </button>
        </div>
      </div>
      <div className="lg:px-[70px] mt-10 grid grid-cols-6">
        <div className="bg-gray-50 col-span-4 rounded-3xl shadow-lg px-5 py-3">
          <p className="font-semibold text-gray-800 text-2xl">
            Test yang anda ikuti
          </p>
          <div className="grid grid-cols-4 gap-6 my-5">
            <div className="bg-blue-100 cursor-pointer flex justify-center items-center flex-col rounded-3xl shadow-lg p-5 ring-1 ring-gray-500">
              <Images src={book_active} className="h-[150px] " />
              <p className="font-semibold text-center text-xl mt-2">Pretest</p>
            </div>
            <div className="bg-blue-100 flex justify-center items-center flex-col rounded-3xl shadow-lg p-5 ring-1 ring-gray-500">
              <Images src={book_deactive} className="h-[150px] " />
              <p className="font-semibold text-center text-xl mt-2">
                Post Test 1
              </p>
            </div>
            <div className="bg-blue-100 flex justify-center items-center flex-col rounded-3xl shadow-lg p-5 ring-1 ring-gray-500">
              <Images src={book_deactive} className="h-[150px] " />
              <p className="font-semibold text-center text-xl mt-2">
                Post Test 2
              </p>
            </div>
            <div className="bg-blue-100 flex justify-center items-center flex-col rounded-3xl shadow-lg p-5 ring-1 ring-gray-500">
              <Images src={book_deactive} className="h-[150px] " />
              <p className="font-semibold text-center text-xl mt-2">
                Equivalent
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 lg:px-[70px] my-10">
        <div className=" col-span-4 rounded-3xl shadow-xl px-5 py-3">
          <p className="font-semibold text-gray-800 text-2xl mb-4">
            Nilai Hasil Test
          </p>
          <div className="bg-[#E4EDF1] rounded-3xl px-3 py-2">
            <div className="grid grid-cols-5 gap-3 px-3 py-2">
              <div className="bg-blue-500 rounded-xl px-5 py-6 h-full flex items-center justify-center">
                <p className="font-semibold text-3xl text-center text-gray-50">
                  Pretest
                </p>
              </div>
              <div className="col-span-3 bg-blue-500 grid grid-cols-3 gap-3 rounded-xl p-4">
                <div className="bg-gray-50 rounded-xl px-3 py-2">
                  <p className="font-semibold text-blue-500 text-center">
                    Listening
                  </p>
                  <p className="font-semibold text-5xl text-center my-4">
                    {resTest.listening == null ? "-" : resTest.listening}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl px-3 py-2">
                  <p className="font-semibold text-blue-500 text-center">
                    Structure
                  </p>
                  <p className="font-semibold text-5xl text-center my-4">
                    {resTest.structure == null ? "-" : resTest.structure}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl px-3 py-2">
                  <p className="font-semibold text-blue-500 text-center">
                    Reading
                  </p>
                  <p className="font-semibold text-5xl text-center my-4">
                    {resTest.reading == null ? "-" : resTest.reading}
                  </p>
                </div>
              </div>
              <div className="bg-blue-950 rounded-xl p-2">
                <p className="text-gray-50 font-semibold">Total</p>
                <div className="rounded-xl bg-gray-50 py-6">
                  <p className="font-semibold text-5xl text-center">
                    {resTest.total == null ? "-" : resTest.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePeserta;
