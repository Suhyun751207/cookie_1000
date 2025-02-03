import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Home.js";
import Error from "./error.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cookie_1000/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
