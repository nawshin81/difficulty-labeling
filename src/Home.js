import React from "react";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"3%"
        }}
      >
        <div>
          <h1> Islamic University of Technology </h1>
          <h3 style={{paddingLeft:"12%"}}>Department of Computer Science</h3>
        </div>
      </div>
      <form style={{ float: "right", width: "30%", marginBottom:"3%" }}>
        <label>
          Student ID:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
};

export default Home;
