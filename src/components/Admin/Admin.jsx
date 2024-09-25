import React, { useState } from "react";
import Sidebar from "../Sidebar";
import SubSidebar from "../SubSidebar";
import Header from "../Header";
import Card from "./Card";
import Graph from "./Graph";
import Graphprofit from "./Graphprofit";
import Widget from "./Widget";
import AdminTable from "./AdminTable";
import { MdKeyboardArrowRight } from "react-icons/md";

const Admin = () => {
  const [isSubSidebarVisible, setSubSidebarVisible] = useState(true); 

  const toggleSubSidebar = () => setSubSidebarVisible((prev) => !prev);

  return (
    <div className="admin-container">
      <Header
        onSidebarToggle={toggleSubSidebar}
        isSidebarOpen={isSubSidebarVisible}
      />
      <div
        className={`d-flex ${isSubSidebarVisible ? "sidebar-expanded" : "sidebar-collapsed"}`}
      >
        <Sidebar />
        <SubSidebar isVisible={isSubSidebarVisible} />
        <main className="employee-content">
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h2 className="page-title">Welcome Admin!</h2>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <ul className="breadcrumb d-flex justify-content-end mb-0">
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none text-dark fs-6">
                      Dashboard
                    </a>
                  </li>
                  <li className="d-flex align-items-center gap-2 fs-5">
                 <div className="d-flex align-items-center fs-6" >
                 <MdKeyboardArrowRight className="mt-1" />Job Dashboard
                 </div>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <div>
                  <Card />
                </div>
                <div>
                  <Graph />
                </div>
                <div className="mt-5">
                  <Graphprofit />
                </div>
                <div className="mt-5">
                  <Widget />
                </div>
                <div className="mt-5">
                  <AdminTable />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
