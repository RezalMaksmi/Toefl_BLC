import React, { useState, useEffect, useRef } from "react";
import { Images } from "../../assets";
import OutsideClick from "./OutsideClick";

function CardProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <OutsideClick onOutsideClick={closeDropdown}>
      <div
        className="h-[50px] rounded-full pr-5 gap-2 border-2 border-neutral-500  flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-full p-1 ">
          <Images type="profile" className="h-full w-max" />
        </div>
        <div className="flex flex-col ">
          <span className="font-semibold">Admin</span>
        </div>
      </div>

      {isOpen && (
        <div className="z-20 absolute top-[65px] flex flex-col right-[50px] gap-1 bg-white py-4 px-6 border shadow-md rounded-lg">
          <span className="font-semibold">Admin</span>
          <button className="px-3 py-1 text-[#fff] bg-[#2fa1bd] hover:bg-[#245f6e] rounded-md flex max-w-max mt-2">
            Edit Profil
          </button>
        </div>
      )}
    </OutsideClick>
  );
}

export default CardProfile;
