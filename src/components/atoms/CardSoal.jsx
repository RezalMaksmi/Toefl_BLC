import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { BiPause, BiPlay } from "react-icons/bi";

const CardSoal = (props) => {
  const {
    handleFileChange,
    isPlaying,
    handlePlayPause,
    audioRef,
    audioSrc,
    typeFuction,
    className,
    type,
    text,
    title,
    page_Title,
    page_Subtitle,
    subtitle,
    content,
    p_title,
    paragraph,
    no,
    a,
    b,
    c,
    d,
    typeCard,
    submit,
    pageTitle,
    pageSubTitle,
    subTitleValue,
    titleValue,
    contentValue,
    paragraphValue,
    p_titleValue,
    noValue,
    aValue,
    bValue,
    cValue,
    dValue,
    keyQuiz,
    keyValue,
    addQuiz,
    handleDelete,
    handleEdit,
    handleUpdate,
    audio,
    id_soal,
    description,
    handleNext,
    handleBack,
    test,
  } = props;
  const navigate = useNavigate();

  console.log(audio);
  switch (type) {
    case "paragraph":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
                {test}
              </h1>
              <span> - {type}</span>
            </div>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
              onClick={() => navigate(`/lihat-soal/${id_soal}`)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title {pageTitle}</span>
              <input
                type="text"
                name="pagetitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                value={pageTitle}
                onChange={page_Title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                name="pageSubtitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
                value={pageSubTitle}
                onChange={page_Subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">paragraph Title</span>
              <textarea
                type="text"
                name="p_title"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-10"
                placeholder="Title Paragraph..."
                value={p_titleValue}
                onChange={p_title}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Paragraph</span>
              <textarea
                type="text"
                name="paragraph"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-20"
                placeholder="Pertanyaan..."
                value={paragraphValue}
                onChange={paragraph}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-4">
              <span className="text-lg">A</span>
              <input
                type="text"
                name="a"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={aValue}
                onChange={a}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">B</span>
              <input
                type="text"
                name="b"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={bValue}
                onChange={b}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">C</span>
              <input
                type="text"
                name="c"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={cValue}
                onChange={c}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">D</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={dValue}
                onChange={d}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-4">
              <span className="text-lg">Key</span>
              <input
                type="text"
                name="keyQuiz"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={keyValue}
                onChange={keyQuiz}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg">Audio</span>

              <div className="flex flex-row gap-4">
                {/* <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className=" rounded-md px-3 py-1 text-lg"
                  placeholder=""
                /> */}
                {audioSrc || typeFuction === "update" ? (
                  <></>
                ) : (
                  <span className="text-[#d33]">Audio belum ditambahkan</span>
                )}
                <audio ref={audioRef} src={audioSrc} />
                {typeFuction === "update" && (
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className=" rounded-md px-3 py-1 text-lg"
                    placeholder=""
                  />
                )}
                {audio && (
                  <button
                    className="text-lg bg-slate-600 text-white px-3 rounded-md flex justify-center items-center gap-2"
                    onClick={handlePlayPause}
                  >
                    {!isPlaying ? <BiPlay /> : <BiPause />} Check Shound
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button onClick={handleBack}>{"< Back"}</button>
              <button onClick={handleNext}>{"Next >"}</button>
            </div>
            {addQuiz == true ? (
              <div className="flex justify-end">
                <Button
                  type="PrimaryButton"
                  text="Submit"
                  onClick={submit}
                  className="bg-[#1283B6] text-white w-max"
                />
              </div>
            ) : (
              <div className="flex flex-row justify-end gap-4">
                {typeFuction === "update" ? (
                  <Button
                    type="PrimaryButton"
                    text="Simpan Perubahan"
                    onClick={handleUpdate}
                    className="bg-[#1283B6] text-white"
                  />
                ) : (
                  <>
                    <Button
                      type="PrimaryButton"
                      text="Hapus"
                      onClick={handleDelete}
                      className="bg-[#FF4E4E] text-white"
                    />
                    <Button
                      type="PrimaryButton"
                      text="Edit"
                      onClick={handleEdit}
                      className="bg-[#1283B6] text-white"
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      );

    case "test":
    case "test1":
    case "example":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
                {test}
              </h1>
              <span> - {type}</span>
            </div>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title </span>
              <input
                type="text"
                name="pagetitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                value={pageTitle}
                onChange={page_Title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                name="pageSubtitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
                value={pageSubTitle}
                onChange={page_Subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg"> Title</span>
              <textarea
                type="text"
                name="title"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-10"
                placeholder="Title Paragraph..."
                value={titleValue}
                onChange={title}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">subtitle</span>
              <textarea
                type="text"
                name="subTitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-10"
                placeholder="Subtitle..."
                value={subTitleValue}
                onChange={subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-4">
              <span className="text-lg">A</span>
              <input
                type="text"
                name="a"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={aValue}
                onChange={a}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">B</span>
              <input
                type="text"
                name="b"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={bValue}
                onChange={b}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">C</span>
              <input
                type="text"
                name="c"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={cValue}
                onChange={c}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">D</span>
              <input
                type="text"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={dValue}
                onChange={d}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-row gap-4">
              <span className="text-lg">Key</span>
              <input
                type="text"
                name="keyQuiz"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={keyValue}
                onChange={keyQuiz}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-lg">no</span>
              <input
                type="text"
                name="no"
                className="border border-text_color rounded-md px-3 py-1 text-lg w-full"
                placeholder=""
                value={noValue}
                onChange={no}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button onClick={handleBack}>{"< Back"}</button>
              <button onClick={handleNext}>{"Next >"}</button>
            </div>
            {addQuiz == true ? (
              <div className="flex justify-end">
                <Button
                  type="PrimaryButton"
                  text="Submit"
                  onClick={submit}
                  className="bg-[#1283B6] text-white w-max"
                />{" "}
              </div>
            ) : (
              <div className="flex flex-row justify-end gap-4">
                {typeFuction === "update" ? (
                  <Button
                    type="PrimaryButton"
                    text="Simpan Perubahan"
                    onClick={handleUpdate}
                    className="bg-[#1283B6] text-white"
                  />
                ) : (
                  <>
                    <Button
                      type="PrimaryButton"
                      text="Hapus"
                      onClick={handleDelete}
                      className="bg-[#FF4E4E] text-white"
                    />
                    <Button
                      type="PrimaryButton"
                      text="Edit"
                      onClick={handleEdit}
                      className="bg-[#1283B6] text-white"
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      );

    case "question":
    case "blank":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
                {test}
              </h1>
              <span> - {type}</span>
            </div>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
              onClick={() => navigate(`/lihat-soal/${id_soal}`)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title</span>
              <input
                type="text"
                name="pagetitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                value={pageTitle}
                onChange={page_Title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                name="pageSubtitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
                value={pageSubTitle}
                onChange={page_Subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Title</span>
              <input
                type="text"
                name="title"
                className="border border-text_color rounded-md px-3 py-1 text-lg "
                placeholder="Title..."
                value={titleValue}
                onChange={title}
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg">Subtitle</span>
              <textarea
                type="text"
                name="subTitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-20"
                placeholder="Subtitle..."
                value={subTitleValue}
                onChange={subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg">Audio</span>

              <div className="flex flex-row gap-4">
                {audioSrc || typeFuction === "update" ? (
                  <></>
                ) : (
                  <span className="text-[#d33]">Audio belum ditambahkan</span>
                )}
                <audio ref={audioRef} src={audioSrc} />
                {typeFuction === "update" && (
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className=" rounded-md px-3 py-1 text-lg"
                    placeholder=""
                  />
                )}
                {audio && (
                  <button
                    className="text-lg bg-slate-600 text-white px-3 rounded-md flex justify-center items-center gap-2"
                    onClick={handlePlayPause}
                  >
                    {!isPlaying ? <BiPlay /> : <BiPause />} Check Shound
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button onClick={handleBack}>{"< Back"}</button>
              <button onClick={handleNext}>{"Next >"}</button>
            </div>
            {addQuiz == true ? (
              <div className="flex justify-end">
                <Button
                  type="PrimaryButton"
                  text="Submit"
                  onClick={submit}
                  className="bg-[#1283B6] text-white w-max"
                />{" "}
              </div>
            ) : (
              <div className="flex flex-row justify-end gap-4">
                {typeFuction === "update" ? (
                  <Button
                    type="PrimaryButton"
                    text="Simpan Perubahan"
                    onClick={handleUpdate}
                    className="bg-[#1283B6] text-white"
                  />
                ) : (
                  <>
                    <Button
                      type="PrimaryButton"
                      text="Hapus"
                      onClick={handleDelete}
                      className="bg-[#FF4E4E] text-white"
                    />
                    <Button
                      type="PrimaryButton"
                      text="Edit"
                      onClick={handleEdit}
                      className="bg-[#1283B6] text-white"
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      );

    case "card":
      return (
        <div className="flex flex-col gap-6 p-4 h-full">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-2xl font-semibold border-b-4 border-[#4BABD6]">
                {test}
              </h1>
              <span> - {type}</span>
            </div>
            <Button
              type="PrimaryButton"
              text="Lihat Soal"
              className="bg-[#17948B] "
              onClick={() => navigate(`/lihat-soal/${id_soal}`)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Title</span>
              <input
                type="text"
                name="pagetitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Title..."
                value={pageTitle}
                onChange={page_Title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg">Page Subtitle</span>
              <input
                type="text"
                name="pageSubtitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg"
                placeholder="Subtitle..."
                value={pageSubTitle}
                onChange={page_Subtitle}
              />
            </div>
          </div>

          <div className="grid grid-cols gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg">Title</span>
              <input
                type="text"
                name="title"
                className="border border-text_color rounded-md px-3 py-1 text-lg "
                placeholder="Title..."
                value={titleValue}
                onChange={title}
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg">Subtitle</span>
              <textarea
                type="text"
                name="subTitle"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-14"
                placeholder="Subtitle..."
                value={subTitleValue}
                onChange={subtitle}
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg">Content</span>
              <textarea
                type="text"
                name="content"
                className="border border-text_color rounded-md px-3 py-1 text-lg h-20"
                placeholder="Content..."
                value={contentValue}
                onChange={content}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg">Audio</span>

              <div className="flex flex-row gap-4">
                {/* <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className=" rounded-md px-3 py-1 text-lg"
                  placeholder=""
                /> */}
                {audioSrc || typeFuction === "update" ? (
                  <></>
                ) : (
                  <span className="text-[#d33]">Audio belum ditambahkan</span>
                )}
                <audio ref={audioRef} src={audioSrc} />
                {typeFuction === "update" && (
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className=" rounded-md px-3 py-1 text-lg"
                    placeholder=""
                  />
                )}
                {audio && (
                  <button
                    className="text-lg bg-slate-600 text-white px-3 rounded-md flex justify-center items-center gap-2"
                    onClick={handlePlayPause}
                  >
                    {!isPlaying ? <BiPlay /> : <BiPause />} Check Shound
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-5">
              <button onClick={handleBack}>{"< Back"}</button>
              <button onClick={handleNext}>{"Next >"}</button>
            </div>
            {addQuiz == true ? (
              <div className="flex justify-end">
                <Button
                  type="PrimaryButton"
                  text="Submit"
                  onClick={submit}
                  className="bg-[#1283B6] text-white w-max"
                />
              </div>
            ) : (
              <div className="flex flex-row justify-end gap-4">
                {typeFuction === "update" ? (
                  <Button
                    type="PrimaryButton"
                    text="Simpan Perubahan"
                    onClick={handleUpdate}
                    className="bg-[#1283B6] text-white"
                  />
                ) : (
                  <>
                    <Button
                      type="PrimaryButton"
                      text="Hapus"
                      onClick={handleDelete}
                      className="bg-[#FF4E4E] text-white"
                    />
                    <Button
                      type="PrimaryButton"
                      text="Edit"
                      onClick={handleEdit}
                      className="bg-[#1283B6] text-white"
                    />
                  </>
                )}
              </div>
            )}
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
