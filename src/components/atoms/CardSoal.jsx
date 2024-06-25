import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const CardSoal = (props) => {
  const {
    onClick,
    className,
    type,
    children,
    to,
    icon,
    text,
    valueTitle,
    title,
    type_test,
    type_soal,
    test,
    page_title,
    page_subtitle,
    subtitle,
    content,
    p_title,
    paragraph,
    no,
    a,
    b,
    c,
    d,
    key,
    timer,
    submit,
  } = props;
  const navigate = useNavigate();
  switch (type) {
    case "paragraph":
    case "example":
    case "test":
    case "test1":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
              LISTENING
            </h1>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                valueTitle={valueTitle}
                onChange={page_title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
                onChange={page_subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Pertanyaan</span>
              <textarea
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-20"
                placeholder="Pertanyaan..."
                onChange={content}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-4">
              <span className="text-lg">A</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                onChange={a}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">B</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                onChange={b}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">C</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                onChange={c}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">D</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                onChange={d}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg">Audio</span>

              <div className="flex flex-row gap-4">
                <input
                  type="file"
                  className=" rounded-md px-3 py-1 text-lg"
                  placeholder=""
                />
                <button className="text-lg bg-slate-600 text-white px-3 rounded-md">
                  Check Shound
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button>{"< Back"}</button>
              <button>{"Next >"}</button>
            </div>
            <div className="flex flex-row justify-end gap-4">
              <Button
                type="PrimaryButton"
                text="Cancel"
                className="bg-[#FF4E4E] text-white"
              />
              <Button
                type="PrimaryButton"
                text="Simpan"
                onClick={submit}
                className="bg-[#1283B6] text-white"
              />
            </div>
          </div>
        </div>
      );

    case "question":
    case "blank":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
              LISTENING
            </h1>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
              onClick={() => navigate("/lihat-soal")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                valueTitle={valueTitle}
                onChange={title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Title</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg "
                placeholder="Title..."
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg">Subtitle</span>
              <textarea
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-20"
                placeholder="Subtitle..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg">Audio</span>

              <div className="flex flex-row gap-4">
                <input
                  type="file"
                  className=" rounded-md px-3 py-1 text-lg"
                  placeholder=""
                />
                <button className="text-lg bg-slate-600 text-white px-3 rounded-md">
                  Check Shound
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button>{"< Back"}</button>
              <button>{"Next >"}</button>
            </div>
            <div className="flex flex-row justify-end gap-4">
              <Button
                type="PrimaryButton"
                text="Cancel"
                className="bg-[#FF4E4E] text-white"
              />
              <Button
                type="PrimaryButton"
                text="Simpan"
                onClick={submit}
                className="bg-[#1283B6] text-white"
              />
            </div>
          </div>
        </div>
      );

    case "card":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
              LISTENING
            </h1>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                valueTitle={valueTitle}
                onChange={title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Title</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg "
                placeholder="Title..."
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg">Subtitle</span>
              <textarea
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-14"
                placeholder="Subtitle..."
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg">Content</span>
              <textarea
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-20"
                placeholder="Content..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg">Audio</span>

              <div className="flex flex-row gap-4">
                <input
                  type="file"
                  className=" rounded-md px-3 py-1 text-lg"
                  placeholder=""
                />
                <button className="text-lg bg-slate-600 text-white px-3 rounded-md">
                  Check Shound
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button>{"< Back"}</button>
              <button>{"Next >"}</button>
            </div>
            <div className="flex flex-row justify-end gap-4">
              <Button
                type="PrimaryButton"
                text="Cancel"
                className="bg-[#FF4E4E] text-white"
              />
              <Button
                type="PrimaryButton"
                text="Simpan"
                onClick={submit}
                className="bg-[#1283B6] text-white"
              />
            </div>
          </div>
        </div>
      );
    default:
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-white border text-black ${className} `}
        >
          <span>{text}</span>
        </a>
      );
  }
};

export default CardSoal;
