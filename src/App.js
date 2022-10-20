import "./App.css";
import './Sass/Sass.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DateFilter from "./dars/DateFilter";
// import DateFilter from "./dars/DateFilter";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dateFilter" element={<DateFilter />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
