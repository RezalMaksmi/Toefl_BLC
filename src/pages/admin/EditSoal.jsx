import React, { useEffect } from "react";
import { CardSoal, ShowCard } from "../../components";
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
  const [showTable, setShowTable] = useState(10);
  const [typeQuizValue, setTypeQuizValue] = useState();
  const { typeQuiz, soal, detail, valueTypeQuiz } = useSelector(
    (state) => state.quiz
  );

  const [idTest, setIdTest] = useState("");
  const [data, setData] = useState({
    type_test: id,
    type_soal: "",
    test: "",
    "page-title": "",
    "page-subtitle": "",
    title: "",
    subtitle: "",
    content: "",
    "p-title": "",
    paragraph: "",
    no: "",
    a: "",
    b: "",
    c: "",
    d: "",
    key: "",
    timer: 0,
  });

  const updateData = (key, value) => {
    setData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleDetail = (id) => {
    dispatch(getDetailQuizAct(id));
  };

  const fetchAPI = async () => {
    idTest && dispatch(await getQuizAct(`/soal/${idTest}`));
    setIdTest(id);
    dispatch(getTypeQuizAct());
  };

  const handleSubmit = () => {
    const newData = data;
    console.log("new dataa", newData);
    dispatch(postAddQuizAct(newData));
    fetchAPI();
    setClick("click");
    setData({
      type_test: id && id,
      type_soal: "",
      test: "",
      "page-title": "",
      "page-subtitle": "",
      title: "",
      subtitle: "",
      content: "",
      "p-title": "",
      paragraph: "",
      no: "",
      a: "",
      b: "",
      c: "",
      d: "",
      key: "",
      timer: 0,
    });
  };

  useEffect(() => {
    // dispatch(getDetailQuizAct);
    fetchAPI();
    setOpenModal(false);
    setTypeQuizValue(valueTypeQuiz && valueTypeQuiz.type_soal);
    updateData("type_soal", valueTypeQuiz && valueTypeQuiz.id);
    setClick("");
  }, [id, idTest, typeQuizValue, valueTypeQuiz, click]);

  // console.log("apa ini isinya id nya", id);
  console.log(data);
  console.log(
    "apa  tipe quiz nmyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    valueTypeQuiz
  );
  console.log("apa iniiiiiiiiiiiiiii", data);

  const [openModal, setOpenModal] = useState(false);

  // console.log("detailnya apa", detail);
  // console.log("soal nya apa typeQuizValue", typeQuizValue);
  return (
    <LayoutAdmin>
      <ShowCard
        type="addQuiz"
        opens={openModal}
        close={() => setOpenModal(false)}
        addTypeQuiz={""}
      />
      <div className=" bg-white mx-auto w-full h-auto">
        {/* <div className="w-auto h-auto px-10 py-5 flex flex-row justify-start items-center gap-10">
          <span>Edit Soal</span>
          <label>
            <select
              className="w-[150px] px-2 py-2 focus:outline-none border rounded-md"
              name="selectedJenisPeserta"
              onChange={(e) => setShowTable(e.target.value)}
            >
              <option value={10}>Pretest</option>
              <option value={30}>Post Test 1</option>
              <option value={50}>Post Test 2</option>
            </select>
          </label>
        </div> */}
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
                        "bg-slate-600 text-white"
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
              onClick={() => setOpenModal(true)}
              className="absolute flex bottom-2 left-2 right-2 py-3 px-2 rounded-xl bg-slate-600 text-white "
            >
              Tambah Soal
            </button>
          </div>
          <div className="bg-white col-span-5 shadow-md border rounded-2xl px-2 py-2">
            <CardSoal
              type={
                valueTypeQuiz
                  ? valueTypeQuiz.type_soal
                  : "" || (detail && detail.data.type_soal)
              }
              valueTitle={data.title}
              title={(e) => updateData("title", e.target.value)}
              page_title={(e) => updateData("page-title", e.target.value)}
              p_title={(e) => updateData("p-title", e.target.value)}
              page_subtitle={(e) => updateData("page-subtitle", e.target.value)}
              subtitle={(e) => updateData("subtitle", e.target.value)}
              content={(e) => updateData("content", e.target.value)}
              paragraph={(e) => updateData("paragraph", e.target.value)}
              no={(e) => updateData("no", e.target.value)}
              a={(e) => updateData("a", e.target.value)}
              b={(e) => updateData("b", e.target.value)}
              c={(e) => updateData("c", e.target.value)}
              d={(e) => updateData("d", e.target.value)}
              key={(e) => updateData("key", e.target.value)}
              timer={(e) => updateData("timer", e.target.value)}
              type_test={(e) => updateData("type_test", id && id)}
              submit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditSoal;
