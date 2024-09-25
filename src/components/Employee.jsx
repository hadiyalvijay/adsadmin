import React, { useState } from "react";
import Header from "./Header";
import SubSidebar from "./SubSidebar";
import { MdKeyboardArrowRight } from "react-icons/md";

import EmployeeFilter from "./EmployeeFilter";
import Sidebar from "./Sidebar";

const Employee = ({isDarkMode, headerColor }) => {
  const [isSubSidebarVisible, setSubSidebarVisible] = useState(true);
  

  const toggleSubSidebar = () => {
    setSubSidebarVisible(!isSubSidebarVisible);
  };
  const updateTheme = (darkMode, color) => {
    setIsDarkMode(darkMode);
    setHeaderColor(color);
  };

  return (
    <>
      <Header
        onSidebarToggle={toggleSubSidebar}
        isSidebarOpen={isSubSidebarVisible}
        setTheme={updateTheme}
      />

      <div className="d-flex">
        <Sidebar />
        {/* SubSidebar */}
        <SubSidebar 
          isVisible={isSubSidebarVisible}
          isDarkMode={isDarkMode}
          headerColor={headerColor} />

        {/* Main Content */}
        <div
          className="employee-content"
          style={{
            marginLeft: isSubSidebarVisible ? "275px" : "75px",
            transition: "margin-left 0.3s",
            width: "100%",
            backgroundColor:"#f3f4f6"
          }}
        >
          <div className="container-fluid py-4">
          
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="page-title">Employee</h2>
              </div>

              <div className="col-12 col-md-6">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none text-dark fs-6">
                      Dashboard
                    </a>
                  </li>
                  <li className="fs-5 d-flex align-items-center gap-2">
                 <div className="d-flex align-items-center fs-6">
                 <MdKeyboardArrowRight />Employee
                 </div>
                    
                  </li>
                </ul>
              </div>

              {/* Search and Filter Section */}
              <div className="col-12">
                <EmployeeFilter  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
