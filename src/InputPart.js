import React from "react";
import { FloatingLabel } from "react-bootstrap-floating-label";

const InputPart = () => {
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
          <h4>Intermediate</h4>
          <div style={{ height: "50%", backgroundColor: "azure" }}>
            select labels:
          </div>
          <div style={{ height: "50%", backgroundColor: "azure" }}>
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
          </div>
        </div>

        <br style={{ clear: "left" }} />
      </div>
    </div>
  );
};

export default InputPart;
