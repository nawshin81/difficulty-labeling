import React from "react";
import { useState, useEffect } from "react";
import { Form} from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap-floating-label";

const InputPart = () => {
  const rules = [{ id: 1, title: 'Hello World' },
  { id: 2, title: 'Installation' }];
  let arr= new Array(rules.length)
  const [difficulty, setDifficulty] = useState();
  const [collapse, setCollapse] = useState(true);
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setDifficulty(target.value);
      setCollapse(false);
    }
  };

  // useEffect(() => {
  //   setCheckedState(arr.fill(false));
  // }, difficulty);

  const [checkedState, setCheckedState] = useState(
    arr.fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }


  return (
    <div>
      {/* <h2 style={{display: "flex",justifyContent: "center",
          alignItems: "center",textDecorationLine: 'underline'}}>Rules for reading</h2> */}
      <div style={{ width: "90%", paddingLeft: "5%" }}>


        <div style={{ float: "left", width: "45%" }}>
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


        <div style={{ float: "left", width: "45%" }}>
          <h4>Select Difficulty label</h4>
          <Form>
            <div>
              <label >
                <input type="radio" value="Basic" checked={difficulty === 'Basic'}
                  onChange={handleChange} />
                <span>Basic</span>
              </label>

              <label >
                <input type="radio" value="Intermediate" checked={difficulty === 'Intermediate'}
                  onChange={handleChange} />
                <span>Intermediate</span>
              </label>

              <label>
                <input type="radio" value="Advance" checked={difficulty === 'Advance'}
                  onChange={handleChange} />
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
          {/* <div style={{ height: "50%", backgroundColor: "azure" }}> */}
          {/* <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel> */}
          {/* </div> */}
        </div>

        <br style={{ clear: "left" }} />
      </div>
    </div>
  );
};

export default InputPart;
