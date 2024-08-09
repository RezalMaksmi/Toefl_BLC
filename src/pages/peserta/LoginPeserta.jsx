import React, { useEffect, useState } from "react";
import { Images } from "../../assets";
import { Input, Text } from "../../components/atoms";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPeserta = () => {
    const [nik, setNik] = useState("");
    const [kode, setKode] = useState("");
    const {status, error} = "";
    const token_user = sessionStorage.getItem('token_user');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!nik || !kode) {
          toast.error("NIK dan kode tidak boleh kosong!", {
            position: "bottom-right",
          });
          return;
        }

        const backendURL = "http://localhost:8000";

        axios.post(
            `${backendURL}/user/login`,
            {
                'nik': nik,
                'kode': kode
            }
        ).then((response) => {
            if(response.data.success == true){
                toast.success(
                    `${response.data.message}`, 
                    {position: "bottom-right"}
                );
                sessionStorage.setItem('token_user', response.data.data.token);
                sessionStorage.setItem('peserta_id', response.data.data.id);
                navigate("/dashboard-peserta");
            }else{
                toast.error(
                    `${response.data.message}`, 
                    {position: "bottom-right"}
                );
                return;
            }
        }).catch((error) =>{
            toast.error(
                `${error}`, 
                {position: "bottom-right"}
            );
            return;
        });
      };

      useEffect(() => {
        if(token_user != null){
            navigate('/dashboard-peserta');
        }
      },[token_user, status]);

    return (
        <div className="w-full h-screen  flex justify-center ">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:px-[70px] w-full">
                <div className="flex flex-col bg-neutral-200 bg-opacity-50 rounded-[30px] px-[46px] py-[46px] max-w-[660px] w-full">
                    <Text
                        className="font-semibold text-center text-[40px] lg:text-[35px] w-full text-darkgray"
                        text="Log in"
                    />
                    <br />
                    <div className="w-full d-flex justify-center items-center">
                        <Input
                            placeholder="Enter Your NIK"
                            onChange={(e) => setNik(e.target.value)}
                            name="nik"
                            type="text"
                            typeInput="InputWithIcon"
                        />
                        <p className="text-red-500">{ }</p>
                        <br />
                        <Input
                            placeholder="Enter Your Kode"
                            name="kode"
                            onChange={(e) => setKode(e.target.value)}
                            type="text"
                            typeInput="InputWithIcon"
                        />
                        <p className="text-red-500">{ }</p>
                        <br />
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 text-xl bg-[#1283B6] text-white rounded-lg flex items-center justify-center "
                        >
                            {status === "loading" ? (
                                <>
                                    <div className="animate-spin">
                                        <BiLoaderAlt />
                                    </div>
                                </>
                            ) : (
                                "Masuk"
                            )}
                        </button>
                        {error}
                    </div>
                </div>
                <div className=" w-full h-[700px] relative">
                    <Images type="vektor1" className="absolute h-[100%] right-0 " />
                </div>
            </div>
        </div>
    );
};

export default LoginPeserta;