import React from "react";

const Rules = () => {
  return (
    <div>
      <h2 style={{display: "flex",justifyContent: "center",
          alignItems: "center",textDecorationLine: 'underline'}}>Rules for reading</h2>
      <div style={{ width: "90%", paddingLeft: "5%" }}>
        <div style={{ float: "left", width: "33%" ,backgroundColor:'#ADD8E6'}}>
          <h4>Basic</h4>
          <p>
              1.Rules rules rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              2.Rules rules rules rules rules rules rules rules rules rules.<br />
              3.Rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              4.Rules rules rules rules rules rules rules rules rules.<br />
              5.Rules rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              6.Rules rules rules rules rules rules rules.<br />
          </p>
        </div>
        <div style={{ float: "left", width: "33%",backgroundColor:'#ADD8E6' }}>
        <h4>Intermediate</h4>
          <p>
              1.Rules rules rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              2.Rules rules rules rules rules rules rules rules rules rules.<br />
              3.Rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              4.Rules rules rules rules rules rules rules rules rules.<br />
              5.Rules rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              6.Rules rules rules rules rules rules rules.<br />
          </p></div>
        <div style={{ float: "left", width: "33%",backgroundColor:'#ADD8E6' }}>
        <h4>Advanced</h4>
          <p>
              1.Rules rules rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              2.Rules rules rules rules rules rules rules rules rules rules.<br />
              3.Rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              4.Rules rules rules rules rules rules rules rules rules.<br />
              5.Rules rules rules rules rules rules rules rules rules rules rules rules rules rules.<br />
              6.Rules rules rules rules rules rules rules.<br />
          </p>
            </div>
        <br style={{ clear: "left" }} />
      </div>
    </div>
  );
};
export default Rules;
