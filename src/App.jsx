import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Employee from "./components/Employee"; // Employee component
import SubSidebar from "./components/SubSidebar";

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar should be present across all pages */}

        {/* Main content */}
        <div className="main-content" >
        <Employee />
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<SubSidebar />} />
            
            {/* Employee Route */}
            <Route path="/sidebar" element={<Sidebar />} />
            
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
