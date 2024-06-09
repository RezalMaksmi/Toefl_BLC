import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className={`w-full ${token ? "bg-[#f4f4f4]" : "bg-[#E3F1FF] "} `}>
      <div className="container py-5 mx-auto px-20 flex flex-row justify-between">
        <span>Gd. INBIS Lt. 2, Jl. Veteran 10-11, Kota Malang (65145)</span>
        <span>+62-82141329712</span>
        <span>Brawijaya_language_center</span>
      </div>
    </div>
  );
};

export default Footer;
