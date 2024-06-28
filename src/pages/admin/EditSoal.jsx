import React, { useEffect } from "react";
import { CardSoal, Loading, ShowCard } from "../../components";
import { LayoutAdmin } from "../../template";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailQuizAct,
  getQuizAct,
  getTypeQuizAct,
  postAddQuizAct,
} from "../../redux/quiz/Quiz";

const EditSoal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [click, setClick] = useState("");
  const [openDetail, setOpenDetail] = useState(false);
  const [showTable, setShowTable] = useState(10);
  const [typeQuizValue, setTypeQuizValue] = useState();
  const { typeQuiz, soal, detail, valueTypeQuiz, status } = useSelector(
    (state) => state.quiz
  );

  const [test, setTest] = useState("");
  const [pagetitle, setPageTitle] = useState(
    detail ? detail && detail.data.page.title : ""
  );
  const [pageSubtitle, setPageSubTitle] = useState(
    detail ? detail && detail.data.page.subtitle : ""
  );
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [type_test, setType_test] = useState(id);
  const [type_soal, setType_soal] = useState("");
  const [pTitle, setPTitle] = useState("");
  const [no, setNo] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [key, setKey] = useState("");
  const [timer, setTimer] = useState("");

  const [idTest, setIdTest] = useState("");

  const handleDetail = (idDetail) => {
    setOpenDetail(true);

    setClick("click");
    dispatch(getDetailQuizAct(idDetail));
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
    key: key,
    timer: 0,
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
    setKey("");
    setTimer("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenDetail(false);
    const newData = data;

    dispatch(await postAddQuizAct(data));
    resetValue();
    fetchAPI();
    setOpenModal(false);

    setClick("click");
  };

  useEffect(() => {
    fetchAPI();

    setTypeQuizValue(valueTypeQuiz && valueTypeQuiz.type_soal);

    valueTypeQuiz && setType_soal(valueTypeQuiz && valueTypeQuiz.id);
    setClick("");
    id && setType_test(id);
  }, [id, idTest, typeQuizValue, valueTypeQuiz, click]);

  const [openModal, setOpenModal] = useState(false);
  const [addQuiz, setAddQuiz] = useState(false);

  const handleAddQuiz = () => {
    setOpenModal(true);
    setAddQuiz(true);
    setOpenDetail(false);
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
          <div className="bg-[#F3F3F3] h-full shadow-md border col-span-1 rounded-2xl px-2 py-2 relative">
            <div className="flex flex-col h-[75vh]  overflow-y-scroll">
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
                      Soal {i + 1}
                    </button>
                  );
                })
              ) : (
                <div>Loading</div>
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
                pageTitle={detail ? detail && detail.data.page.title : ""}
                pageSubTitle={detail ? detail && detail.data.page.subtitle : ""}
                titleValue={detail ? detail && detail.data.title.title : ""}
                subTitleValue={
                  detail ? detail && detail.data.title.subtitle : ""
                }
                contentValue={detail ? detail && detail.data.content : ""}
                paragraphValue={detail ? detail && detail.data.paragraph : ""}
                p_titleValue={detail ? detail && detail.data.paragraph : ""}
                noValue={no}
                aValue={detail ? detail && detail.data.a : ""}
                bValue={detail ? detail && detail.data.b : ""}
                cValue={detail ? detail && detail.data.c : ""}
                dValue={detail ? detail && detail.data.d : ""}
                keyValue={key}
                submit={handleSubmit}
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
                  keyValue={key}
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
                  key={(e) => setKey(e.target.value)}
                  timer={(e) => setTimer(e.target.value)}
                  submit={handleSubmit}
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
