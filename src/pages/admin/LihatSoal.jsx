import React from "react";
import { Button } from "../../components";
import { LayoutAdmin } from "../../template";

const LihatSoal = () => {
  return (
    <LayoutAdmin>
      <div className=" bg-white mx-auto w-full h-auto">
        <div className="w-auto h-full px-10 py-10 flex flex-col justify-start items-end gap-10">
          <div className="bg-[#f8f8f8] w-full h-full shadow-md border col-span-1 rounded-3xl px-2 py-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl flex justify-center items-center text-white rounded-full bg-slate-600 w-10 h-10">
                  1
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-end items-end">
                <span className="text-lg bg-slate-400 flex w-max px-3 py-1 rounded-lg">
                  1:55
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 px-8 py-5">
              <span className="text-base ">
                On last Wednesday, I’ve got unforgettable experience. The day
                before, I played game on-line until 00.00 am. Because of that I
                woke up late. It was about 7.30 am and the class would be
                started at 8.00 am. I ran to bathroom to take a bath. I used to
                have breakfast before leaving home, but on that day It was
                impossible. I always rode motorcycle to go. But what an amazing
                thing happened, I forgot where I put the key. So, I went to
                campus by public transportation. Of course, it took longer time.
                I arrived at 8.15 am, I hurried to get to class but I saw my
                lecturer standing in front of the class to teach. I entered my
                classroom and you know what, he was angry to me and didn’t let
                me join his material. It was my bad experience and I hoped I
                would not do that again. <br />
                <br /> 1. What can we learn from the text ?
              </span>

              <div className="grid grid-cols-2 gap-8 mt-6 uhuo">
                <button className="flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg">
                  A. We have to have breakfast every morning
                </button>
                <button className="flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg">
                  A. We have to have breakfast every morning
                </button>
                <button className="flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg">
                  A. We have to have breakfast every morning
                </button>
                <button className="flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg">
                  A. We have to have breakfast every morning
                </button>
              </div>
            </div>
          </div>

          <Button
            type="PrimaryButton"
            text="Next >"
            className="bg-[#eeeeee]  text-[#383838]"
          />
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default LihatSoal;
