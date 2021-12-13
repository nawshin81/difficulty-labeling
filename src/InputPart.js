import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const InputPart = (props) => {

  const rules=props.rules;

  const navigate = useNavigate();

  const [collapse, setCollapse] = useState(true);
  const [difficultywiserule, setDifficultywiserule]= useState({});
  const [rule_arr, setRules_arr] = useState([]);



  const [difficulty, setDifficulty] = useState();

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setDifficulty(target.value);
      if (target.value===rules[0].title){
        setDifficultywiserule(rules[0].item)
        setRules_arr(new Array(rules[0].item.length))
      }else if(target.value===rules[1].title){
        setDifficultywiserule(rules[1].item)
        setRules_arr(new Array(rules[1].item.length))
      }else {
        setDifficultywiserule(rules[2].item)
        setRules_arr(new Array(rules[2].item.length))
      }
      setCollapse(false);
    }
  };



  const [checkedRules, setcheckedRules] = useState(rule_arr.fill(false));

  const handleOnChange = (position) => {
    const updatedcheckedRules = checkedRules.map((item, index) =>
      index === position ? !item : item
    );

    setcheckedRules(updatedcheckedRules);
  };



  const [comment, setComment] = useState('');


  useEffect(() => {
    console.log(difficulty);
    setcheckedRules(rule_arr.fill(false));
  }, [difficulty]);


  const save_and_next = () => {
    if (difficulty != '') {
      alert(difficulty + "----" + checkedRules + "\n" + comment)
    } else {
      alert("Please enter a valid Student Id")
    }
  }


  const save_and_close = () => {
    if (difficulty != '') {
      let path = "/";
      navigate(path);
    } else {
      alert("Please enter a valid Student Id")
    }
  }

  return (
    <div className="w-100 ">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecorationLine: "underline",
          marginBottom: "3%"
        }}
      >
        Data Labeling Portion
      </h2>
      <div style={{ backgroundColor: "#f8f1f4", minHeight: 570 }}>
        <div style={{ float: "left", width: "50%", minHeight: 570, backgroundColor: "#eadcd9" }}>
          <h4 className="d-flex justify-content-center pt-3">Post</h4>
          <p className="d-flex justify-content-center">Post Id:</p>
          <p style={{ paddingLeft: "5%", paddingRight: "3%" }}>
            How to make a Python class serializable?
            <br />
            A simple class:
            <br />
            class FileItem:
            <br />
            def __init__(self, fname):
            <br />
            self.fname = fname
            <br />
            What should I do to be able to get output of:
            <br />
            import json
            <br />
            my_file = FileItem('/foo/bar')
            <br />
            json.dumps(my_file)
            <br />
            TypeError: Object of type 'FileItem' is not JSON serializable
            <br />
            Without the error
          </p>
        </div>

        <div style={{ float: "right", width: "50%" }}>
          <h4 className="d-flex justify-content-center pt-3">Select Difficulty label</h4>
          <Form>
            <div className="d-flex justify-content-center pt-3 w-100">
            {rules.map(({ id, title }, index) => {
              return (
              <label className="px-3">
                <input
                  type="radio"
                  value={title}
                  checked={difficulty === title}
                  onChange={handleChange}
                />
                <span>{title}</span>
              </label>
              );
            })}

              {/* <label className="px-3">
                <input
                  type="radio"
                  value="Intermediate"
                  checked={difficulty === "Intermediate"}
                  onChange={handleChange}
                />
                <span>Intermediate</span>
              </label>

              <label className="px-3">
                <input
                  type="radio"
                  value="Advance"
                  checked={difficulty === "Advance"}
                  onChange={handleChange}
                />
                <span>Advance</span>
              </label> */}
            </div>
            <div>

              <h5 className="d-flex justify-content-center pt-3 w-100">Select Rules</h5>
              <div className="d-flex justify-content-center pt-3 w-100" style={{minHeight:320}}>
                {collapse ? (
                  <></>
                ) : (
                  <ul>
                    {difficultywiserule.map(({ item_id, item_title }, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={item_id}
                            name={item_title}
                            value={item_title}
                            checked={checkedRules[item_id]}
                            onChange={() => handleOnChange(item_id)}
                          />
                          <label htmlFor={`custom-checkbox-${item_id}`}>{item_title}</label>
                        </div>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <form className="d-flex justify-content-center pt-3 w-100">
              <textarea
                value={comment}
                rows="3"
                placeholder="Write your comment here."
                style={{ width: "90%" }}
                onChange={e => setComment(e.target.value)}
              />
            </form>
          </Form>
        </div>

      </div>
      <div className="d-flex justify-content-center pb-5 w-100">

        <div className="d-flex justify-content-center p-2"
          style={{ backgroundColor: "#f8f1f4", width: "33.33%" }}
        > <button type="button" class="btn btn-outline-warning waves-effect w-50" >Previous</button>
        </div>
        <div className="d-flex justify-content-center p-2"
          style={{ backgroundColor: "#ece6dd", width: "33.33%" }}
        > <button type="button" class="btn btn-outline-warning waves-effect w-50" onClick={save_and_next}>Save and Next</button></div>
        <div className="d-flex justify-content-center p-2"
          style={{ backgroundColor: "#eadcd9", width: "33.33%" }}
        > <button type="button" class="btn btn-outline-info waves-effect w-50" onClick={save_and_close}>Save and Close</button></div>

      </div>
    </div>
  );
};

export default InputPart;
