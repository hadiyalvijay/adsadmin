import React, { useState, useEffect } from 'react';
import { BsGrid3X3GapFill, BsList } from 'react-icons/bs';
import PropTypes from 'prop-types';
import EmployeeTable from './EmployeeTable';
import Cards from './Cards';

const EmployeeFilter = ({ initialView }) => {
  const [view, setView] = useState(initialView);
  const [showModal, setShowModal] = useState(false);

  // Load the view from localStorage when the component mounts
  useEffect(() => {
    const savedView = localStorage.getItem('employeeView');
    if (savedView) {
      setView(savedView);
    }
  }, []);

  // Save the selected view to localStorage
  const updateView = (newView) => {
    setView(newView);
    localStorage.setItem('employeeView', newView);
  };

  const handleAddEmployee = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    handleCloseModal();
  };

  const permissionsCategories = [
    'Holidays', 'Leaves', 'Clients', 'Projects', 'Tasks', 'Chats', 'Assets', 'Timesheet',
  ];

  const permissionActions = ['Read', 'Write', 'Create', 'Delete', 'Import', 'Export'];

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-body" style={{ backgroundColor: '#f3f4f6' }}>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-3" style={{ backgroundColor: 'white', height: 'auto', padding: '15px' }}>
            <div className="row g-3 align-items-center">
              {/* Filter Inputs */}
              <div className="col-12 col-sm-6 col-md-3">
                <input type="text" className="form-control" placeholder="Employee ID" />
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <input type="text" className="form-control" placeholder="Employee Name" />
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
                <button className="btn btn-secondary w-100">Search</button>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3 mt-md-0">
              <div className="d-flex gap-2">
                <a
                  href="#"
                  className={`fa ${view === 'grid' ? 'btn-success' : 'btn-secondary'}`}
                  aria-label="Grid View"
                  onClick={(e) => {
                    e.preventDefault();
                    updateView('grid');
                  }}
                  style={{ fontSize: '20px', marginRight: '20px', marginTop: '3px', color: view === 'grid' ? '#ff7849' : 'black' }}
                >
                  <BsGrid3X3GapFill />
                </a>
                <a
                  href="#"
                  className={`fa ${view === 'list' ? 'btn-success' : 'btn-secondary'}`}
                  aria-label="List View"
                  onClick={(e) => {
                    e.preventDefault();
                    updateView('list');
                  }}
                  style={{ fontSize: '26px', marginRight: '20px', color: view === 'list' ? '#ff7849' : 'black' }}
                >
                  <BsList />
                </a>
              </div>
              <div className="ms-3 mt-3 mt-md-0">
                <button
                  className="btn btn-success rounded-pill"
                  aria-label="Add Employee"
                  onClick={handleAddEmployee}
                  style={{ backgroundColor: '#fa3644', borderColor: '#ffe3e5', borderWidth: '5px' }}
                >
                  <i className="fa fa-plus me-2 fs-5"></i>Add Employee
                </button>
              </div>
            </div>
          </div>

          {view === 'grid' ? <Cards /> : <EmployeeTable />}

          {/* Modal for adding employee */}
          {showModal && (
            <div
              id="add_employee"
              className="modal fade show"
              role="dialog"
              style={{ display: 'block' }}
              aria-labelledby="add_employee_modal_label"
              aria-hidden={!showModal}
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="add_employee_modal_label">
                      Add Employee
                    </h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      {/* Personal Information */}
                      <div className="mb-4">
                        <h6 className="mb-3">Personal Information</h6>
                        <div className="row g-3">
                          <div className="col-12 col-md-6">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" id="first_name" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" id="last_name" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" id="username" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" id="cpassword" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="employee_id" className="form-label">Employee ID</label>
                            <input type="text" id="employee_id" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="joining_date" className="form-label">Joining Date</label>
                            <input type="date" id="joining_date" className="form-control" required />
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="tel" id="phone" className="form-control" required />
                          </div>
                        </div>
                      </div>
                      {/* Company Details */}
                      <div className="mb-4">
                        <h6 className="mb-3">Company Details</h6>
                        <div className="row g-3">
                          <div className="col-12 col-md-6">
                            <label htmlFor="company" className="form-label">Company</label>
                            <select id="company" className="form-select" required>
                              <option value="">Select Company</option>
                              <option>Globel Technologies</option>
                              <option>Delta Inforech</option>
                            </select>
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="department" className="form-label">Department</label>
                            <select id="department" className="form-select" required>
                              <option value="">Select Department</option>
                              <option>Web Department</option>
                              <option>IT Management</option>
                              <option>Marketing</option>
                            </select>
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <select id="designation" className="form-select" required>
                              <option value="">Select Designation</option>
                              <option>Web Developer</option>
                              <option>Web Designer</option>
                              <option>Android Developer</option>
                            </select>
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select id="role" className="form-select" required>
                              <option value="">Select Role</option>
                              <option>Admin</option>
                              <option>Employee</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* Permissions */}
                      <div className="mb-4">
                        <h6 className="mb-3">Permissions</h6>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Module</th>
                                {permissionActions.map((action) => (
                                  <th key={action}>{action}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {permissionsCategories.map((category) => (
                                <tr key={category}>
                                  <td>{category}</td>
                                  {permissionActions.map((action) => (
                                    <td key={action}>
                                      <input type="checkbox" />
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button type="submit" className="btn btn-primary me-3">
                          Submit
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                          Cancel
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
  );
};

EmployeeFilter.propTypes = {
  initialView: PropTypes.string,
};

EmployeeFilter.defaultProps = {
  initialView: 'list',
};

export default EmployeeFilter;
