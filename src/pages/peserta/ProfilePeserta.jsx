import axios from "axios";
import React, {useState, useEffect} from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import user_profile from "../../assets/img/default-profile.png";
import { Images } from "../../assets";

const ProfilePeserta = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const token = sessionStorage.getItem('peserta_id');

    const fetchUser = async () => {
        const response = await axios.get(`http://localhost:8000/user/result/${token}`);
        setUser(response.data.data);
    }

    useEffect(() =>{
        fetchUser();
    }, []);
    
    return(
        <div className="w-full h-auto flex flex-col justify-center">
            <div className="mt-[75px] gap-10 lg:px-[220px] w-full">
                <div className="px-4 py-8 my-10 rounded-lg shadow-lg">
                    <h2 className="text-gray-800 font-bold text-2xl mx-5 my-3">Profile Peserta </h2>
                    <Images src={user_profile} className="h-[200px] " />
                    <table className="font-semibold text-gray-800 mx-5">
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
                    </table>
                    <Button
                        type={"PrimaryButton"}
                        onClick={() => navigate('/dashboard-peserta')}
                        text={"Kembali"}
                        className="bg-[#1283b6] text-white my-10 mx-5"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfilePeserta;