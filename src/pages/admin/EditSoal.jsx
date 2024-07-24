import React, { useEffect } from "react";
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
  updateQuizAct,
} from "../../redux/quiz/Quiz";
import Swal from "sweetalert2";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const EditSoal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [click, setClick] = useState("");
  const [openDetail, setOpenDetail] = useState(false);
  const [typeQuizValue, setTypeQuizValue] = useState();
  const { soal, detail, valueTypeQuiz, status } = useSelector(
    (state) => state.quiz
  );

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

  const handleValue = () => {
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

  const handleDetail = (idDetail) => {
    dispatch(getDetailQuizAct(idDetail));
    setOpenDetail(true);
    handleValue();
    setClick("click");
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

  const handleUpdateQuiz = (id) => {
    console.log("klik");
    fetchAPI();
    // dispatch(updateQuizAct(id, data));
    axiosInstance
      .put(`/soal/${id}`, data)
      .then((response) => {
        // Handle the response data
        console.log("response", response.data);
        toast.done(`${response.data.message}`, {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        // Handle any errors
        console.error("There was an error!", error);
        toast.done(`${error.data.message}`, {
          position: "bottom-right",
        });
      });

    // Swal.fire({
    //   title: "Yakin ingin mengubah soal?",
    //   text: "",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes!",
    // }).then((result) => {
    //   if (result.value) {
    //     console.log("klik");
    //     fetchAPI();
    //     // dispatch(updateQuizAct(id, data));
    //     axiosInstance
    //       .put(`/soal/${id}`, data)
    //       .then((response) => {
    //         // Handle the response data
    //         console.log(response.data);
    //         toast.done(`${response.data.message}`, {
    //           position: "bottom-right",
    //         });
    //       })
    //       .catch((error) => {
    //         // Handle any errors
    //         console.error("There was an error!", error);
    //         toast.done(`${error.data.message}`, {
    //           position: "bottom-right",
    //         });
    //       });
    //   }
    // });
  };

  console.log("update apa nihhhhhhhh =", data);

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

  console.log(detail);
  useEffect(() => {
    fetchAPI();
    setTypeQuizValue(valueTypeQuiz && valueTypeQuiz.type_soal);
    valueTypeQuiz && setType_soal(valueTypeQuiz && valueTypeQuiz.id);
    setClick("");
    id && setType_test(id);
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
      }
    });
  };

  console.log(detail && detail.data.index);
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
          <div className="bg-[#F3F3F3] h-full shadow-md border col-span-1 rounded-2xl px-2 py-2 relative">
            <div className="flex flex-col h-[75vh]  overflow-y-scroll pb-3">
              {soal === null ? (
                <p>Belum ada soal </p>
              ) : soal ? (
                soal.map((item, i) => {
                  return (
                    <button
                      key={i}
                      className={`w-full py-2  rounded-xl ${
                        detail &&
                        item.index === detail.data.index &&
                        "text-slate-600 bg-white"
                      } `}
                      onClick={() => handleDetail(item.id)}
                    >
                      {item.page.title}
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
                // Kenapa kode berikut value tidak bisa dirubah ? : keyValue={detail ? detail.data.key : ""}
                //  title={(e) => setTitle(e.target.value)}
                title={(e) => setTitle(e.target.value)}
                subtitle={(e) => setSubTitle(e.target.value)}
                page_title={(e) => setPageTitle(e.target.value)}
                page_subtitle={(e) => setPageSubTitle(e.target.value)}
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
                handleDelete={() => handleDelete(detail && detail.data.id)}
                handleEdit={() => handleUpdateQuiz(detail && detail.data.id)}
              />
            ) : (
              addQuiz === true && (
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
                  page_title={(e) => setPageTitle(e.target.value)}
                  page_subtitle={(e) => setPageSubTitle(e.target.value)}
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
                  addSoal={true}
                />
              )
            )}

            {status === "loading" && <Loading />}
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditSoal;
