// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { LuAlignRight,LuX } from "react-icons/lu";


import { Button } from "../atoms";
import { Images } from "../../assets";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

  const { loading, users,products } = useSelector((state) => state.getAPI);

  let navigate = useNavigate(); 
  const location = useLocation();
  const { pathname } = location;

console.log(pathname)
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData"); 
    console.log(user)
    return user ? JSON.parse(user) : {};
  };
 
  const { token, role } = getUserDataFromLocalStorage();
  

  
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login")
  };

  console.log(localStorage)



  
  return (
    <>
      {pathname === "/dashboard" ? (
          <div className={`px-3  pt-4 h-screen w-20 bg-[#E3F1FF] transition-all fixed ${active ? `w-[250px]` : ``}`} >
            <div className="text-[#1283B6] text-2xl rounded-sm w-full flex justify-center" onClick={() => setActive(!active)}>
              {active ? <LuX />  : <LuAlignRight />}
            </div>
          </div>
      ) : (
      pathname !== "/dashboard" && (
    <section className="bg-white border py-2 fixed w-full z-10 ">
      <div className="max-w-[1800px] max-h-[80px]  w-full h-full mx-auto px-10 lg:px-40   lg:py-3 flex justify-between relative items-center ">
        <div className="h-[80px]">
        <Images type="logo" className="h-full px-6  " />
        </div>
        <ul
            className={`${
              active
                ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2"
                : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2"
            } `}
          >
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="/" className={pathname === "/" ? "borderr_active " : "w-full max-[1000px]:px-3"}>
                Home
              </Link>
            </li>
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="product" className={pathname === "/product" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
                Product
              </Link>
            </li>
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="saved" className={pathname === "/saved" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
                Saved
              </Link>
            </li>
            <li className="h-full flex justify-center items-center borderr ">
                {role === "admin" ? (
                    <Link
                      to="/rekap"
                      className={pathname === "/rekap" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
                      Rekap Penjualan
                    </Link>
                ) : (
                  role === "user" && (
                      <Link
                        to="/cart"
                        className={pathname === "/cart" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
                        Cart
                      </Link>
                  )
                )}
              </li>
        </ul>
        <div className="hidden  max-[1000px]:contents w-[30px] h-[30px] text-2xl" onClick={() => setActive(!active)}>
          {active ? <LuAlignRight /> : <LuX/>}
        </div>
        
        {token ? (
        // <Button 
        // text={"Logout"}
        // type={"black"}
        // className={"flex items-center justify-center"}
        // onClick={handleLogout} />
        <>
        <h1>

        {users.username}
        </h1>

        <button className="px-5 py-2 rounded-lg  font-semibold border bg-red-800 text-white " onClick={handleLogout}>
          Logout
        </button>
        </>
        
     ) : (
      <Link to="login" className={pathname === "/login" ? "borderr_active px-5 py-2 rounded-lg  font-semibold bg-white border text-black" : "px-5 py-2 rounded-lg  font-semibold bg-white border text-black"}>
        Login
      </Link>
      )}
      </div>
     
    
    </section>
      )
      )}
    
    </>
    
  )
}

export default Navbar;
