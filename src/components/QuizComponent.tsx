import React, { useEffect } from "react";

import { useAppSelector } from "../Redux/Store/Hooks";
import { useDispatch } from "react-redux";
import { goToNextQuestion, selectAnswer } from "../Redux/QuizSlice/QuizSlice";
import { RootState } from "../Redux/Store/Store";
import Answers from "./Answers";
import Results from "./Results";

type Props = {};

function QuizComponent({}: Props) {
  const dispatch = useDispatch();
  //redux selectors
  const quizData = useAppSelector((state: RootState) => state.quiz.data);

  const currentAnswer = useAppSelector(
    (state: RootState) => state.quiz.currentAnswer
  );
  const questionIndex = useAppSelector(
    (state: RootState) => state.quiz.currentQuestionIndex
  );
  const showResults = useAppSelector(
    (state: RootState) => state.quiz.showResult
  );
  const answers = useAppSelector((state: RootState) => state.quiz.answers);

  //states
  const [seconds, setSeconds] = React.useState(10);
  const [btnClicked, setBtnClicked] = React.useState(false);

  //countedown function
  const counter = (btnClicked: boolean) => {
    if (btnClicked === false && !showResults) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setTimeout(() => setSeconds(seconds), 0);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      counter(btnClicked);
    }
    if (seconds <= 0) {
      dispatch(goToNextQuestion(true));
      setSeconds(10);
    }
    if (btnClicked) {
      setSeconds(seconds);
    }
  }, [seconds, dispatch]);
  //event handler functions
  const goToNextQuestionHandler = () => {
    setSeconds(10);
    dispatch(goToNextQuestion(false));
    setBtnClicked(false);
  };

  return (
    <div className="p-5 fade-in one">
      {showResults && <Results />}
      {!showResults && (
        <div>
          <div className="text-[1.4rem] mt-3">
            {quizData[questionIndex].question}
          </div>
          <div className="flex justify-center items-center mt-2">
            <img
              src={quizData[questionIndex].image}
              alt="title"
              className="w-[500px] h-[400px] object-contain"
            />
          </div>

          <div className="flex justify-center items-center gap-4 bg-[#213879] rounded-md h-[50px] mt-2">
            <p className="text-[1.4rem] text-[#fff] font-bold">
              زمان باقی مانده :
            </p>
            <h1 className="text-[1.4rem] text-[#fff] font-bold">{seconds}</h1>
          </div>

          <div className="mt-2">
            <ul>
              {answers.map((ans, index) => (
                <Answers
                  setBtnClicked={setBtnClicked}
                  answerText={ans}
                  index={index}
                  key={index}
                  currentAnswer={currentAnswer}
                  correctAnswer={quizData[questionIndex].correctAnswer}
                  onSelectAnswer={(answerText) => {
                    console.log("answerText", answerText);
                    dispatch(selectAnswer(answerText));
                  }}
                />
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className={btnClicked ? "Next-Btn" : "Next-Btn-Disable"}
              onClick={() => goToNextQuestionHandler()}>
              سوال بعد
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizComponent;
