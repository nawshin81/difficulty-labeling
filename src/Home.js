import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions} from "../src/redux/actions/questionAction";
import logo from "./IUT.png";

const Home = () => {
  const [input, setInput] = useState('');


  const dispatch = useDispatch();
  const { questions, questionsPending } = useSelector((state) => state.question);
  useEffect(() => {
    dispatch(fetchQuestions());
    console.log(questions);
  }, questionsPending);

  
  const navigate = useNavigate();

  const routeChange = () => {
    if(input.length===9){
      let path = "/labelpage";
      navigate(path, { state: { questions, questionsPending } });
    }else{
      alert("Please enter a valid Student Id")
    } 
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
          marginBottom: "2%",
        }}
      >
        <img src={logo} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3%",
        }}
      >
        <div>
          <h1> Islamic University of Technology </h1>
          <h3 style={{ paddingLeft: "12%" }}>Department of Computer Science</h3>
        </div>
      </div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "3%",
        }}
      >
        <label>
          Student ID:
          <input type="text" name="id" value={input} onInput={e => setInput(e.target.value)}/>
        </label>
        <button color="primary" className="px-4"
          onClick={routeChange}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Home;
