import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Home.js";
import Input from "./content/input.js";
import Error from "./error.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/0615/suhyun/system/data" element={<Input />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
