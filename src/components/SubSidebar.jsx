import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const SubSidebar = ({ isVisible , isDarkMode, headerColor }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname || "/");
  }, [location]);

  const handleLinkClick = useCallback((path) => {
    setActiveLink(path);
  }, []);

  return (
    <aside
      className={`py-3 ${isVisible ? "d-block" : "d-none"}`}
      style={{
        backgroundColor: isDarkMode ? "#444" : headerColor || "white",
        position: "fixed",
         color: isDarkMode ? "#fff" : "#000", 
        height: "100%",
        marginLeft: "75px",
        width: isVisible ? "200px" : "0",
        transition: "width 0.1s",
        overflowY: "auto",
      }}
      aria-hidden={!isVisible}
    >
      <div className="container">
        <div className="d-flex flex-column justify-content-between">
          <a href="/" className="text-dark text-decoration-none">Dashboard</a>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto d-flex flex-column">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                    style={{ color: activeLink === "/" ? "#ff8459" : "inherit" }}
                    onClick={() => handleLinkClick("/")}
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/employee"
                    className={`nav-link ${activeLink === "/employee" ? "active" : ""}`}
                    style={{ color: activeLink === "/employee" ? "#ff8459" : "inherit" }}
                    onClick={() => handleLinkClick("/employee")}
                  >
                    Employee Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SubSidebar;
