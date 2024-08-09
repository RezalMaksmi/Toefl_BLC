import React, { useState } from 'react';
import { Button } from '../atoms';
import { Blank, Card, Example, Paragraph, Question, Test, Test1 } from '../type_soal';

function QuestionTest(props) {
    const { question, timeLeft, handleClick } = props;
    const type_soal = question.type_soal;

    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className=" bg-white mx-auto w-full h-auto mt-[75px] lg:px-[70px]">
                <div className="w-auto h-full px-10 py-10 flex justify-center items-end gap-10">
                    <div className="bg-[#f8f8f8] w-2/3 h-full shadow-md border col-span-1 rounded-3xl px-2 py-2 relative">
                        {(() => {
                            switch (type_soal) {
                                case "blank":
                                    return <>
                                        <Blank
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>

                                case "card":
                                    return <>
                                        <Card
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            content={question.content}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>
                                case "example":
                                    return <>
                                        <Example
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            a={question.a}
                                            b={question.b}
                                            c={question.c}
                                            d={question.d}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>
                                case "test":
                                    return <>
                                        <Test
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            no={question.no}
                                            a={question.a}
                                            b={question.b}
                                            c={question.c}
                                            d={question.d}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>
                                case "test1":
                                    return <>
                                        <Test1
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            no={question.no}
                                            a={question.a}
                                            b={question.b}
                                            c={question.c}
                                            d={question.d}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>
                                case "question":
                                    return <>
                                        <Question
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            no={question.no}
                                            a={question.a}
                                            b={question.b}
                                            c={question.c}
                                            d={question.d}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>
                                case "paragraph":
                                    return <>
                                        <Paragraph
                                            test={question.test}
                                            pageTitle={question.page.title}
                                            pageSubtitle={question.page.subtitle}
                                            title={question.title.title}
                                            subTitle={question.title.subtitle}
                                            a={question.a}
                                            b={question.b}
                                            c={question.c}
                                            d={question.d}
                                            paragraph_title={question.paragraph_title}
                                            paragraph={question.paragraph}
                                            timer={timeLeft}
                                            handle={handleClick}
                                        />
                                    </>
                            }
                        }
                        )()}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuestionTest;
