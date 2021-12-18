import axios from "axios";
import { LOADING_QUESTIONS, GET_QUESTIONS } from "../types";

const fetchQuestionsPending = () => {
  return {
    type: LOADING_QUESTIONS,
  };
};

const fetchQuestionsSuccess = (data) => {
  return {
    type: GET_QUESTIONS,
    payload: data,
  };
};

export const fetchQuestions = () => async (dispatch) => {
  dispatch(fetchQuestionsPending());
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/questions/`
    );
    if (data!==undefined) {
      dispatch(fetchQuestionsSuccess(data));
    }
  } catch (error) {
    console.log(error.message);
  }
};