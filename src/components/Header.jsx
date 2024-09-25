import React, { useState, useRef, useEffect } from "react";
import Logo from "../img/logo.png";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineSearch, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import SubSidebar from "./SubSidebar";

const Header = ({ onSidebarToggle, isSidebarOpen, }) => {
  const [showClients, setShowClients] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLeads, setShowLeads] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [showSmarthrText, setShowSmarthrText] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerColor, setHeaderColor] = useState("#fff"); 
  const [theme, setTheme] = useState("default");

  const clientsRef = useRef(null);
  const projectsRef = useRef(null);
  const leadsRef = useRef(null);
  const ticketsRef = useRef(null);
  const adminRef = useRef(null);
  const notificationsRef = useRef(null);
  const modeRef = useRef(null); // Added ref for mode menu

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

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleModeMenu = () => {
    setShowModeMenu(!showModeMenu);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(true); 
    setTheme(true,"#333");
    setHeaderColor("#333"); 
    localStorage.setItem("colorMode", "dark"); 

  };

  const toggleGreenMode = () => {
    setIsDarkMode(false); // Ensure dark mode is off
    setTheme("green");
    setHeaderColor("#28a745"); // Set header color to green
    localStorage.setItem("colorMode", "green"); // Save preference
    // Update all dropdowns to green
    document.querySelectorAll("ul.dropdown-menu").forEach((menu) => {
      menu.style.backgroundColor = "#28a745"; // Set dropdown background to green
      menu.style.color = "#fff"; // Set text color to white
    });
  };

  const toggleOrangeMode = () => {
    setIsDarkMode(false); // Ensure dark mode is off
    setTheme("orange");
    setHeaderColor("#ff7f50"); // Set header color to orange
    localStorage.setItem("colorMode", "orange"); // Save preference
    // Update all dropdowns to orange
    document.querySelectorAll("ul.dropdown-menu").forEach((menu) => {
      menu.style.backgroundColor = "#ff7f50"; // Set dropdown background to orange
      menu.style.color = "#fff"; // Set text color to white
    });
  };

  const handleSidebarToggle = () => {
    onSidebarToggle();
    setShowSmarthrText(!showSmarthrText);
  };
  const resetToDefault = () => {
    setTheme("default");
    setHeaderColor("#fff");
    localStorage.setItem("colorMode", "default");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("colorMode") || "default";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Load the color mode from localStorage on component mount
    const savedMode = localStorage.getItem("colorMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
      setHeaderColor(
        savedMode === "dark"
          ? "#333"
          : savedMode === "green"
          ? "#28a745"
          : savedMode === "orange"
          ? "#ff7f50"
          : "#fff"
      ); 
    }
  }, []);

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
        !adminRef.current.contains(event.target) &&
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target) &&
        modeRef.current &&
        !modeRef.current.contains(event.target)
      ) {
        setShowClients(false);
        setShowProjects(false);
        setShowLeads(false);
        setShowTickets(false);
        setShowAdminMenu(false);
        setShowNotifications(false);
        setShowModeMenu(false); // Hide mode menu on outside click
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      style={{
        backgroundColor: isDarkMode ? "#333" : headerColor, // Change background color based on dark mode or selected color
        color: isDarkMode ? "#fff" : "#000", // Change text color based on dark mode
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
              className={`ms-3 ${isSidebarOpen ? "move-left" : ""}`}
              style={{
                cursor: "pointer",
                transition: "width 0.2s",
              }}
              onClick={handleSidebarToggle}
            >
              <h2 style={{ paddingLeft: isSidebarOpen ? "50px" : "0" }}>
                <HiOutlineBars3CenterLeft />
              </h2>
            </div>

            {/* Clients dropdown menu */}
            <div className="position-relative ms-3" ref={clientsRef}>
              <div onClick={toggleClientsMenu} style={{ cursor: "pointer" }}>
                Clients <MdOutlineKeyboardArrowDown />
              </div>
              {showClients && (
                <ul
                  className="list-unstyled position-absolute card p-2 dropdown-menu"
                  style={{
                    width: "140px",
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  <li className="submenu-item">Clients</li>
                </ul>
              )}
            </div>

            {/* Projects dropdown menu */}
            <div className="position-relative ms-3" ref={projectsRef}>
              <div onClick={toggleProjectsMenu} style={{ cursor: "pointer" }}>
                Projects <MdOutlineKeyboardArrowDown />
              </div>
              {showProjects && (
                <ul
                  className="list-unstyled position-absolute card p-3 dropdown-menu"
                  style={{
                    width: "140px",
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  <li className="submenu-item">Projects</li>
                  <li className="submenu-item">Tasks</li>
                  <li className="submenu-item">Task Board</li>
                </ul>
              )}
            </div>

            {/* Leads dropdown menu */}
            <div className="position-relative ms-3" ref={leadsRef}>
              <div onClick={toggleLeadsMenu} style={{ cursor: "pointer" }}>
                Leads <MdOutlineKeyboardArrowDown />
              </div>
              {showLeads && (
                <ul
                  className="list-unstyled position-absolute card p-2 dropdown-menu"
                  style={{
                    width: "140px",
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  <li className="submenu-item">Leads</li>
                </ul>
              )}
            </div>

            {/* Tickets dropdown menu */}
            <div className="position-relative ms-3" ref={ticketsRef}>
              <div onClick={toggleTicketsMenu} style={{ cursor: "pointer" }}>
                Tickets <MdOutlineKeyboardArrowDown />
              </div>
              {showTickets && (
                <ul
                  className="list-unstyled position-absolute card p-2 dropdown-menu"
                  style={{
                    width: "140px",
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  <li className="submenu-item">Tickets</li>
                </ul>
              )}
            </div>
          </div>

          <div className="d-flex align-items-center gap-4">
            <div className="position-relative" ref={modeRef}>
              <div onClick={toggleModeMenu} style={{ cursor: "pointer" }}>
                MODE <MdOutlineKeyboardArrowDown />
              </div>
              {showModeMenu && (
                <ul
                  className="list-unstyled position-absolute card p-3 dropdown-menu"
                  style={{
                    width: "140px",
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  <li
                    className="submenu-item hover-dark"
                    onClick={toggleDarkMode}
                  >
                    Dark
                  </li>
                  <li
                    className="green-menu hover-green"
                    onClick={toggleGreenMode}
                  >
                    Green
                  </li>
                  <li
                    className="orange-menu hover-Orange"
                    onClick={toggleOrangeMode}
                  >
                    Orange
                  </li>
                  <li
                    className="submenu-item default-menu"
                    onClick={() => {
                      setHeaderColor("#fff"); // Set header color to default
                      setIsDarkMode(false); // Ensure dark mode is off
                      resetToDefault(true);// Save preference
                    }}
                  >
                    Default
                  </li>
                </ul>
              )}
            </div>
            
            <form className="position-relative">
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

            <div className="  position-relative" ref={notificationsRef}>
              <FaRegBell
                size="20"
                onClick={toggleNotifications}
                style={{ cursor: "pointer" }}
              />
              {notificationCount > 0 && (
                <div
                  className="notification-count"
                  style={{
                    height: "17px",
                    width: "15px",
                    borderRadius: "50%",
                    backgroundColor: "#ff7849",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    top: "-5px",
                    right: "0",
                    left: "12px",
                    fontSize: "12px",
                  }}
                >
                  <span> {notificationCount}</span>
                </div>
              )}
              {showNotifications && (
                <div
                  className="dropdown-menu notifications position-absolute card p-2"
                  style={{
                    width: "350px",
                    right: 0,
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }} // Updated for dark mode
                >
                  <div
                    className="topnav-dropdown-header d-flex justify-content-between align-items-center"
                    style={{
                      backgroundColor: isDarkMode ? "#444" : "#f8f9fa",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  >
                    {" "}
                    {/* Updated for dark mode */}
                    <span className="notification-title">Notifications</span>
                    <a
                      href="#"
                      className="btn btn-link p-0 text-decoration-none"
                      style={{ color: "#ff7849" }}
                    >
                      Clear All
                    </a>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list list-unstyled">
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex gap-3">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt="avatar"
                                src="https://via.placeholder.com/40"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">John Doe</span>{" "}
                                added new task{" "}
                                <span className="noti-title">
                                  Patient appointment booking
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  4 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex gap-3">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt="avatar"
                                src="https://via.placeholder.com/40"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">
                                  Tarah Shropshire
                                </span>{" "}
                                changed the task name{" "}
                                <span className="noti-title">
                                  Appointment booking with payment gateway
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  6 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex gap-3">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt="avatar"
                                src="https://via.placeholder.com/40"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">Misty Tison</span>{" "}
                                added{" "}
                                <span className="noti-title">
                                  Domenic Houston
                                </span>{" "}
                                and{" "}
                                <span className="noti-title">Claire Mapes</span>{" "}
                                to project{" "}
                                <span className="noti-title">
                                  Doctor available module
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  8 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex gap-3">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt="avatar"
                                src="https://via.placeholder.com/40"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">
                                  Rolland Webber
                                </span>{" "}
                                completed task{" "}
                                <span className="noti-title">
                                  Patient and Doctor video conferencing
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  12 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex gap-3">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt="avatar"
                                src="https://via.placeholder.com/40"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">
                                  Bernardo Galaviz
                                </span>{" "}
                                added new task{" "}
                                <span className="noti-title">
                                  Private chat module
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  2 days ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="topnav-dropdown-footer">
                    <a
                      href="activities.html"
                      className=" btn-sm w-100 text-decoration-none"
                      style={{ color: "#7b7b7b" }}
                    >
                      View all Notifications
                    </a>
                  </div>
                </div>
              )}
            </div>

            <img
              alt="avatar"
              src="https://via.placeholder.com/100x100?text=John+Doe"
              className="rounded-circle"
              style={{ width: "35px" }}
            />

            <div
              className="d-flex gap-1"
              style={{ cursor: "pointer", marginRight: "30px" }}
              onClick={toggleAdminMenu}
            >
              <div className="position-relative ms-3" ref={adminRef}>
                <div onClick={toggleAdminMenu} style={{ cursor: "pointer" }}>
                  Admin <MdOutlineKeyboardArrowDown />
                </div>
                {showAdminMenu && (
                  <ul
                    className="list-unstyled position-absolute card p-2 dropdown-menu"
                    style={{
                      top: "100%",
                      right: "0",
                      width: "140px",
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  >
                    <li className="submenu-item">My Profile</li>
                    <li className="submenu-item">Settings</li>
                    <li className="submenu-item">Logout</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
