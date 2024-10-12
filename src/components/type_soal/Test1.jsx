import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Timer, Button } from "../atoms";

function Test1(props) {
  const {
    test,
    pageTitle,
    pageSubtitle,
    title,
    subTitle,
    a,
    b,
    c,
    d,
    no,
    timer,
    handle,
    edited,
    id_soal,
  } = props;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setDisabledButton(false);
  };

  const words = title.split(" ");

  const joinQuestionAnswer = words.map((part) => {
    if (part === a) {
      return (
        <div>
          <div
            onClick={() => handleAnswer("a")}
            className="flex flex-col gap-1 w-max justify-center items-center pr-2"
          >
            <button
              className={`underline underline-offset-1 w-max ${
                selectedAnswer == "a" ? " text-blue-400" : "text-gray-800"
              }`}
              key={part}
            >
              {part}
            </button>
            <span
              className={`relative w-9 h-9 flex justify-center items-center p-2 rounded-full cursor-pointer ${
                selectedAnswer == "a"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-800 ring-1 ring-gray-800"
              }`}
            >
              A
            </span>
          </div>
          &nbsp;
        </div>
      );
    } else if (part === b) {
      return (
        <div>
          <div
            onClick={() => handleAnswer("b")}
            className="flex flex-col gap-1 w-max justify-center items-center pr-2"
          >
            <button
              className={`underline underline-offset-1 w-max ${
                selectedAnswer == "b" ? " text-blue-400" : "text-gray-800"
              }`}
              key={part}
            >
              {part}
            </button>
            <span
              className={`relative w-9 h-9 flex justify-center items-center p-2 rounded-full cursor-pointer ${
                selectedAnswer == "b"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-800 ring-1 ring-gray-800"
              }`}
            >
              B
            </span>
          </div>
          &nbsp;
        </div>
      );
    } else if (part === c) {
      return (
        <div>
          <div
            onClick={() => handleAnswer("c")}
            className="flex flex-col gap-1 w-max justify-center items-center pr-2"
          >
            <button
              className={`underline underline-offset-1 w-max  ${
                selectedAnswer == "c" ? " text-blue-400" : "text-gray-800"
              }`}
              key={part}
            >
              {part}
            </button>
            <span
              className={`relative w-9 h-9 flex justify-center items-center p-2 rounded-full cursor-pointer ${
                selectedAnswer == "c"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-800 ring-1 ring-gray-800"
              }`}
            >
              C
            </span>
          </div>
          &nbsp;
        </div>
      );
    } else if (part === d) {
      return (
        <span>
          <span
            onClick={() => handleAnswer("d")}
            className="flex flex-col gap-1 w-max justify-center items-center pr-2"
          >
            <button
              className={`underline underline-offset-1 w-max  ${
                selectedAnswer == "d" ? " text-blue-400" : "text-gray-800 "
              }`}
              key={part}
            >
              {part}
            </button>
            <span
              className={`relative w-9 h-9 flex justify-center items-center p-2 rounded-full cursor-pointer ${
                selectedAnswer == "d"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-800 ring-1 ring-gray-800"
              }`}
            >
              D
            </span>
          </span>
          &nbsp;
        </span>
      );
    } else {
      return <span>{part}&nbsp;</span>;
    }
  });

  return (
    <>
      {/* header */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-4 m-4">
            <div className="flex items-end gap-1">
              <div className="flex items-center">
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-semibold ml-4">
                    {pageTitle}
                  </span>
                  <span className="text-lg font-semibold ml-2">
                    {pageSubtitle == "-" ? "" : pageSubtitle}
                  </span>
                </div>
                <div className="ml-2 px-3 py-1 rounded-full bg-slate-800">
                  <span className="text-lg font-semibold text-white">{no}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-end items-end">
              <span className="text-lg bg-slate-400 flex w-max px-3 py-1 rounded-lg">
                <Timer timeLeft={timer} />
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col gap-4 px-8 py-5">
            <div className="text-xl  flex flex-row">{joinQuestionAnswer}</div>
            <p className="font-semibold text-xl">
              {subTitle == "-" ? "" : subTitle}
            </p>
          </div>
        </div>

        <div className="flex justify-between m-4">
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
            className={
              disabledButton
                ? "bg-slate-500 cursor-not-allowed"
                : "bg-[#1283b6]"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Test1;
