import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Loading } from "../../components";

const StartTestPeserta = () => {
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const navigate = useNavigate();

    const handleStartTest = (e) => {
        e.preventDefault();
        sessionStorage.setItem('listening', 0);
        sessionStorage.setItem('structure', 0);
        sessionStorage.setItem('reading', 0);
        sessionStorage.setItem('index', 0);
        navigate(`/test-peserta/${params.test}`);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className=" bg-white mx-auto w-full h-auto mt-[75px] lg:px-[70px]">
                <div className="w-auto h-full px-10 py-10 flex justify-center items-end gap-10">
                    <div className="bg-[#f8f8f8] w-2/3 h-full shadow-md border col-span-1 rounded-3xl px-2 py-2 relative">
                        <div className="py-6 px-10">
                            <h2 className="text-center font-semibold text-2xl">Starting Test</h2>
                            <div className="py-10">
                                {isLoading ?
                                    (
                                        <Loading type={"startTest"} />
                                    ) : (
                                        <>
                                            <div className="flex flex-col items-center justify-center w-full">
                                                <p className="text-gray-800 font-semibold text-xl">Silahkan klik tombol dibawah ini untuk memulai test.</p>
                                                <Button onClick={(e) => handleStartTest(e)} className={"bg-slate-700 mt-10 hover:bg-slate-800"} type={"PrimaryButton"} text={"Mulai Test"} />
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartTestPeserta;