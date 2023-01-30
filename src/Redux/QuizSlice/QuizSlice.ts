import { createSlice } from "@reduxjs/toolkit";

import data from "../../Data";
import { shuffleAnswers } from "../../Helper/HelperFunction";

interface Questions {
  data: {
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
    image: string;
  }[];
  currentQuestionIndex: number;
  wrongAnsersCount: number;
  showResult: boolean;
  answers: string[];
  correctAnswersCount: number;
  currentAnswer: string;
  correctAnswers: string;
}

const initialState: Questions = {
  data,
  currentQuestionIndex: 0,
  showResult: false,
  answers: shuffleAnswers(data[0]),
  correctAnswersCount: 0,
  wrongAnsersCount: 0,
  currentAnswer: "",
  correctAnswers: "",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    goToNextQuestion: (state, action) => {
      const showResult = state.currentQuestionIndex === state.data.length - 1;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResult
        ? []
        : shuffleAnswers(state.data[currentQuestionIndex]);
      const wrongAnsersCount = action.payload
        ? state.wrongAnsersCount + 1
        : state.wrongAnsersCount;
      return {
        ...state,
        currentQuestionIndex,
        showResult,
        answers,
        currentAnswer: "",
        wrongAnsersCount,
      };
    },
    selectAnswer: (state, action) => {
      const correctAnswersCount =
        action.payload === state.data[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      const wrongAnsersCount =
        action.payload !== state.data[state.currentQuestionIndex].correctAnswer
          ? state.wrongAnsersCount + 1
          : state.wrongAnsersCount;
      return {
        ...state,
        correctAnswersCount,
        currentAnswer: action.payload,
        wrongAnsersCount,
      };
    },
    showCorrectAnswer: (state, action) => {
      console.log(action.payload);
      const correctAnswers = state.data[action.payload].correctAnswer;

      return {
        ...state,
        correctAnswers,
      };
    },
    reStartQuiz: () => {
      return initialState;
    },
  },
});

export const {
  goToNextQuestion,
  selectAnswer,
  showCorrectAnswer,
  reStartQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
