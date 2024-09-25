import React, { useState, useRef } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../img/logo.png"; // Ensure this path is correct

const Dropdown = ({ title, isOpen, toggleMenu, children, isDarkMode }) => {
  return (
    <div className="position-relative ms-3">
      <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
        {title} <MdOutlineKeyboardArrowDown />
      </div>
      {isOpen && (
        <ul
          className="list-unstyled position-absolute card p-2 dropdown-menu"
          style={{
            width: "140px",
            backgroundColor: isDarkMode ? "#333" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

const LeftHead = ({ isDarkMode, isSidebarOpen, handleSidebarToggle }) => {
  const [showClients, setShowClients] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLeads, setShowLeads] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  const toggleClientsMenu = () => setShowClients((prev) => !prev);
  const toggleProjectsMenu = () => setShowProjects((prev) => !prev);
  const toggleLeadsMenu = () => setShowLeads((prev) => !prev);
  const toggleTicketsMenu = () => setShowTickets((prev) => !prev);

  return (
    <div className="d-flex align-items-center">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#ff7849",
          width: "74px",
          height: "60px",
        }}
      >
        <a href="#" className="logo">
          <img src={Logo} width="40" height="40" alt="Logo" />
        </a>
      </div>

      <div
        className={`ms-3 ${isSidebarOpen ? "move-left" : ""}`}
        style={{ cursor: "pointer", transition: "width 0.2s" }}
        onClick={handleSidebarToggle}
      >
        <h2>
          <HiOutlineBars3CenterLeft />
        </h2>
      </div>

      <Dropdown title="Clients" isOpen={showClients} toggleMenu={toggleClientsMenu} isDarkMode={isDarkMode}>
        <li className="submenu-item">Clients</li>
      </Dropdown>

      <Dropdown title="Projects" isOpen={showProjects} toggleMenu={toggleProjectsMenu} isDarkMode={isDarkMode}>
        <li className="submenu-item">Projects</li>
        <li className="submenu-item">Tasks</li>
        <li className="submenu-item">Task Board</li>
      </Dropdown>

      <Dropdown title="Leads" isOpen={showLeads} toggleMenu={toggleLeadsMenu} isDarkMode={isDarkMode}>
        <li className="submenu-item">Leads</li>
      </Dropdown>

      <Dropdown title="Tickets" isOpen={showTickets} toggleMenu={toggleTicketsMenu} isDarkMode={isDarkMode}>
        <li className="submenu-item">Tickets</li>
      </Dropdown>
    </div>
  );
};

export default LeftHead;
