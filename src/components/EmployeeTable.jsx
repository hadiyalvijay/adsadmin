import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const EmployeeTable = () => {
  const [view, setView] = useState("list"); // State to manage view

  const handleToggleView = () => {
    setView(view === "list" ? "grid" : "list"); // Toggle between list and grid views
  };

  return (
    <div
      className="container-fluid mt-4"
      style={{ borderRadius: "2px", borderColor: "black", width: "100%" }}
    >
      {view === "list" ? (
        <div className="table-responsive">
          <table className="table table-striped custom-table text-center">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#f4f8ff" }}>Name</th>
                <th style={{ backgroundColor: "#f4f8ff" }}>Employee ID</th>
                <th style={{ backgroundColor: "#f4f8ff" }}>Email</th>
                <th style={{ backgroundColor: "#f4f8ff" }}>Mobile</th>
                <th
                  style={{ backgroundColor: "#f4f8ff" }}
                  className="text-nowrap"
                >
                  Join Date
                </th>
                <th style={{ backgroundColor: "#f4f8ff" }}>Role</th>
                <th
                  style={{ backgroundColor: "#f4f8ff" }}
                  className="text-end no-sort"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <div
                        className="avatar-container rounded-circle border border-primary d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          overflow: "hidden",
                          borderWidth: "2px",
                          borderColor: "#f98a49",
                          padding: "2px",
                        }}
                      >
                        <a href="profile.html" className="avatar">
                          <img
                            alt={employee.name}
                            src={employee.avatar}
                            className="rounded-circle"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <a href="#" className="text-decoration-none">
                          <div className="fw-bold">{employee.name}</div>
                          <div>
                            <span
                              className="text-muted"
                              style={{ color: "#f98a49" }}
                            >
                              {employee.role}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{employee.id}</td>
                  <td className="align-middle">{employee.email}</td>
                  <td className="align-middle">{employee.mobile}</td>
                  <td className="align-middle">{employee.joinDate}</td>
                  <div className="align-middle" style={{ textAlign: "center", padding: "14px" }}>
                   
                      <td
                        className=""
                        style={{
                          backgroundColor:
                            roleColors[employee.role]?.background || "#ffffff",
                          color: roleColors[employee.role]?.color || "#000000",
                          borderRadius: "10px",
                          height: "49px",
                          width: "200px",
                        }}
                      >
                        {employee.role}
                      </td>
                  </div>
                  <td className="align-middle text-end">
                    <div className="d-flex justify-content-center gap-3">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="card m-2"
              style={{ width: "18rem" }}
            >
              <img
                src={employee.avatar}
                className="card-img-top"
                alt={employee.name}
              />
              <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <p className="card-text">{employee.role}</p>
                <p className="card-text">{employee.email}</p>
                <p className="card-text">{employee.mobile}</p>
                <p className="card-text">{employee.joinDate}</p>
                <a href="#" className="btn btn-primary">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;

const roleColors = {
  "Web Designer": { background: "#fff8f6", color: "#ff7849" },
  "Web Developer": { background: "#fff8f6", color: "#ff7849" },
  "Software Tester": { background: "#fff4e1", color: "#ffa400" },
  "IOS Developer": { background: "#fff4e1", color: "#ffa400" },
  "Team Leader": { background: "#dceeff", color: "#4f7abd" },
  "Frontend Developer": { background: "#dceeff", color: "#4f7abd" },
  "Backend Developer": { background: "#fff8f6", color: "#ff7849" },
  "UX Designer": { background: "#fff8f6", color: "#ff7849" },
  "Project Manager": { background: "#fff4e1", color: "#ffa400" },
  "Marketing Specialist": { background: "#fff4e1", color: "#ffa400" },
  "Sales Executive": { background: "#dceeff", color: "#4f7abd" },
  "Customer Support": { background: "#dceeff", color: "#4f7abd" },
  "DevOps Engineer": { background: "#fff8f6", color: "#ff7849" },
  "Data Scientist": { background: "#fff8f6", color: "#ff7849" },
  "Business Analyst": { background: "#fff4e1", color: "#ffa400" },
  "Content Writer": { background: "#fff4e1", color: "#ffa400" },
  "Graphic Designer": { background: "#dceeff", color: "#4f7abd" },
  "SEO Specialist": { background: "#dceeff", color: "#4f7abd" },
};

const employees = [
  {
    id: "FT-0001",
    name: "John Doe",
    role: "Web Designer",
    email: "johndoe@example.com",
    mobile: "9876543210",
    joinDate: "1 Jan 2013",
    avatar: "https://via.placeholder.com/100x100?text=John+Doe",
  },
  {
    id: "FT-0002",
    name: "Richard Miles",
    role: "Web Developer",
    email: "richardmiles@example.com",
    mobile: "9876543210",
    joinDate: "18 Mar 2014",
    avatar: "https://via.placeholder.com/100x100?text=Richard+Miles",
  },
  {
    id: "FT-0003",
    name: "Jane Smith",
    role: "Software Tester",
    email: "janesmith@example.com",
    mobile: "9876543210",
    joinDate: "22 Feb 2015",
    avatar: "https://via.placeholder.com/100x100?text=Jane+Smith",
  },
  {
    id: "FT-0004",
    name: "Mike Litorus",
    role: "IOS Developer",
    email: "mikelitorus@example.com",
    mobile: "9876543210",
    joinDate: "1 Apr 2014",
    avatar: "https://via.placeholder.com/100x100?text=Mike+Litorus",
  },
  {
    id: "FT-0005",
    name: "Wilmer Deluna",
    role: "Team Leader",
    email: "wilmerdeluna@example.com",
    mobile: "9876543210",
    joinDate: "22 May 2014",
    avatar: "https://via.placeholder.com/100x100?text=Wilmer+Deluna",
  },
  {
    id: "FT-0006",
    name: "Jeffrey Warden",
    role: "Web Developer",
    email: "jeffreywarden@example.com",
    mobile: "9876543210",
    joinDate: "16 Jun 2013",
    avatar: "https://via.placeholder.com/100x100?text=Jeffrey+Warden",
  },
  {
    id: "FT-0007",
    name: "Bernardo Galaviz",
    role: "Web Developer",
    email: "bernardogalaviz@example.com",
    mobile: "9876543210",
    joinDate: "1 Jan 2013",
    avatar: "https://via.placeholder.com/100x100?text=Bernardo+Galaviz",
  },
  {
    id: "FT-0008",
    name: "Emily Davis",
    role: "Frontend Developer",
    email: "emilydavis@example.com",
    mobile: "9876543210",
    joinDate: "5 Jul 2016",
    avatar: "https://via.placeholder.com/100x100?text=Emily+Davis",
  },
  {
    id: "FT-0009",
    name: "Daniel Carter",
    role: "Backend Developer",
    email: "danielcarter@example.com",
    mobile: "9876543210",
    joinDate: "12 Aug 2017",
    avatar: "https://via.placeholder.com/100x100?text=Daniel+Carter",
  },
  {
    id: "FT-0010",
    name: "Laura Collins",
    role: "UX Designer",
    email: "lauracollins@example.com",
    mobile: "9876543210",
    joinDate: "21 Sep 2018",
    avatar: "https://via.placeholder.com/100x100?text=Laura+Collins",
  },
  {
    id: "FT-0011",
    name: "Andrew Thompson",
    role: "Project Manager",
    email: "andrewthompson@example.com",
    mobile: "9876543210",
    joinDate: "1 Oct 2019",
    avatar: "https://via.placeholder.com/100x100?text=Andrew+Thompson",
  },
  {
    id: "FT-0012",
    name: "Rachel Green",
    role: "Marketing Specialist",
    email: "rachelgreen@example.com",
    mobile: "9876543210",
    joinDate: "15 Nov 2020",
    avatar: "https://via.placeholder.com/100x100?text=Rachel+Green",
  },
  {
    id: "FT-0013",
    name: "Chris Martin",
    role: "Sales Executive",
    email: "chrismartin@example.com",
    mobile: "9876543210",
    joinDate: "7 Dec 2021",
    avatar: "https://via.placeholder.com/100x100?text=Chris+Martin",
  },
  {
    id: "FT-0014",
    name: "Jessica Adams",
    role: "Customer Support",
    email: "jessicaadams@example.com",
    mobile: "9876543210",
    joinDate: "9 Jan 2022",
    avatar: "https://via.placeholder.com/100x100?text=Jessica+Adams",
  },
  {
    id: "FT-0015",
    name: "William Johnson",
    role: "DevOps Engineer",
    email: "williamjohnson@example.com",
    mobile: "9876543210",
    joinDate: "2 Feb 2022",
    avatar: "https://via.placeholder.com/100x100?text=William+Johnson",
  },
  {
    id: "FT-0016",
    name: "Olivia Brown",
    role: "Data Scientist",
    email: "oliviabrown@example.com",
    mobile: "9876543210",
    joinDate: "25 Feb 2022",
    avatar: "https://via.placeholder.com/100x100?text=Olivia+Brown",
  },
  {
    id: "FT-0017",
    name: "James Wilson",
    role: "Business Analyst",
    email: "jameswilson@example.com",
    mobile: "9876543210",
    joinDate: "10 Mar 2022",
    avatar: "https://via.placeholder.com/100x100?text=James+Wilson",
  },
  {
    id: "FT-0018",
    name: "Sophia Lewis",
    role: "Content Writer",
    email: "sophialewis@example.com",
    mobile: "9876543210",
    joinDate: "19 Mar 2022",
    avatar: "https://via.placeholder.com/100x100?text=Sophia+Lewis",
  },
  {
    id: "FT-0019",
    name: "Mason Clark",
    role: "Graphic Designer",
    email: "masonclark@example.com",
    mobile: "9876543210",
    joinDate: "30 Mar 2022",
    avatar: "https://via.placeholder.com/100x100?text=Mason+Clark",
  },
  {
    id: "FT-0020",
    name: "Ava Scott",
    role: "SEO Specialist",
    email: "avascott@example.com",
    mobile: "9876543210",
    joinDate: "12 Apr 2022",
    avatar: "https://via.placeholder.com/100x100?text=Ava+Scott",
  },
];
