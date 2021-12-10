import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const InputPart = () => {
  const rules = [
    { id: 0, title: "Hello World" },
    { id: 1, title: "Installation" },
    { id: 2, title: "Development" },
    { id: 3, title: "Others" },
  ];
  let arr = new Array(rules.length);
  const [difficulty, setDifficulty] = useState();
  const [collapse, setCollapse] = useState(true);
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setDifficulty(target.value);
      setCollapse(false);
    }
  };

  useEffect(() => {
    console.log(difficulty);
    setCheckedState(arr.fill(false));
  },[difficulty]);

  const [checkedState, setCheckedState] = useState(arr.fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div style={{ paddingTop: "5%" }}>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecorationLine: "underline",
          marginBottom:"3%"
        }}
      >
        Data Labeling Portion
      </h2>
      <div style={{ width: "90%", paddingLeft: "10%" }}>
        <div style={{ float: "left", width: "50%",backgroundColor:"azure" }}>
          <h4>Post</h4>
          <p>
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
        
        <div style={{ float: "right", width: "50%",backgroundColor:"azure"  }}>
          <h4>Select Difficulty label</h4>
          <Form>
            <div>
              <label>
                <input
                  type="radio"
                  value="Basic"
                  checked={difficulty === "Basic"}
                  onChange={handleChange}
                />
                <span>Basic</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="Intermediate"
                  checked={difficulty === "Intermediate"}
                  onChange={handleChange}
                />
                <span>Intermediate</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="Advance"
                  checked={difficulty === "Advance"}
                  onChange={handleChange}
                />
                <span>Advance</span>
              </label>
            </div>
            {collapse ? (
              <></>
            ) : (
              <>
                <h3>Select Rules</h3>
                <ul>
                  {rules.map(({ id, title }, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={id}
                          name={title}
                          value={title}
                          checked={checkedState[id]}
                          onChange={() => handleOnChange(id)}
                        />
                        <label htmlFor={`custom-checkbox-${id}`}>{title}</label>
                      </div>
                    );
                  })}
                </ul>
              </>
            )}
          </Form>
        </div>
        <br style={{ clear: "left" }} />
      </div>
      <div>
        <form style={{ paddingLeft: "10%", paddingTop: "3%" }}>
          <textarea
            value=""
            placeholder="Write your comment here."
            style={{ width: "80%" }}
          />
        </form>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"4%",
          marginBottom:"2%",
        }}
      >
        <div style={{ float: "left", width: "23%" }}>
          <Button variant="outline-primary">Previous</Button>
        </div>
        <div style={{ float: "left", width: "23%" }}>
          <Button variant="outline-primary">Save and Next</Button>
        </div>
        <div style={{ float: "left", width: "23%" }}>
          <Button variant="outline-primary">Save and Close</Button>
        </div>
      </div>
    </div>
  );
};

export default InputPart;
