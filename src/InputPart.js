import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchQuestions } from "../src/redux/actions/questionAction";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Highlight from "react-highlight";

const InputPart = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  //questons are taken from previous page and filter the first one that satisfy the condition
  const questions = state.questions;
  const questionsPending = state.questionsPending;

  const [questionindex, setQuestionindex] = useState(0);

  //handling the collapsible div
  const [collapse, setCollapse] = useState(true);

  //taking the comment
  const [comment, setComment] = useState("");

  //difficulty keeps track of selected difficulty level
  //difficultywise rule is changed based on defficulty level
  //rule_arr keeps track of selected rules of a level
  const rules = props.rules;

  const [difficulty, setDifficulty] = useState();

  const [difficultywiserule, setDifficultywiserule] = useState({});

  const [rule_arr, setRules_arr] = useState([]);

  //handle the difficulty wise rules based on difficulty level
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setDifficulty(target.value);
      if (target.value === rules[0].title) {
        setDifficultywiserule(rules[0].item);
        setRules_arr(new Array(rules[0].item.length));
      } else if (target.value === rules[1].title) {
        setDifficultywiserule(rules[1].item);
        setRules_arr(new Array(rules[1].item.length));
      } else {
        setDifficultywiserule(rules[2].item);
        setRules_arr(new Array(rules[2].item.length));
      }
      setCollapse(false);
    }
  };

  //handle which rules are checked from check boxs
  const [checkedRules, setcheckedRules] = useState(rule_arr.fill(false));

  const handleOnChange = (position) => {
    const updatedcheckedRules = checkedRules.map((item, index) =>
      index === position ? !item : item
    );

    setcheckedRules(updatedcheckedRules);
  };

  //nullify the checked rules when the difficulty level is changed
  useEffect(() => {
    console.log(difficulty);
    setcheckedRules(rule_arr.fill(false));
    console.log(questions);
  }, [difficulty, rule_arr]);

  //save_and_next function and go to next question

  const save_and_next = () => {
    if (difficulty !== "") {
      const currentIndex = questions.indexOf(questions[questionindex]);
      const nextIndex = (currentIndex + 1) % questions.length;
      setQuestionindex(nextIndex);
      alert(difficulty + "----" + checkedRules + "\n" + comment);
    } else {
      alert("Please enter a valid Student Id");
    }
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, questionsPending);

  //save_and_close function

  const save_and_close = () => {
    if (difficulty !== "") {
      let path = "/";
      navigate(path);
    } else {
      alert("Please enter a valid Student Id");
    }
  };

  return (
    <div className="w-100 ">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecorationLine: "underline",
          marginBottom: "3%",
        }}
      >
        Data Labeling Portion
      </h2>
      <div style={{ backgroundColor: "#f8f1f4", minHeight: 700 }}>
        {/* const formatCode = () => {
    const formattedCode = prettier.format(code, {
      parser: "babel", plugins: [babylon]
    });    setCode(formattedCode);
  }; */}

        <div
          style={{
            float: "left",
            overflowY: "scroll",
            width: "50%",
            height: 700,
            backgroundColor: "#eadcd9",
          }}
        >
          <h4 className="d-flex justify-content-center pt-3">Post</h4>
          <p className="d-flex justify-content-center">
            Post Id: {questions[questionindex].id}
          </p>
          <p className="d-flex px-3">
            Post Title: {questions[questionindex].question_title}
          </p>
          <p className="d-flex px-3">
            <Highlight innerHTML={true}>
              {questions[questionindex].question_body}
            </Highlight>
          </p>
        </div>

        <div style={{ float: "right", width: "50%" }}>
          <h4 className="d-flex justify-content-center pt-3">
            Select Difficulty label
          </h4>
          <Form>
            <div className="d-flex justify-content-center pt-3 w-100">
              {rules.map(({ id, title }, index) => {
                return (
                  <>
                    <label key={index} className="px-3">
                      <input
                        type="radio"
                        value={title}
                        checked={difficulty === title}
                        onChange={handleChange}
                      />
                      <span>{title}</span>
                    </label>
                  </>
                );
              })}
            </div>
            <div>
              <h5 className="d-flex justify-content-center pt-3 w-100">
                Select Rules
              </h5>
              <div
                className="d-flex justify-content-center pt-3 w-100"
                style={{ minHeight: 320 }}
              >
                {collapse ? (
                  <></>
                ) : (
                  <ul>
                    {difficultywiserule.map(
                      ({ item_id, item_title }, index) => {
                        return (
                          <div className="card card-body " key={index}>
                            <input
                              className="col-md-1"
                              type="checkbox"
                              id={item_id}
                              name={item_title}
                              value={item_title}
                              checked={checkedRules[item_id]}
                              onChange={() => handleOnChange(item_id)}
                            />
                            <label
                              className="col-md-11"
                              htmlFor={`custom-checkbox-${item_id}`}
                            >
                              {item_title}
                            </label>
                          </div>
                        );
                      }
                    )}
                  </ul>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-center pt-3 w-100">
              <textarea
                value={comment}
                rows="3"
                placeholder="Write your comment here."
                style={{ width: "90%" }}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </Form>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-3 pb-5 w-100">
        <div
          className="d-flex justify-content-center p-2"
          style={{ width: "33.33%" }}
        >
          {" "}
          <button type="button" className="btn btn-warning waves-effect w-50">
            Previous
          </button>
        </div>
        <div
          className="d-flex justify-content-center p-2"
          style={{ width: "33.33%" }}
        >
          {" "}
          <button
            type="button"
            className="btn btn-warning waves-effect w-50"
            onClick={save_and_next}
          >
            Save and Next
          </button>
        </div>
        <div
          className="d-flex justify-content-center p-2"
          style={{ width: "33.33%" }}
        >
          {" "}
          <button
            type="button"
            className="btn btn-info waves-effect w-50"
            onClick={save_and_close}
          >
            Save and Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPart;
