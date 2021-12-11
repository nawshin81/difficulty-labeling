import React from "react";

const Rules = (props) => {

  const rules=props.rules;

  return (
    <div className="w-100">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecorationLine: "underline",
          marginTop: "3%",
          marginBottom:"3%",
        }}
      >
        Rules for reading
      </h2>
      <div> 

        <div style={{ float: "left", width: "33%", height:450, backgroundColor: "#abe2c7" }}>
          <h4 className="d-flex justify-content-center pt-3">{rules[0].title}</h4>
          {rules[0].item.map(({ item_id, item_title }, index) => {
              return (
          <p style={{ paddingLeft: "5%", paddingRight: "5%" }}>{item_id+1}. {item_title}</p>
            );
            })}
        </div>

        <div style={{ float: "left", width: "33%", height:450, backgroundColor: "#d6fadf" }}>
          <h4 className="d-flex justify-content-center pt-3">{rules[1].title}</h4>
          {rules[1].item.map(({ item_id, item_title }, index) => {
              return (
          <p style={{ paddingLeft: "5%", paddingRight: "5%" }}>{item_id+1}. {item_title}</p>
            );
            })}
        </div>

        <div style={{ float: "left", width: "33%",height:450, backgroundColor: "#91c9d6" }}>
          <h4 className="d-flex justify-content-center pt-3">{rules[2].title}</h4>
          {rules[2].item.map(({ item_id, item_title }, index) => {
              return (
          <p style={{ paddingLeft: "5%", paddingRight: "5%" }}>{item_id+1}. {item_title}</p>
            );
            })}
        </div>
      </div>
    </div>
  );
};
export default Rules;
