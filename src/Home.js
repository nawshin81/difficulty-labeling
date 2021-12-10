import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./IUT.png";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('label');
    <Link to="/Labelpage" />;
  };

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
        onClick={handleSubmit}
      >
        <label>
          Student ID:
          <input type="text" name="id" />
        </label>
      </form>
      <Outlet/>
    </div>
  );
};

export default Home;
