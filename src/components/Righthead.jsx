import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const RightHead = ({ 
  isDarkMode, 
  toggleDarkMode, 
  toggleGreenMode, 
  toggleOrangeMode, 
  setHeaderColor, 
  resetToDefault 
}) => {
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  
  const modeRef = useRef(null);
  const notificationsRef = useRef(null);
  const adminRef = useRef(null);

  const toggleModeMenu = () => setShowModeMenu(!showModeMenu);
  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const toggleAdminMenu = () => setShowAdminMenu(!showAdminMenu);

  return (
    <div className="d-flex align-items-center gap-4">
      {/* Mode Menu */}
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
            <li className="submenu-item" onClick={toggleDarkMode}>Dark</li>
            <li className="submenu-item hover-green" onClick={toggleGreenMode}>Green</li>
            <li className="submenu-item hover-orange" onClick={toggleOrangeMode}>Orange</li>
            <li className="submenu-item" onClick={() => {
              setHeaderColor("#fff");
              resetToDefault(true);
            }}>Default</li>
          </ul>
        )}
      </div>

      {/* Search Input */}
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
            width: "25px" 
          }} 
        />
      </form>

      {/* Notifications */}
      <div className="position-relative" ref={notificationsRef}>
        <FaRegBell size="20" onClick={toggleNotifications} style={{ cursor: "pointer" }} />
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
              fontSize: "12px",
            }}
          >
            <span>{notificationCount}</span>
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
            }}
          >
            <div
              className="topnav-dropdown-header d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: isDarkMode ? "#444" : "#f8f9fa",
                color: isDarkMode ? "#fff" : "#000",
              }}
            >
              <span className="notification-title">Notifications</span>
              <a href="#" className="btn btn-link p-0 text-decoration-none" style={{ color: "#ff7849" }}>
                Clear All
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list list-unstyled">
                {/* All Notifications */}
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
                          <span className="noti-title">John Doe</span> added new task{" "}
                          <span className="noti-title">Patient appointment booking</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
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
                          <span className="noti-title">Tarah Shropshire</span> changed the task name{" "}
                          <span className="noti-title">Appointment booking with payment gateway</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
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
                          <span className="noti-title">Misty Tison</span> added{" "}
                          <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span>{" "}
                          to project <span className="noti-title">Doctor available module</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
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
                          <span className="noti-title">Rolland Webber</span> completed task{" "}
                          <span className="noti-title">Patient and Doctor video conferencing</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
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
                          <span className="noti-title">Bernardo Galaviz</span> added new task{" "}
                          <span className="noti-title">Private chat module</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
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
                className="btn-sm w-100 text-decoration-none"
                style={{ color: "#7b7b7b" }}
              >
                View all Notifications
              </a>
            </div>
          </div>
        )}
      </div>

      {/* User Avatar */}
      <img 
        alt="User Avatar" 
        src="https://via.placeholder.com/100x100?text=John+Doe" 
        className="rounded-circle" 
        style={{ width: "35px" }} 
      />

      {/* Admin Menu */}
      <div className="d-flex gap-1" style={{ cursor: "pointer", marginRight: "30px" }} ref={adminRef}>
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
  );
};

export default RightHead;
