import React, { useState, useEffect } from "react";
import { Button, Input, Text } from "../../components/atoms";
import { getAPIUsers } from "../../redux/fetch/Get";
import { useDispatch, useSelector } from "react-redux";
import { Accounts } from "../../data";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";
import { loginAdmin } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error, token } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Email dan password tidak boleh kosong!", {
        position: "bottom-right",
      });
      return;
    }

    dispatch(loginAdmin({ username, password }));
    // .unwrap()
    // .then((response) => {
    //   toast.success("Berhasil Masuk!", {
    //     position: "bottom-right",
    //   });
    //   navigate("/");
    // })
    // .catch((error) => {
    //   return error;
    // });
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Berhasil Masuk coy!", {
        position: "bottom-right",
      });
      navigate("/");
    }
  }, [user, token, status]);

  return (
    <div className="w-full h-screen  flex justify-center ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:px-[70px] w-full">
        <div className="flex flex-col bg-neutral-200 bg-opacity-50 rounded-[30px] px-[46px] py-[46px] max-w-[660px] w-full">
          <Text
            className="font-semibold text-center text-[40px] lg:text-[48px] w-full text-darkgray"
            text="Log in"
          />
          <br />
          <div className="w-full d-flex justify-center items-center">
            <Input
              placeholder="Enter Your Email"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
              typeInput="InputWithIcon"
            />
            <p className="text-red-500">{}</p>
            <br />
            <Input
              placeholder="Enter Your Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              typeInput="InputWithIcon"
            />
            <p className="text-red-500">{}</p>
            <br />
            <button
              onClick={handleSubmit}
              className="px-10 py-2 text-2xl bg-[#1283B6] text-white rounded-lg flex items-center justify-center "
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

export default LoginAdmin;
