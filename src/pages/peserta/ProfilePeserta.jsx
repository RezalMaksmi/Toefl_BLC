import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import user_profile from "../../assets/img/default-profile.png";
import { Images } from "../../assets";

const ProfilePeserta = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("peserta_id");

  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:8000/user/result/${token}`
    );
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-w-[1800px] w-full px-10 min-h-[91vh] h-auto flex flex-col ">
      <div className="mt-[75px] gap-10  w-full">
        <div className="grid grid-cols-3 w-full px-4 py-8 my-10 rounded-lg gap-7">
          {/* <h2 className="text-gray-800 font-bold text-2xl mx-5 my-3">
            Profile Peserta
          </h2>
          <div className="flex gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="flex w-[100px] h-[100px] overflow-hidden rounded-full bg-slate-400">
                <Images
                  src={user_profile}
                  className="w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold">
                  {user.nama_peserta}
                </span>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col justify-center items-center shadow-md border border-[#e7e7e7] rounded-2xl px-3 py-8 gap-3">
            <div className="flex w-[100px] h-[100px] overflow-hidden rounded-full bg-slate-400">
              <Images
                src={user_profile}
                className="w-[200px] h-auto object-contain"
              />
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl font-semibold">
                {user.nama_peserta}
              </span>

              <span className="text-lg">{user.email}</span>
            </div>
            <Button
              type={"PrimaryButton"}
              onClick={() => navigate("/dashboard-peserta")}
              text={"Kembali"}
              className="bg-[#1283b6] text-white  w-max text-start"
            />
          </div>
          <div className="col-span-2 flex flex-col shadow-md border border-[#e7e7e7] rounded-2xl px-8 py-8 gap-6">
            <h1 className="text-3xl font-bold">Profil Peserta</h1>

            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-8 text-lg">
                <span className="text-lg">NIK/NIM</span>
                {/*  <span>:</span> */}:{" "}
                {user?.no_reg ? (
                  user.no_reg
                ) : (
                  <span className="text-[#d4d4d4]">Belum diatur</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8 text-lg">
                <span className="text-lg">No. hp</span>
                {/*  <span>:</span> */}:{" "}
                {user?.no_hp ? (
                  user.no_hp
                ) : (
                  <span className="text-[#d4d4d4]">Belum diatur</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8 text-lg">
                <span className="text-lg">Tgl. Lahir</span>
                {/*  <span>:</span> */}:{" "}
                {user?.tgl_lahir ? (
                  user.tgl_lahir
                ) : (
                  <span className="text-[#d4d4d4]">Belum diatur</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8 text-lg">
                <span className="text-lg">Jenis Kelamin</span>
                {/*  <span>:</span> */}:{" "}
                {user?.gender ? (
                  user.gender
                ) : (
                  <span className="text-[#d4d4d4]">Belum diatur</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8 text-lg">
                <span className="text-lg">Instansi</span>
                {/* <span>:</span> */}
                <span className={`text-lg `}>
                  :{"  "}
                  {user?.Instansi ? (
                    user.Instansi
                  ) : (
                    <span className="text-[#d4d4d4]">Belum diatur</span>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-8 text-lg">
                <span className="text-lg">Alamat</span>
                {/* <span>:</span> */}
                <span className="text-lg">
                  :{"  "}
                  {user?.Alamat ? (
                    user.Alamat
                  ) : (
                    <span className="text-[#d4d4d4]">Belum diatur</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* <table className="font-semibold text-gray-800 mx-5">
            <tr className="pt-4">
              <td>
                <span className="text-xl">NIK/NIM</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.no_reg}</span>
              </td>
            </tr>
            <tr className="pt-8">
              <td>
                <span className="text-xl">Nama Peserta</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.nama_peserta}</span>
              </td>
            </tr>
            <tr className="pt-4">
              <td>
                <span className="text-xl">Email</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.email}</span>
              </td>
            </tr>
            <tr className="pt-4">
              <td>
                <span className="text-xl">No. HP</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.no_hp}</span>
              </td>
            </tr>
            <tr className="pt-4">
              <td>
                <span className="text-xl">Tgl. Lahir</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.tgl_lahir}</span>
              </td>
            </tr>
            <tr className="pt-4">
              <td>
                <span className="text-xl">Jenis Kelamin</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.gender}</span>
              </td>
            </tr>
            <tr className="pt-4">
              <td>
                <span className="text-xl">Instansi</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.instansi}</span>
              </td>
            </tr>
            <tr className="pt-4">
              <td>
                <span className="text-xl">Alamat</span>
              </td>
              <td className="pl-2">
                <span className="text-lg">: {user.alamat}</span>
              </td>
            </tr>
          </table> */}

          {/* <Button
            type={"PrimaryButton"}
            onClick={() => navigate("/dashboard-peserta")}
            text={"Kembali"}
            className="bg-[#1283b6] text-white my-10 mx-5 w-max"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePeserta;
