import React, { useEffect, useRef } from "react";
import { CardSoal, Loading, ShowCard } from "../../components";
import { LayoutAdmin } from "../../template";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteQuizAct,
  getDetailQuizAct,
  getQuizAct,
  getTypeQuizAct,
  postAddQuizAct,
} from "../../redux/quiz/Quiz";
import Swal from "sweetalert2";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";
import { uploadAudio } from "../../redux/features/audioSlice";

const AdminQuist = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [click, setClick] = useState("");
  const [openDetail, setOpenDetail] = useState(false);
  const [typeQuizValue, setTypeQuizValue] = useState();
  const { soal, detail, valueTypeQuiz, status, typeQuiz } = useSelector(
    (state) => state.quiz
  );

  const [idQuiz, setIdQuiz] = useState("");
  const [pagetitle, setPageTitle] = useState("");
  const [pageSubtitle, setPageSubTitle] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [type_test, setType_test] = useState(id);
  const [type_soal, setType_soal] = useState("");
  const [pTitle, setPTitle] = useState("");
  const [index, setIndex] = useState("");
  const [no, setNo] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [keyQuiz, setKeyQuiz] = useState("");
  const [timer, setTimer] = useState("");
  const [idTest, setIdTest] = useState("");
  const [test, setTest] = useState("");

  const [editSoal, setEditSoal] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("audio", selectedFile);

    try {
      const response = await axiosInstance.post(
        `/soal/upload_audio/${idQuiz}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("File uploaded successfully!");
    } catch (err) {
      setError("Error uploading file.");
    } finally {
      setUploading(false);
    }
  };

  // const [dataUpdate, setDataUpdate] = useState({
  //   type_test: type_test,
  //   type_soal: "0acd0bf2-d92b-410a-860b-671550c20904",
  //   page_title,
  //   page_subtitle,
  //   title,
  //   subtitle,
  //   content,
  //   paragraph,
  //   p_title,
  //   index,
  //   no: 21,
  //   a,
  //   b,
  //   c,
  //   key,
  //   timer,
  //   idTest,
  //   test,
  // });

  // const updateData = (property, value) => {
  //   setDataUpdate((prevState) => ({
  //     ...prevState,
  //     [property]: value,
  //   }));
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   updateData(name, value);
  // };

  // uploud audio

  const handleValue = () => {
    setIdQuiz(detail && detail.data.id);
    setPageTitle(detail && detail.data.page.title);
    setPageSubTitle(detail && detail.data.page.subtitle);
    setTitle(detail && detail.data.title.title);
    setSubTitle(detail && detail.data.title.subtitle);
    setContent(detail && detail.data.content);
    setParagraph(detail && detail.data.paragraph);
    setPTitle(detail && detail.data.paragraph);
    setNo(detail && detail.data.no);
    setA(detail && detail.data.a);
    setB(detail && detail.data.b);
    setC(detail && detail.data.c);
    setD(detail && detail.data.d);
    setKeyQuiz(detail && detail.data.key);
    setIndex(detail && detail.data.index);
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");

  const handleDetail = (idDetail) => {
    dispatch(getDetailQuizAct(idDetail));
    setOpenDetail(true);
    handleValue();
    setIdQuiz(detail && detail.data.id);

    setClick("click");
  };

  const [currentId, setCurrentId] = useState(null);

  const handleClickNext = () => {
    if (soal?.length === 0) return;

    const currentIndex = soal?.findIndex((item) => item.id === currentId);
    // Jika ID tidak ditemukan, cari ID pertama yang berbeda
    const nextIndex = (currentIndex + 1) % soal?.length; // Loop kembali jika sudah sampai akhir

    // Cek sampai menemukan ID yang valid
    let nextId = soal?.[nextIndex]?.id;
    while (nextId === currentId && nextIndex !== currentIndex) {
      const newIndex = (nextIndex + 1) % soal?.length;
      nextId = soal?.[newIndex]?.id;
    }
    setCurrentId(nextId);
    if (nextId) {
      dispatch(getDetailQuizAct(nextId));
    }
  };

  const getPreviousId = () => {
    if (soal?.length === 0) return;

    const currentIndex = soal?.findIndex((item) => item.id === currentId);
    // Jika currentIndex adalah 0, kita kembali ke akhir array
    const previousIndex = (currentIndex - 1 + soal?.length) % soal?.length;

    let previousId = soal?.[previousIndex]?.id;
    // Cek untuk memastikan ID berbeda dari currentId
    while (previousId === currentId && previousIndex !== currentIndex) {
      const newIndex = (previousIndex - 1 + soal?.length) % soal?.length;
      previousId = soal?.[newIndex]?.id;
    }

    setCurrentId(previousId);

    // Dispatch untuk mengambil soal sebelumnya
    if (previousId) {
      dispatch(getDetailQuizAct(previousId));
    }
  };

  const fetchAPI = async () => {
    idTest && dispatch(await getQuizAct(`/soal/${idTest}`));
    setIdTest(id);
    dispatch(getTypeQuizAct());
  };
  const data = {
    type_test: type_test,
    type_soal: type_soal,
    test: test,
    page_title: pagetitle,
    page_subtitle: pageSubtitle,
    title: title,
    subtitle: subTitle,
    content: content,
    p_title: pTitle,
    paragraph: paragraph,
    no: no,
    a: a,
    b: b,
    c: c,
    d: d,
    key: keyQuiz,
    timer: 0,
    index: index,
  };

  const handleUpdateQuiz = (type_soal) => {
    setOpenDetail(false);
    const typeSoal = typeQuiz.find((s) => s.type_soal === type_soal);
    setType_soal(typeSoal.id);
    setEditSoal(true);
    handleValue();
    // dispatch(updateQuizAct(id, data));
  };

  const handleUpdate = (id) => {
    Swal.fire({
      title: "Yakin ingin mengubah soal?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      handleUpload();
      if (result.value) {
        axiosInstance
          .put(`/soal/${id}`, data)
          .then((response) => {
            // Handle the response data

            toast.done(`${response.data.message}`, {
              position: "bottom-right",
            });
          })
          .catch((error) => {
            // Handle any errors

            toast.done(`${error.data.message}`, {
              position: "bottom-right",
            });
          });
      }
    });
  };

  const resetValue = () => {
    setPageTitle("");
    setPageSubTitle("");
    setTitle("");
    setSubTitle("");
    setContent("");
    setParagraph("");
    setType_soal("");
    setPTitle("");
    setNo("");
    setA("");
    setB("");
    setC("");
    setD("");
    setKeyQuiz("");
    setTimer("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenDetail(false);

    dispatch(await postAddQuizAct(data));
    resetValue();
    fetchAPI();
    setOpenModal(false);

    setClick("click");
  };

  const [openModal, setOpenModal] = useState(false);
  const [addQuiz, setAddQuiz] = useState(false);

  const handleAddQuiz = () => {
    setOpenModal(true);
    resetValue();
    setAddQuiz(true);
    setOpenDetail(false);
  };

  useEffect(() => {
    id && setType_test(id);
    setTypeQuizValue(valueTypeQuiz && valueTypeQuiz.type_soal);
    valueTypeQuiz && setType_soal(valueTypeQuiz && valueTypeQuiz.id);
    fetchAPI();
    setClick("");
  }, [id, idTest, typeQuizValue, valueTypeQuiz, click]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus peserta?",
      text: "data yang telah dihapus tidak bisa dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.value) {
        fetchAPI();
        dispatch(deleteQuizAct(id));
        toast.done(`Sukses Menghapus Soal`, {
          position: "bottom-right",
        });
      }
    });
  };

  // useEffect(() => {
  //   setAudioSrc(detail && detail.data.audio.url);
  // }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <LayoutAdmin>
      <ShowCard
        type="addQuiz"
        opens={openModal}
        close={() => setOpenModal(false)}
        addTypeQuiz={""}
      />

      <div className=" bg-white mx-auto w-full h-auto">
        <div className="w-full px-10  grid grid-cols-6 gap-5 h-auto pb-3 py-5">
          <div className="bg-[#F3F3F3] h-auto pb-5 shadow-md border col-span-1 rounded-2xl px-2 py-2 relative">
            <div className="flex flex-col h-[75vh]  overflow-y-scroll mb-5">
              {soal === null ? (
                <p>Belum ada soal </p>
              ) : soal ? (
                soal.map((item, i) => {
                  return (
                    <button
                      key={i}
                      className={`w-full py-2 text-start rounded-xl ${
                        detail &&
                        item.index === detail.data.index &&
                        "text-slate-600 bg-white"
                      } `}
                      onClick={() => handleDetail(item.id)}
                    >
                      <span className="px-2">
                        {i}. {item.page.title} - {item.page.subtitle}
                      </span>
                    </button>
                  );
                })
              ) : (
                <Loading />
              )}
            </div>

            <button
              onClick={handleAddQuiz}
              className="absolute flex bottom-2 left-2 right-2 py-3 px-2 rounded-xl bg-slate-600 text-white "
            >
              Tambah Soal
            </button>
          </div>
          <div className="bg-white col-span-5 shadow-md border rounded-2xl px-2 py-2">
            {openDetail ? (
              <CardSoal
                type={
                  valueTypeQuiz
                    ? valueTypeQuiz.type_soal
                    : "" || (detail && detail.data.type_soal)
                }
                pageTitle={
                  openDetail === true ? detail && detail.data.page.title : ""
                }
                pageSubTitle={
                  openDetail === true ? detail && detail.data.page.subtitle : ""
                }
                titleValue={
                  openDetail === true ? detail && detail.data.title.title : ""
                }
                subTitleValue={
                  openDetail === true
                    ? detail && detail.data.title.subtitle
                    : ""
                }
                typeCard="view"
                contentValue={
                  openDetail === true ? detail && detail.data.content : ""
                }
                paragraphValue={
                  openDetail === true ? detail && detail.data.paragraph : ""
                }
                p_titleValue={
                  (openDetail === detail) === true
                    ? detail && detail.data.p_title
                    : ""
                }
                noValue={openDetail === true ? detail && detail.data.no : ""}
                aValue={openDetail === true ? detail && detail.data.a : ""}
                bValue={openDetail === true ? detail && detail.data.b : ""}
                cValue={openDetail === true ? detail && detail.data.c : ""}
                dValue={openDetail === true ? detail && detail.data.d : ""}
                keyValue={openDetail === true ? detail && detail.data.key : ""}
                handlePlayPause={handlePlayPause}
                audioRef={audioRef}
                audioSrc={
                  openDetail === true
                    ? detail && detail.data.audio && detail.data.audio.url
                    : ""
                }
                audio={openDetail === true ? detail && detail.data.audio : null}
                isPlaying={isPlaying}
                handleDelete={() => handleDelete(detail && detail.data.id)}
                handleEdit={() =>
                  handleUpdateQuiz(detail && detail.data.type_soal)
                }
                id_soal={detail && detail.data.id}
                addQuiz={false}
                handleNext={handleClickNext}
                handleBack={getPreviousId}
              />
            ) : editSoal ? (
              <CardSoal
                type={
                  valueTypeQuiz
                    ? valueTypeQuiz.type_soal
                    : "" || (detail && detail.data.type_soal)
                }
                pageTitle={pagetitle}
                pageSubTitle={pageSubtitle}
                titleValue={title}
                subTitleValue={subTitle}
                contentValue={content}
                paragraphValue={paragraph}
                p_titleValue={pTitle}
                noValue={no}
                aValue={a}
                bValue={b}
                cValue={c}
                dValue={d}
                keyValue={keyQuiz}
                // input onChange
                page_Title={(e) => setPageTitle(e.target.value)}
                page_Subtitle={(e) => setPageSubTitle(e.target.value)}
                title={(e) => setTitle(e.target.value)}
                subtitle={(e) => setSubTitle(e.target.value)}
                paragraph={(e) => setParagraph(e.target.value)}
                content={(e) => setContent(e.target.value)}
                p_title={(e) => setPTitle(e.target.value)}
                no={(e) => setNo(e.target.value)}
                a={(e) => setA(e.target.value)}
                b={(e) => setB(e.target.value)}
                c={(e) => setC(e.target.value)}
                d={(e) => setD(e.target.value)}
                keyQuiz={(e) => setKeyQuiz(e.target.value)}
                timer={(e) => setTimer(e.target.value)}
                handleUpdate={() => handleUpdate(detail && detail.data.id)}
                handleFileChange={handleFileChange}
                audioRef={audioRef}
                audioSrc={
                  openDetail === true
                    ? detail && detail.data.audio && detail.data.audio.url
                    : ""
                }
                audio={openDetail === true ? detail && detail.data.audio : null}
                handlePlayPause={handlePlayPause}
                isPlaying={isPlaying}
                typeFuction="update"
                handleNext={handleClickNext}
                handleBack={getPreviousId}
              />
            ) : addQuiz === true ? (
              <CardSoal
                type={
                  valueTypeQuiz
                    ? valueTypeQuiz.type_soal
                    : "" || (detail && detail.data.type_soal)
                }
                pageTitle={pagetitle}
                pageSubTitle={pageSubtitle}
                titleValue={title}
                subTitleValue={subTitle}
                contentValue={content}
                paragraphValue={paragraph}
                p_titleValue={pTitle}
                noValue={no}
                aValue={a}
                bValue={b}
                cValue={c}
                dValue={d}
                keyValue={keyQuiz}
                title={(e) => setTitle(e.target.value)}
                subtitle={(e) => setSubTitle(e.target.value)}
                page_Title={(e) => setPageTitle(e.target.value)}
                page_Subtitle={(e) => setPageSubTitle(e.target.value)}
                paragraph={(e) => setParagraph(e.target.value)}
                content={(e) => setContent(e.target.value)}
                p_title={(e) => setPTitle(e.target.value)}
                no={(e) => setNo(e.target.value)}
                a={(e) => setA(e.target.value)}
                b={(e) => setB(e.target.value)}
                c={(e) => setC(e.target.value)}
                d={(e) => setD(e.target.value)}
                keyQuiz={(e) => setKeyQuiz(e.target.value)}
                timer={(e) => setTimer(e.target.value)}
                submit={handleSubmit}
                addQuiz={true}
                handleNext={handleClickNext}
                handleBack={getPreviousId}
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <span className="text-[#4BABD6] text-3xl font-semibold">
                  Pilih Soal
                </span>
              </div>
            )}

            {status === "loading" && <Loading />}
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AdminQuist;
