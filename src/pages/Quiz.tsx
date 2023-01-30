import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector } from "../Redux/Store/Hooks";
import QuizComponent from "../components/QuizComponent";

const Quiz = () => {
  const dispatch = useDispatch();
  const quizData = useAppSelector((state) => state.quiz.data);
  const showResult = useAppSelector((state) => state.quiz.showResult);
  const questionIndex = useAppSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  console.log(quizData);

  return (
    <div className="w-screen px-6 md:px-10 lg:px-28 mt-10 fade-in one mb-20">
      <Link to="/" className="mt-5 text-[#213879]">
        بازگشت به صفحه اصلی
      </Link>
      <div className="w-full h-[50px] bg-[#213879] flex justify-center items-center rounded-md mt-5">
        <p className="text-white text-xl font-bold">
          آزمون آیین نامه رانندگی اصلی
        </p>
      </div>
      <div className="w-full min-h-[300px] border-[1px] border-[#213879] rounded-md mt-5 mb-5">
        <div className="text-[1.5rem] font-bold text-[#213879] w-full flex justify-center items-start mt-3">
          {showResult ? (
            <div>نتیجه آزمون</div>
          ) : (
            <div>
              سوال {questionIndex + 1} از {quizData.length}
            </div>
          )}
        </div>
        <QuizComponent />
      </div>
    </div>
  );
};

export default Quiz;
