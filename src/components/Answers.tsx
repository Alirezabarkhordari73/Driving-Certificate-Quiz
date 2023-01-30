import React, { Dispatch, SetStateAction } from "react";

import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";

type Props = {
  answerText: string;
  index: number;
  onSelectAnswer: (answerText: string) => void;
  correctAnswer: string;
  currentAnswer: string;
  setBtnClicked: Dispatch<SetStateAction<boolean>>;
};

const Answers = ({
  answerText,
  index,
  onSelectAnswer,
  correctAnswer,
  currentAnswer,
  setBtnClicked,
}: Props) => {
  const mapIndex = [1, 2, 3, 4];
  const isCorrect = currentAnswer && answerText === correctAnswer;
  const isWrong =
    currentAnswer === answerText && currentAnswer !== correctAnswer;

  const ansBtnClickHandler = (answerText: string) => {
    onSelectAnswer(answerText);
    setBtnClicked(true);
  };
  return (
    <div className="bg-[#e9f3ff91] p-3 rounded-md">
      <div className="flex justify-start items-center gap-2 text-xl font-bold cursor-pointer hover:text-[#213879]">
        <span>{mapIndex[index]} -</span>
        <div
          onClick={() => ansBtnClickHandler(answerText)}
          className={`${isCorrect ? "Correct-Answer" : ""} ${
            isWrong ? "InCorrect-Answer" : ""
          } ${currentAnswer ? "Disable-Answers" : ""}`}>
          <div className="flex justify-center items-center gap-2">
            {answerText}
            {isCorrect && <BsCheckCircleFill />}
            {isWrong && <BsXCircleFill />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
