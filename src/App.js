import "./App.css";
import './Sass/Sass.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DateFilter from "./dars1/DateFilter";
import Binary from "./dars2/Binary";
// import DateFilter from "./dars/DateFilter";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dateFilter" element={<DateFilter />} />
          <Route path="/binary" element={<Binary />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
