import React, { useState } from "react";
import { Button, Timer } from "../atoms";
import { Link } from "react-router-dom";

function Example(props) {
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
    timer,
    handle,
    edited,
    id_soal,
  } = props;
  const [disabledButton, setDisabledButton] = useState(true);

  // State atau logika untuk mengelola jawaban yang dipilih
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // Fungsi untuk menangani pemilihan jawaban
  const handleAnswer = (answer) => {
    // Logika untuk memeriksa jawaban dan memanggil onAnswer
    setSelectedAnswer(answer);
    setDisabledButton(false);
    // onAnswer(answer === question.correctAnswer);
  };
  return (
    <>
      {/* header */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between m-4">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-semibold ml-4">{pageTitle}</span>
              <span className="text-lg font-semibold ml-2">
                {pageSubtitle == "-" ? "" : pageSubtitle}
              </span>
            </div>
            <div className="flex flex-col gap-1 justify-end items-end">
              <span className="text-lg bg-slate-400 flex w-max px-3 py-1 rounded-lg">
                <Timer timeLeft={timer} />
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col gap-2 px-8 py-5">
            <span className="text-xl ">{title == "-" ? "" : title}</span>
            <p className="font-semibold text-xl">
              {subTitle == "-" ? "" : subTitle}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6 text-xl">
              <button
                onClick={() => handleAnswer("a")}
                className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${
                  selectedAnswer == "a" ? "bg-blue-700 text-white" : ""
                }`}
              >
                {"A. " + a}
              </button>
              <button
                onClick={() => handleAnswer("b")}
                className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${
                  selectedAnswer == "b" ? "bg-blue-700 text-white" : ""
                }`}
              >
                {"B. " + b}
              </button>
              <button
                onClick={() => handleAnswer("c")}
                className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${
                  selectedAnswer == "c" ? "bg-blue-700 text-white" : ""
                }`}
              >
                {"C. " + c}
              </button>
              <button
                onClick={() => handleAnswer("d")}
                className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${
                  selectedAnswer == "d" ? "bg-blue-700 text-white" : ""
                }`}
              >
                {"D. " + d}
              </button>
            </div>
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
            disable={disabledButton}
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

export default Example;
