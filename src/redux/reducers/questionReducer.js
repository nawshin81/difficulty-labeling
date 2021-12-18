import { LOADING_QUESTIONS, GET_QUESTIONS } from "../types";

const initialState = {
  questions: [],
  questionsPending: false,
};

const qustionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_QUESTIONS:
      return {
        ...state,
        questionsPending: true,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        questionsPending: false,
      };
    default:
      return state;
  }
};

export default qustionsReducer;