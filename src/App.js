import React from "react";
import Home from "./Home";
import Labelpage from "./Labelpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Labelpage" element={<Labelpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
