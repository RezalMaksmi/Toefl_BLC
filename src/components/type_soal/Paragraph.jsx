import React, { useState } from "react"
import { Timer, Button } from "../atoms";

function Paragraph(props) {
    const { test, pageTitle, pageSubtitle, title, subTitle, a, b, c, d, no, paragraph_title, paragraph, timer, handle, edited } = props;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [disabledButton, setDisabledButton] = useState(true);
    const handleAnswer = (answer) => {
        setDisabledButton(false);
        setSelectedAnswer(answer);
    };
    return (
        <>
            {/* header */}
            <div className="grid grid-cols-2 gap-4 m-4">
                <div className="flex items-center">
                    <div className="flex items-end gap-1">
                        <span className="text-2xl font-semibold ml-4">
                            {pageTitle}
                        </span>
                        <span className="text-lg font-semibold ml-2">
                            {pageSubtitle == '-' ? '' : pageSubtitle}
                        </span>
                    </div>
                    <div className="ml-2 px-3 py-1 rounded-full bg-slate-800">
                        <span className="text-lg font-semibold text-white">
                            {no}
                        </span>
                    </div>
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
                <span className="font-semibold">{paragraph_title}</span>
                <p className="font-semibold">{paragraph}</p>

                <div className="grid grid-cols-2 gap-8 mt-6">
                    <button
                        onClick={() => handleAnswer('a')}
                        className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${selectedAnswer == 'a' ? 'bg-blue-700 text-white' : ''}`}
                    >
                        {"A. " + a}
                    </button>
                    <button
                        onClick={() => handleAnswer('b')}
                        className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${selectedAnswer == 'b' ? 'bg-blue-700 text-white' : ''}`}
                        >
                        {"B. " + b}
                    </button>
                    <button
                        onClick={() => handleAnswer('c')}
                        className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${selectedAnswer == 'c' ? 'bg-blue-700 text-white' : ''}`}
                        >
                        {"C. " + c}
                    </button>
                    <button
                        onClick={() => handleAnswer('d')}
                        className={`flex justify-startw-full border-2 border-gray-500 py-3 px-3 rounded-lg font-semibold ${selectedAnswer == 'd' ? 'bg-blue-700 text-white' : ''}`}
                        >
                        {"D. " + d}
                    </button>
                </div>
            </div>
            <div className="flex justify-end m-4">
                <Button
                    type={"PrimaryButton"}
                    text={"Next"}
                    onClick={handle}
                    className={disabledButton ? 'bg-slate-500 cursor-not-allowed': 'bg-[#1283b6]'}
                />
            </div>
        </>
    );
}

export default Paragraph;