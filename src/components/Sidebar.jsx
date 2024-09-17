import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { RiDashboardLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiFolderOpenBold } from "react-icons/pi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { BiStopwatch } from "react-icons/bi";
import { GoGoal } from "react-icons/go";
import { MdChecklistRtl } from "react-icons/md";
import PageHeader from "./SubSidebar"; // Adjust the import based on your file structure

const Sidebar = () => {
  const [showPageHeader, setShowPageHeader] = useState(false);
  const sidebarRef = useRef(null);

  const handleHomeClick = () => {
    setShowPageHeader(!showPageHeader);
    
    if (sidebarRef.current) {
      sidebarRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
        // If the content is scrolled to the bottom
        if (scrollTop + clientHeight >= scrollHeight) {
          sidebarRef.current.style.position = 'fixed'; // Change to fixed
          sidebarRef.current.style.bottom = '0';
          sidebarRef.current.style.overflowY = 'hidden'; // Hide scrollbar
        } else {
          sidebarRef.current.style.position = 'sticky';
          // sidebarRef.current.style.bottom = 'initial';
          sidebarRef.current.style.overflowY = 'auto'; // Show scrollbar
        }
      }
    };

    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      sidebarElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sidebarElement) {
        sidebarElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="sidebar" ref={sidebarRef} style={{backgroundColor:"#ff7849" ,width:"74px", height: "100vh", overflowY: "scroll", scrollbarWidth: 'none', msOverflowStyle: 'none'}} >
        <ul className="list-unstyled d-flex flex-column align-items-center justify-content-around h-100">
          <li className="my-3">
            <FontAwesomeIcon 
              icon={faHouse} 
              className="text-white fs-5" 
              onClick={handleHomeClick} 
              style={{ cursor: "pointer" }} 
            />
          </li>
          <li className="my-3"><RiDashboardLine className="text-white fs-4" /></li>
          <li className="my-3"><FaUserGroup className="text-white fs-4" /></li>
          <li className="my-3"><FaUser className="text-white fs-4" /></li>
          <li className="my-3"><PiFolderOpenBold className="text-white fs-4" /></li>
          <li className="my-3"><MdOutlineLeaderboard className="text-white fs-4" /></li>
          <li className="my-3"><LuTicket className="text-white fs-4" /></li>
          <li className="my-3"><MdContentPaste className="text-white fs-4" /></li>
          <li className="my-3"><MdOutlineAccountBalanceWallet className="text-white fs-4" /></li>
          <li className="my-3"><FaFileInvoiceDollar className="text-white fs-4" /></li>
          <li className="my-3"><AiOutlineSafetyCertificate className="text-white fs-4" /></li>
          <li className="my-3"><MdOutlineReportGmailerrorred className="text-white fs-4" /></li>
          <li className="my-3"><BiStopwatch className="text-white fs-4" /></li>
          <li className="my-3"><GoGoal className="text-white fs-4" /></li>
          <li className="my-3"><MdChecklistRtl className="text-white fs-4" /></li>
        </ul>
      </div>
      {showPageHeader && <PageHeader />}
      
    </>
  );
};

export default Sidebar;