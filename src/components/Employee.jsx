import React, { useState } from "react";
import Header from "./Header";
import SubSidebar from "./SubSidebar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmployeeFilter from "./EmployeeFilter";
import Sidebar from "./Sidebar";

const Employee = () => {
  const [isSubSidebarVisible, setSubSidebarVisible] = useState(true);

  const toggleSubSidebar = () => {
    setSubSidebarVisible(!isSubSidebarVisible);
  };

  return (
    <>
      <Header
        onSidebarToggle={toggleSubSidebar}
        isSidebarOpen={isSubSidebarVisible}
      />

      <div className="d-flex">
        <Sidebar />
        {/* SubSidebar */}
        <SubSidebar isVisible={isSubSidebarVisible} />

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
                    <a href="#" className="text-decoration-none text-dark fs-5">
                      Dashboard
                    </a>
                  </li>
                  <li className="fs-5 d-flex align-items-center gap-2">
                    <FontAwesomeIcon  
                      icon={faChevronRight}
                      className="opacity-25"
                    />
                    Employee
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
