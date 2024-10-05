import React, { useEffect, useState } from "react";
import { LayoutAdmin } from "../../template";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Blank, Card, Example, Paragraph, Question, Test, Test1 } from '../../components/type_soal';

const LihatSoal = () => {
  const [soal, setSoal] = useState([]);
  const params = useParams();

  const fetchSoal = async () => {
      const response = await axios.get(`http://localhost:8000/soal/detail/${params.id_soal}`);
      setSoal(response.data.data);
      console.log(soal);
  };

  const handleNextQuiz = () => {}

  useEffect(() => {
    fetchSoal();
  }, []);

  return (
    <LayoutAdmin>
      <div className="w-full h-screen flex flex-col justify-center">
            <div className=" bg-white mx-auto w-full h-auto mt-[75px] lg:px-[70px]">
                <div className="w-auto h-full px-10 py-10 flex justify-center items-end gap-10">
                    <div className="bg-[#f8f8f8] w-2/3 h-full shadow-md border col-span-1 rounded-3xl px-2 py-2 relative">
                        {(() => {
                            switch (soal.type_soal) {
                                case "blank":
                                    return <>
                                        <Blank
                                            test={soal.test}
                                            pageTitle={soal.page.title}
                                            pageSubtitle={soal.page.subtitle}
                                            title={soal.title.title}
                                            subTitle={soal.title.subtitle}
                                            timer={30}
                                            handle={handleNextQuiz()}
                                        />
                                    </>

                                case "card":
                                    return <>
                                        <Card
                                            test={soal.test}
                                            pageTitle={soal.page.title}
                                            pageSubtitle={soal.page.subtitle}
                                            title={soal.title.title}
                                            subTitle={soal.title.subtitle}
                                            content={soal.content}
                                            timer={30}
                                            handle={handleNextQuiz()}
                                        />
                                    </>
                                case "example":
                                    return <>
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
                                        />
                                    </>
                                case "test":
                                    return <>
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
                                        />
                                    </>
                                case "test1":
                                    return <>
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
                                        />
                                    </>
                                case "soal":
                                    return <>
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
                                        />
                                    </>
                                case "paragraph":
                                    return <>
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
                                        />
                                    </>
                            }
                        }
                        )()}
                    </div>
                </div>
            </div>
        </div>
    </LayoutAdmin>
  );
};

export default LihatSoal;
