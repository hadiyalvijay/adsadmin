import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SubSidebar from "./SubSidebar";
import EmployeeFilter from "./EmployeeFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Employee = () => {
  const [isSubSidebarVisible, setSubSidebarVisible] = useState(false);
  const [view, setView] = useState("grid"); // State to manage the view (grid or list)

  const toggleSubSidebar = () => {
    setSubSidebarVisible(!isSubSidebarVisible);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <Header onSidebarToggle={toggleSubSidebar} />

      <div
        className="d-flex flex-column flex-md-row"
        style={{
          backgroundColor: "#f3f4f6",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* SubSidebar */}
        <div
          className="sub-sidebar"
          style={{
            width: isSubSidebarVisible ? "250px" : "0",
            transition: "width 0.3s",
            overflowX: "hidden",
            zIndex: 1,
            // position: "relative",
          }}
        >
          <SubSidebar isVisible={isSubSidebarVisible} />
        </div>

        {/* Sidebar */}
        <div
          className="sidebar"
          style={{
            zIndex: 1,
            position: "relative",
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          className="main-content"
          style={{
            marginLeft: isSubSidebarVisible ? "250px" : "250px",
            transition: "margin-left 0.3s",
            flex: 1,
            padding: "1rem",
          }}
        >
          <div className="container-fluid">
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

              {/* Search and filter section */}
              <div className="col-12">
                <EmployeeFilter view={view} onViewChange={handleViewChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
