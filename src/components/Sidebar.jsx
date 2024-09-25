import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { RiDashboardLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiFolderOpenBold } from "react-icons/pi";
import {
  MdOutlineLeaderboard,
  MdContentPaste,
  MdOutlineAccountBalanceWallet,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiStopwatch } from "react-icons/bi";
import { GoGoal } from "react-icons/go";
import { MdChecklistRtl } from "react-icons/md";
import SubSidebar from "./SubSidebar"; // Adjust the import based on your file structure

const Sidebar = () => {
  const [showSubSidebar, setShowSubSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const subSidebarRef = useRef(null);

  // Handle mouse enter events
  const handleHomeMouseEnter = () => setShowSubSidebar(true);
  const handleSubSidebarMouseEnter = () => setShowSubSidebar(true);

  // Handle mouse leave events
  const handleMouseLeave = () => {
    // Fix: Removed extra closing parenthesis
    if (
      !sidebarRef.current.contains(document.activeElement) &&
      !subSidebarRef.current.contains(document.activeElement)
    ) {
      setShowSubSidebar(false);
    }
  }; // Corrected the function closure

  return (
    <>
      <div
        className="sidebar"
        ref={sidebarRef}
        onMouseEnter={handleHomeMouseEnter} // Ensure the sidebar itself can trigger visibility
        onMouseLeave={handleMouseLeave} // Handle visibility when leaving the sidebar
        style={{
          backgroundColor: "#ff7849",
          width: "74px",
          height: "100%",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          position: "fixed",
          zIndex: 999,
        }}
      >
        <ul className="list-unstyled d-flex flex-column align-items-center justify-content-around h-100">
          <li className="my-3" onMouseEnter={handleHomeMouseEnter}>
            <FontAwesomeIcon
              icon={faHouse}
              className="text-white fs-5"
              style={{ cursor: "pointer" }}
            />
          </li>
          <li className="my-3">
            <RiDashboardLine className="text-white fs-4" />
          </li>
          <li className="my-3">
            <FaUserGroup className="text-white fs-4" />
          </li>
          <li className="my-3">
            <FaUser className="text-white fs-4" />
          </li>
          <li className="my-3">
            <PiFolderOpenBold className="text-white fs-4" />
          </li>
          <li className="my-3">
            <MdOutlineLeaderboard className="text-white fs-4" />
          </li>
          <li className="my-3">
            <LuTicket className="text-white fs-4" />
          </li>
          <li className="my-3">
            <MdContentPaste className="text-white fs-4" />
          </li>
          <li className="my-3">
            <MdOutlineAccountBalanceWallet className="text-white fs-4" />
          </li>
          <li className="my-3">
            <FaFileInvoiceDollar className="text-white fs-4" />
          </li>
          <li className="my-3">
            <AiOutlineSafetyCertificate className="text-white fs-4" />
          </li>
          <li className="my-3">
            <MdOutlineReportGmailerrorred className="text-white fs-4" />
          </li>
          <li className="my-3">
            <BiStopwatch className="text-white fs-4" />
          </li>
          <li className="my-3">
            <GoGoal className="text-white fs-4" />
          </li>
          <li className="my-3">
            <MdChecklistRtl className="text-white fs-4" />
          </li>
        </ul>
      </div>
      {showSubSidebar && (
        <div
          ref={subSidebarRef}
          onMouseEnter={handleSubSidebarMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          style={{
            position: "fixed",
            top: "60px", 
            left: "0",
            width: "200px",
            backgroundColor: "white",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",  
          }}
        >
          <SubSidebar isVisible={showSubSidebar} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
