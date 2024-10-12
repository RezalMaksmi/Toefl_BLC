import React, { useEffect, useState } from "react";
import { LayoutAdmin } from "../../template";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Blank,
  Card,
  Example,
  Paragraph,
  Question,
  Test,
  Test1,
} from "../../components/type_soal";

const LihatSoal = () => {
  const [soal, setSoal] = useState([]);
  const params = useParams();

  const fetchSoal = async () => {
    const response = await axios.get(
      `http://localhost:8000/soal/detail/${params.id_soal}`
    );
    setSoal(response.data.data);
  };

  const handleNextQuiz = () => {};

  useEffect(() => {
    fetchSoal();
  }, []);

  return (
    <LayoutAdmin>
      <div className="w-full flex flex-col justify-center">
        <div className="  mx-auto w-full h-full  bg-white">
          <div className="w-auto  h-full flex justify-center gap-10 py-10">
            <div className="bg-[#f8f8f8] flex-col w-5/6 min-h-[80vh] h-auto shadow-md border col-span-1 rounded-3xl px-2 py-2 relative">
              {(() => {
                switch (soal.type_soal) {
                  case "blank":
                    return (
                      <>
                        <Blank
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_test={params.id_soal}
                        />
                      </>
                    );

                  case "card":
                    return (
                      <>
                        <Card
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          content={soal.content}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_soal={params.id_soal}
                        />
                      </>
                    );
                  case "example":
                    return (
                      <>
                        <Example
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          a={soal.a}
                          b={soal.b}
                          c={soal.c}
                          d={soal.d}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_soal={params.id_soal}
                        />
                      </>
                    );
                  case "test":
                    return (
                      <>
                        <Test
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          no={soal.no}
                          a={soal.a}
                          b={soal.b}
                          c={soal.c}
                          d={soal.d}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_soal={params.id_soal}
                        />
                      </>
                    );
                  case "test1":
                    return (
                      <>
                        <Test1
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          no={soal.no}
                          a={soal.a}
                          b={soal.b}
                          c={soal.c}
                          d={soal.d}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_soal={params.id_soal}
                        />
                      </>
                    );
                  case "soal":
                    return (
                      <>
                        <soal
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          no={soal.no}
                          a={soal.a}
                          b={soal.b}
                          c={soal.c}
                          d={soal.d}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_soal={params.id_soal}
                        />
                      </>
                    );
                  case "paragraph":
                    return (
                      <>
                        <Paragraph
                          test={soal.test}
                          pageTitle={soal.page.title}
                          pageSubtitle={soal.page.subtitle}
                          title={soal.title.title}
                          subTitle={soal.title.subtitle}
                          a={soal.a}
                          b={soal.b}
                          c={soal.c}
                          d={soal.d}
                          paragraph_title={soal.paragraph_title}
                          paragraph={soal.paragraph}
                          timer={30}
                          handle={handleNextQuiz()}
                          edited={true}
                          id_soal={params.id_soal}
                        />
                      </>
                    );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default LihatSoal;
