import React from "react";
import Sidebar from "./Sidebar";


const SubSidebar = ({ isVisible = true }) => { // Use the isVisible prop to control visibility
  return (
  <>
    <aside
      className={`py-3 ${isVisible ? 'd-block' : 'hidden'}`} // Toggle display based on isVisible
      style={{
        backgroundColor: "white",
        position: "fixed",
        height: "100%",
        marginLeft: "75px",
        width: isVisible ? "200px" : "0",
        transition: "width 0.1s", // Speed up transition
        overflowY: "auto", 

      }}
    >
      <div className="container">
        <div className="d-flex flex-column justify-content-between">
          <a href="/" className="text-dark text-decoration-none">Dashboard</a>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto d-flex flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Admin Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Employee Dashboard</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  </>
  );
};

export default SubSidebar;
