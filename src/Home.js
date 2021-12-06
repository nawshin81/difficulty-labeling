import React from "react";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1> Islamic University of Technology </h1>
          <h3>Department of Computer Science</h3>
        </div>
      </div>
      <form>
        <label>
          Student ID:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
};

export default Home;
