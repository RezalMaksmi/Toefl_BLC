import React from "react";
import { VscLoading } from "react-icons/vsc";

const Loading = ({ type }) => {
  switch (type) {
    case "foodPrices":
      return (
        <div className="border border-[#f4f4f4] shadow rounded-md p-4 flex mx-auto w-full bg-white">
          <div className="animate-pulse flex gap-5 flex-col w-full">
            <div className="w-full bg-[#bcbcbc] md:h-[270px] h-[150px] object-cover overflow-hidden rounded-lg"></div>
            <div className="flex flex-col w-full gap-4">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-[#bcbcbc] rounded col-span-2"></div>
                  <div className="h-2 bg-[#bcbcbc] rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-[#bcbcbc] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      );
    case "cardForum":
      return (
        <div className="border-b border-[#f4f4f4]  rounded-md p-4 w-full mx-auto bg-white">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-[#bcbcbc] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-3 bg-[#bcbcbc] rounded col-span-2"></div>
                  <div className="h-3 bg-[#bcbcbc] rounded col-span-1"></div>
                </div>
                <div className="h-3 bg-[#bcbcbc] rounded"></div>
                <div className="h-20 bg-[#bcbcbc] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="top-0 z-50 bottom-0 left-0 right-0 fixed flex justify-center items-center bg-dark_30 backdrop-blur-xl opacity-50">
          <div className="w-auto h-auto px-4 py-4 bg-white rounded-lg flex flex-col justify-center items-center">
            <VscLoading className="animate-spin text-2xl" />
          </div>
        </div>
      );
  }
};

export default Loading;
