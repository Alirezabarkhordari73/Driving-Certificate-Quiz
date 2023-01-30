import React from "react";
import { RootState } from "../Redux/Store/Store";
import { useAppSelector } from "../Redux/Store/Hooks";
import { useDispatch } from "react-redux";
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { reStartQuiz } from "../Redux/QuizSlice/QuizSlice";

type Props = {};

function Results({}: Props) {
  const dispatch = useDispatch();
  const qustionCount = useAppSelector(
    (state: RootState) => state.quiz.data.length
  );
  const correctAnswersCount = useAppSelector(
    (state: RootState) => state.quiz.correctAnswersCount
  );
  const wrongAnsersCount = useAppSelector(
    (state: RootState) => state.quiz.wrongAnsersCount
  );
  return (
    <div>
      <div className="text-xl flex justify-center items-center font-semibold">
        <h1>نتیجه آزمون آیین نامه رانندگی شما به شرح زیر میباشد :</h1>
      </div>

      {correctAnswersCount >= 4 ? (
        <div className="text-2xl font-bold text-[#55ac4d] flex justify-center items-center gap-3 my-5 Transform-Animation">
          <BsCheckCircleFill />
          <h1>تبریک ! شما حد نصاب لازم را کسب نمودید</h1>
        </div>
      ) : (
        <div className="text-2xl font-bold text-[#d13a3a] flex justify-center items-center gap-3 my-5 Transform-Animation">
          <BsXCircleFill />
          <h1>
            متاسفانه شما حد نصاب لازم را کسب نکردید ! لطفا دوباره تلاش نمایید
          </h1>
        </div>
      )}

      <div className="flex justify-center items-center gap-3">
        <h1 className="text-2xl font-bold text-[#213879]"> تعداد سوالات :</h1>
        <div className="text-2xl font-bold text-[#000000]">{qustionCount}</div>
      </div>

      <div className="flex justify-center items-center gap-3">
        <h2 className="text-2xl font-bold text-[#213879]">تعداد پاسخ صحیح :</h2>
        <div className="text-2xl font-bold text-[#57b643] flex justify-center items-center gap-2">
          {correctAnswersCount}
          <p>پاسخ درست</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <h2 className="text-2xl font-bold text-[#213879]">
          تعداد پاسخ نادرست :
        </h2>
        <div className="text-2xl font-bold text-[#d13a3a] flex justify-center items-center gap-2">
          {wrongAnsersCount}
          <p>پاسخ نادرست</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button
          className="w-[200px] h-[60px] bg-amber-400 text-white text-xl font-bold rounded-md mt-5 hover:bg-white hover:text-amber-400 hover:border-[1px] hover:border-[#ffbe46] transition-all ease-in duration-300 outline-none"
          onClick={() => dispatch(reStartQuiz())}>
          شروع مجدد
        </button>
      </div>
    </div>
  );
}

export default Results;
