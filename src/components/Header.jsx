import React, { useState, useRef, useEffect } from "react";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineSearch, MdOutlineKeyboardArrowDown } from "react-icons/md";
import SubSidebar from "./SubSidebar"; // Import the SubSidebar component

const Header = () => {
  const [showClients, setShowClients] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLeads, setShowLeads] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [showSmarthrText, setShowSmarthrText] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default is open

  const clientsRef = useRef(null);
  const projectsRef = useRef(null);
  const leadsRef = useRef(null);
  const ticketsRef = useRef(null);
  const adminRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
    setShowSmarthrText(!sidebarOpen); // Hide/show Smarthr text based on sidebar state
  };

  const toggleClientsMenu = () => {
    setShowClients(!showClients);
    setShowProjects(false);
    setShowLeads(false);
    setShowTickets(false);
    setShowAdminMenu(false);
  };

  const toggleProjectsMenu = () => {
    setShowProjects(!showProjects);
    setShowClients(false);
    setShowLeads(false);
    setShowTickets(false);
    setShowAdminMenu(false);
  };

  const toggleLeadsMenu = () => {
    setShowLeads(!showLeads);
    setShowClients(false);
    setShowProjects(false);
    setShowTickets(false);
    setShowAdminMenu(false);
  };

  const toggleTicketsMenu = () => {
    setShowTickets(!showTickets);
    setShowClients(false);
    setShowProjects(false);
    setShowLeads(false);
    setShowAdminMenu(false);
  };

  const toggleAdminMenu = () => {
    setShowAdminMenu(!showAdminMenu);
    setShowClients(false);
    setShowProjects(false);
    setShowLeads(false);
    setShowTickets(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clientsRef.current &&
        !clientsRef.current.contains(event.target) &&
        projectsRef.current &&
        !projectsRef.current.contains(event.target) &&
        leadsRef.current &&
        !leadsRef.current.contains(event.target) &&
        ticketsRef.current &&
        !ticketsRef.current.contains(event.target) &&
        adminRef.current &&
        !adminRef.current.contains(event.target)
      ) {
        setShowClients(false);
        setShowProjects(false);
        setShowLeads(false);
        setShowTickets(false);
        setShowAdminMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        style={{
          backgroundColor: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="col">
          <div className="d-flex justify-content-between">
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

              {showSmarthrText && (
                <div className="ms-3 d-none d-md-block">
                  <h2>Smarthr</h2>
                </div>
              )}

              <div
                className={`ms-3 ${sidebarOpen ? "move-left" : ""}`}
                style={{
                  cursor: "pointer",
                  transition: "width 0.3s",
                }}
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ paddingLeft: sidebarOpen ? "50px" : "0" }}
                />
              </div>

              <div className="position-relative ms-3" ref={clientsRef}>
                <div onClick={toggleClientsMenu} style={{ cursor: "pointer" }}>
                  Clients <MdOutlineKeyboardArrowDown />
                </div>
                {showClients && (
                  <ul
                    className="list-unstyled position-absolute"
                    style={{ top: "100%", left: "0" }}
                  >
                    <li className="card p-2">Clients</li>
                  </ul>
                )}
              </div>

              <div className="position-relative ms-3" ref={projectsRef}>
                <div onClick={toggleProjectsMenu} style={{ cursor: "pointer" }}>
                  Projects <MdOutlineKeyboardArrowDown />
                </div>
                {showProjects && (
                  <ul
                    className="list-unstyled position-absolute card p-2"
                    style={{ top: "100%", left: "0", width: "100px" }}
                  >
                    <li>Projects</li>
                    <li>Tasks</li>
                    <li>Task Board</li>
                  </ul>
                )}
              </div>

              <div className="position-relative ms-3" ref={leadsRef}>
                <div onClick={toggleLeadsMenu} style={{ cursor: "pointer" }}>
                  Leads <MdOutlineKeyboardArrowDown />
                </div>
                {showLeads && (
                  <ul
                    className="list-unstyled position-absolute"
                    style={{ top: "100%", left: "0" }}
                  >
                    <li className="card p-2">Leads</li>
                  </ul>
                )}
              </div>

              <div className="position-relative ms-3" ref={ticketsRef}>
                <div onClick={toggleTicketsMenu} style={{ cursor: "pointer" }}>
                  Tickets <MdOutlineKeyboardArrowDown />
                </div>
                {showTickets && (
                  <ul
                    className="list-unstyled position-absolute"
                    style={{ top: "100%", left: "0" }}
                  >
                    <li className="card p-2">Tickets</li>
                  </ul>
                )}
              </div>
            </div>

            <div className="d-flex align-items-center gap-4">
              <form action="" className="position-relative">
                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Search"
                  style={{ borderRadius: "50px" }}
                />
                <MdOutlineSearch
                  className="position-absolute"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    height: "25px",
                    width: "25px",
                  }}
                />
              </form>

              <FontAwesomeIcon icon={faBell} />
              <img
                alt="avatar"
                src="https://via.placeholder.com/100x100?text=John+Doe"
                className="rounded-circle"
                style={{ width: "35px" }}
              />

              <div
                className="d-flex gap-1"
                style={{ cursor: "pointer", marginRight: "15px" }}
                onClick={toggleAdminMenu}
              >
                <div className="position-relative ms-3" ref={adminRef}>
                  <div onClick={toggleAdminMenu} style={{ cursor: "pointer" }}>
                    Admin <MdOutlineKeyboardArrowDown />
                  </div>
                  {showAdminMenu && (
                    <ul
                      className="list-unstyled position-absolute card p-2"
                      style={{ top: "100%", left: "0", width: "100px" }}
                    >
                      <li>My Profile</li>
                      <li>Settings</li>
                      <li>Logout</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SubSidebar isVisible={sidebarOpen} /> {/* Pass the sidebarOpen state to SubSidebar */}
    </>
  );
};

export default Header;
