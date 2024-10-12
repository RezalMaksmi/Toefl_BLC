import React from "react"
import { Timer, Button } from "../atoms";
import {Link} from "react-router-dom";

function Question(props) {
    const {test, pageTitle, pageSubtitle, title, subTitle, timer, handle, edited, id_soal} = props;
    return (
        <>
        {/* header */}
        <div className="grid grid-cols-2 gap-4 m-4">
                <div className="flex items-end gap-1">
                    <span className="text-2xl font-semibold ml-4">
                        {pageTitle}
                    </span>
                    <span className="text-lg font-semibold ml-2">
                        {pageSubtitle == '-' ? '' : pageSubtitle}
                    </span>
                </div>
                <div className="flex flex-col gap-1 justify-end items-end">
                    <span className="text-lg bg-slate-400 flex w-max px-3 py-1 rounded-lg">
                        <Timer timeLeft={timer} />
                    </span>
                </div>
            </div>

            {/* content */}
            <div className="grid grid-cols-1 gap-4 px-8 py-5">
                <span className="text-base ">
                    {title == '-' ? '' : title}
                </span>
                <p className="font-semibold">{subTitle == '-' ? '' : subTitle}</p>
            </div>
            <div className="flex justify-end m-4">
            {edited == true ? (
          <Link to={`/tambah-soal/${id_soal}`}>
            <Button
              type={"PrimaryButton"}
              text={"Edit Soal"}
              className="bg-[#1283b6]"
            />
          </Link>
        ) : (
          "-"
        )}
                <Button
                    type={"PrimaryButton"}
                    text={"Next"}
                    onClick={handle}
                    className="bg-[#1283b6]"
                />
            </div>
        </>
    );
}

export default Question;