import React, { useState } from "react";
import {  Input, Text } from "../components/atoms";

// import {  useSelector } from "react-redux"
import {Accounts} from '../data'
import { useNavigate } from "react-router-dom";
import { Images } from "../assets";

const LoginAdmin = () => {
  // const {  users } = useSelector((state) => state.getAPI);
  // const dispatch = useDispatch();
  // const [progress, setProgress] = useState(0);
console.log(Accounts)

  const navigate = useNavigate();



  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  // const [isLoading, setIsLoading] = useState(false);

  // users.map((item, key) => {
  //   console.log(item.username[key])
  // } )
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formLogin;

    if (email.length < 5 || password.length < 5) {
      setError({
        email: email.length < 5 ? "Email must be at least 5 characters" : "",
        password:
          password.length < 5 ? "Password must be at least 5 characters" : "",
      });
      return;
    }
    // console.log(email)
    // console.log(password)
    
    if (email === "user@gmail.com" && password === "user123") {
      loginUser("user");
    } else if (email === "admin@gmail.com" && password === "admin123") {
      loginUser("admin");
    } else {
      setError({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
    }
  };
  const loginUser = (role) => {
    setTimeout(() => {
      const token = "akmsdnfydtaja3kjeq8d9";
      const userData = { token, role };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(role === "admin" ? "/dashboard" : "/");
    }, 2000);
  };

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormLogin({ ...formLogin, [name]: value });

      if (value.length > 5) {
        setError({ ...error, [name]: "" });
      }
    } catch (error) {
      throw error;
    }
  };
 
  return (
    <div className="w-full h-screen  flex justify-center ">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:px-[70px] w-full">
   
        <div className="flex flex-col bg-neutral-200 bg-opacity-50 rounded-[30px] px-[46px] py-[46px] max-w-[660px] w-full">
          <Text
            className="font-semibold text-center text-[40px] lg:text-[48px] w-full text-darkgray"
            text="Log in"
          />
          <br />
          <form onSubmit={handleLogin} className="w-full d-flex justify-center items-center">
            <Input 
              placeholder="Enter Your Email"
              onChange={handleChange}
              name="email"
              value={formLogin.email}
              type="text"
              typeInput="InputWithIcon"
              
              
            />
            <p className="text-red-500">{error.email}</p>
            <br />
            <Input
              placeholder="Enter Your Password"
              onChange={handleChange}
              name="password"
              value={formLogin.password}
              type="password"
              typeInput="InputWithIcon"
             
            />
            <p className="text-red-500">{error.password}</p>
            <br />
            <button className="px-10 py-2 text-2xl bg-[#1283B6] text-white rounded-lg flex items-center justify-center bg-slate-300">
                Log in
            </button>
          </form>
        </div>
        <div className=" w-full h-[700px] relative">
          <Images type="vektor1" className="absolute h-[100%] right-0 "/>
        </div>
        </div>
    </div>
  );
};

export default LoginAdmin;
