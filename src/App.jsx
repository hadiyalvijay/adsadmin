import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Employee from "./components/Employee"; // Employee component
import Admin from "./components/Admin/admin";
import SubSidebar from "./components/SubSidebar";

const App = () => {
  return (
    <Router>
      <div className="d-flex">

        {/* Main content */}
        <div className="main-content" >
          <Routes>
            <Route path="/" element={ <Admin />} />
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
