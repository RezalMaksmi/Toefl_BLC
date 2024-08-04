import axios from "axios";
import React, {useState, useEffect} from "react";

const ProfilePeserta = () => {
    const [user, setUser] = useState([]);

    const token = sessionStorage.getItem('peserta_id');

    const fetchUser = async () => {
        const response = await axios.get(`http://localhost:8000/user/result/${token}`);
        setUser(response.data.data);
        console.log(user.data);
    }

    useEffect(() =>{
        fetchUser();
    }, []);
    
    return(
        <div className="w-full h-auto flex flex-col justify-center">
            <div className="mt-[75px] grid grid-cols-6 gap-10 lg:px-[70px] w-full">
                
            </div>
        </div>
    );
};

export default ProfilePeserta;