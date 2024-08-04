import React, { useState, useEffect } from "react";
import { Button, Loading } from "../../components";
import { Result, QuestionTest } from "../../components";
import axios from "axios";
import { useParams } from "react-router-dom";

const TestPeserta = () => {
    const [quest, setQuest] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const [timeLeft, setTimeLeft] = useState(30);
    const [isFinished, setIsFinished] = useState(false);

    const params = useParams();
    let position = currentQuestion;

    const fetchSoal = async () => {
        const response = await axios.get(`http://localhost:8000/user/soal/${params.test}`);
        setQuest(response.data.data);
    };

    const handleNextQuiz = (e) =>{
        e.preventDefault();
        position++;
        setCurrentQuestion(position);
        setTimeLeft(30);
        if (position === quest.length) {
            setIsFinished(true);
        }
    };

    useEffect(() => {
        fetchSoal();
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
            if (timeLeft === 0 || timeLeft <= 0) {
                clearInterval(timer);
                position++;
                setCurrentQuestion(position);
                setTimeLeft(30);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div>
            {quest.length != 0 && !isFinished ? (
                <QuestionTest
                    question={quest[currentQuestion]}
                    timeLeft={timeLeft}
                    handleClick={((e) => handleNextQuiz(e))}
                    // onAnswer={(isCorrect) => {
                    //     if (isCorrect) {
                    //         setScore(score + 1);
                    //     }
                    //     setCurrentQuestion(currentQuestion + 1);
                    //     if (currentQuestion === quest.length) {
                    //         setIsFinished(true);
                    //     }
                    // }}
                />
            ) : (
                // <Loading/>
                <Result score={score} />
            )}
            {/* {isFinished ? (
            ) : 
            } */}
        </div>
    );
};

export default TestPeserta;