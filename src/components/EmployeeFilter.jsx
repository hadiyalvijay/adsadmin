import React, { useState } from "react";
import EmployeeTable from "./EmployeeTable"; // Import the EmployeeTable component
import Cards from "./Cards"; // Import the Cards component
import { BsGrid3X3GapFill } from "react-icons/bs";
import PropTypes from 'prop-types';

const EmployeeFilter = ({ view, onViewChange }) => {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleAddEmployee = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="card shadow-sm">
          <div className="card-body" style={{ backgroundColor: "#f3f4f6" }}>
            {/* Search and View Buttons */}
            <div
              className="d-flex flex-column flex-md-row justify-content-between mb-3"
              style={{ backgroundColor: "white", height: "80px" }}
            >
              <div className="row g-3 align-items-center">
                <div className="col-12 col-sm-6 col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Employee ID"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Employee Name"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <select className="form-select">
                    <option>Select Designation</option>
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>Android Developer</option>
                    <option>iOS Developer</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <button
                    className="btn btn-secondary w-100"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="d-flex align-items-center mt-3 mt-md-0">
                {/* View Toggle Buttons */}
                <div className="d-flex gap-2">
                  <div>
                    <a
                      className={`${view === "grid" ? "text-success" : "text-secondary"}`}
                      aria-label="Grid View"
                      onClick={() => onViewChange("grid")}
                      disabled={view === "grid"}
                      style={{ cursor: "pointer" }}
                    >
                      <BsGrid3X3GapFill style={{ fontSize: "24px", marginRight: "20px" }} />
                    </a>
                  </div>
                  <div>
                    <a
                      className={`${view === "list" ? "text-success" : "text-secondary"}`}
                      aria-label="List View"
                      onClick={() => onViewChange("list")}
                      disabled={view === "list"}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fa fa-bars" style={{ fontSize: "24px", marginRight: "30px", marginTop: "4px" }}></i>
                    </a>
                  </div>
                </div>

                <div className="ms-3 mt-3 mt-md-0">
                  <button
                    className="btn btn-success rounded-pill"
                    aria-label="Add Employee"
                    onClick={handleAddEmployee}
                  >
                    <i className="fa fa-plus me-2 fs-5"></i>Add Employee
                  </button>
                </div>
              </div>
            </div>

            {/* Conditional Rendering Based on View */}
            {view === "list" ? (
              <EmployeeTable />
            ) : (
              <Cards />
            )}

            {/* Modal Component */}
            {showModal && (
              <div
                id="add_employee"
                className="modal fade show"
                role="dialog"
                style={{ display: "block" }}
                aria-labelledby="add_employee_modal_label"
                aria-hidden={!showModal}
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="add_employee_modal_label">
                        Add Employee
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleSubmit}>
                        {/* Personal Information Section */}
                        <div className="mb-4">
                          <h6 className="mb-3">Personal Information</h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  First Name <span className="text-danger">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Last Name
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Username <span className="text-danger">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Email <span className="text-danger">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  type="email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Password
                                </label>
                                <input
                                  className="form-control"
                                  type="password"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Confirm Password
                                </label>
                                <input
                                  className="form-control"
                                  type="password"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Company Details Section */}
                        <div className="mb-4">
                          <h6 className="mb-3">Company Details</h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Employee ID <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Joining Date <span className="text-danger">*</span>
                                </label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control datetimepicker"
                                    type="text"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="col-form-label">
                                  Company
                                </label>
                                <select className="form-select">
                                  <option value="">Global Technologies</option>
                                  <option value="1">Delta Infotech</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Department <span className="text-danger">*</span>
                                </label>
                                <select className="form-select">
                                  <option>Select Department</option>
                                  <option>Web Development</option>
                                  <option>IT Management</option>
                                  <option>Marketing</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Designation <span className="text-danger">*</span>
                                </label>
                                <select className="form-select">
                                  <option>Select Designation</option>
                                  <option>Web Designer</option>
                                  <option>Web Developer</option>
                                  <option>Android Developer</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Permissions Section */}
                        <div className="mb-4">
                          <h6 className="mb-3">Permissions</h6>
                          <div className="table-responsive">
                            <table className="table table-striped custom-table">
                              <thead>
                                <tr>
                                  <th>Module Permission</th>
                                  <th className="text-center">Read</th>
                                  <th className="text-center">Write</th>
                                  <th className="text-center">Create</th>
                                  <th className="text-center">Delete</th>
                                  <th className="text-center">Import</th>
                                  <th className="text-center">Export</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  "Holidays",
                                  "Leaves",
                                  "Clients",
                                  "Projects",
                                  "Tasks",
                                  "Chats",
                                  "Assets",
                                  "Timing Sheets",
                                ].map((module, index) => (
                                  <tr key={index}>
                                    <td>{module}</td>
                                    {[
                                      "Read",
                                      "Write",
                                      "Create",
                                      "Delete",
                                      "Import",
                                      "Export",
                                    ].map((permission, permIndex) => (
                                      <td key={permIndex} className="text-center">
                                        <input
                                          type="checkbox"
                                          checked={
                                            module !== "Projects" &&
                                            permission !== "Export"
                                          }
                                        />
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="submit-section">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCloseModal}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            style={{ marginLeft: "10px" }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

EmployeeFilter.propTypes = {
  view: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired,
};

export default EmployeeFilter;

const employeeData = [
  {
    id: "FT-0001",
    dateOfJoin: "10 Sep 2024",
    name: "Martin Huges",
    role: "Web Designer",
    skills: ["UI/UX"],
    imageSrc: "https://via.placeholder.com/100x100?text=Martin+Huges",
  },
  {
    id: "FT-0002",
    dateOfJoin: "15 Sep 2024",
    name: "Jane Doe",
    role: "Graphic Designer",
    skills: ["Photoshop"],
    imageSrc: "https://via.placeholder.com/100x100?text=Jane+Doe",
  },
  {
    id: "FT-0003",
    dateOfJoin: "20 Sep 2024",
    name: "Alice Smith",
    role: "Frontend Developer",
    skills: ["JavaScript", "React"],
    imageSrc: "https://via.placeholder.com/100x100?text=Alice+Smith",
  },
  {
    id: "FT-0004",
    dateOfJoin: "25 Sep 2024",
    name: "Bob Johnson",
    role: "Backend Developer",
    skills: ["Node.js", "Express"],
    imageSrc: "https://via.placeholder.com/100x100?text=Bob+Johnson",
  },
  {
    id: "FT-0005",
    dateOfJoin: "30 Sep 2024",
    name: "Eve Davis",
    role: "Project Manager",
    skills: ["Agile", "Scrum"],
    imageSrc: "https://via.placeholder.com/100x100?text=Eve+Davis",
  },
  {
    id: "FT-0006",
    dateOfJoin: "01 Oct 2024",
    name: "John Williams",
    role: "Data Scientist",
    skills: ["Python"],
    imageSrc: "https://via.placeholder.com/100x100?text=John+Williams",
  },
  {
    id: "FT-0007",
    dateOfJoin: "05 Oct 2024",
    name: "Emily Johnson",
    role: "Marketing Specialist",
    skills: ["Content Marketing"],
    imageSrc: "https://via.placeholder.com/100x100?text=Emily+Johnson",
  },
  {
    id: "FT-0008",
    dateOfJoin: "10 Oct 2024",
    name: "Michael Brown",
    role: "UX Researcher",
    skills: ["User Testing"],
    imageSrc: "https://via.placeholder.com/100x100?text=Michael+Brown",
  },
  {
    id: "FT-0009",
    dateOfJoin: "15 Oct 2024",
    name: "Olivia Taylor",
    role: "DevOps Engineer",
    skills: ["Docker", "CI/CD"],
    imageSrc: "https://via.placeholder.com/100x100?text=Olivia+Taylor",
  },
  {
    id: "FT-0010",
    dateOfJoin: "20 Oct 2024",
    name: "Daniel Martinez",
    role: "Product Owner",
    skills: ["Product Management"],
    imageSrc: "https://via.placeholder.com/100x100?text=Daniel+Martinez",
  },
  {
    id: "FT-0011",
    dateOfJoin: "25 Oct 2024",
    name: "Sophia Wilson",
    role: "System Analyst",
    skills: ["System Analysis"],
    imageSrc: "https://via.placeholder.com/100x100?text=Sophia+Wilson",
  },
  {
    id: "FT-0012",
    dateOfJoin: "30 Oct 2024",
    name: "James Anderson",
    role: "Network Engineer",
    skills: ["Networking"],
    imageSrc: "https://via.placeholder.com/100x100?text=James+Anderson",
  },
  {
    id: "FT-0013",
    dateOfJoin: "05 Nov 2024",
    name: "Isabella Thompson",
    role: "Technical Writer",
    skills: ["Content Creation"],
    imageSrc: "https://via.placeholder.com/100x100?text=Isabella+Thompson",
  },
  {
    id: "FT-0014",
    dateOfJoin: "10 Nov 2024",
    name: "Liam Scott",
    role: "Quality Assurance",
    skills: ["Testing"],
    imageSrc: "https://via.placeholder.com/100x100?text=Liam+Scott",
  },
  {
    id: "FT-0015",
    dateOfJoin: "15 Nov 2024",
    name: "Ava Robinson",
    role: "Sales Manager",
    skills: ["Sales Strategy"],
    imageSrc: "https://via.placeholder.com/100x100?text=Ava+Robinson",
  },
  {
    id: "FT-0016",
    dateOfJoin: "20 Nov 2024",
    name: "Noah Green",
    role: "Business Analyst",
    skills: ["Data Analysis"],
    imageSrc: "https://via.placeholder.com/100x100?text=Noah+Green",
  },
];
