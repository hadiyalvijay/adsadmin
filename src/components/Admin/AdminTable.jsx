import React, { useState, useRef, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const AdminTable = () => {
  const [activeStatusDropdown, setActiveStatusDropdown] = useState(null);
  const [activeActionDropdown, setActiveActionDropdown] = useState(null);
  const [activeProjectDropdown, setActiveProjectDropdown] = useState(null); // Add state for project dropdown
  const statusDropdownRef = useRef(null);
  const actionDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close status dropdown when clicked outside
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setActiveStatusDropdown(null);
      }
      // Close action dropdown when clicked outside
      if (
        actionDropdownRef.current &&
        !actionDropdownRef.current.contains(event.target)
      ) {
        setActiveActionDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStatusChange = (selectedClient) => {
    const newStatus =
      selectedClient.status === "Active" ? "Inactive" : "Active";
    const updatedClients = clients.map((client) =>
      client.name === selectedClient.name
        ? { ...client, status: newStatus }
        : client
    );
    setClients(updatedClients);
  };
  const invoices = [
    {
      id: "#INV-0001",
      client: "Global Technologies",
      dueDate: "11 Mar 2019",
      total: "$380",
      status: "Partially Paid",
    },
    {
      id: "#INV-0002",
      client: "Delta Infotech",
      dueDate: "8 Feb 2019",
      total: "$500",
      status: "Paid",
    },
    {
      id: "#INV-0003",
      client: "Cream Inc",
      dueDate: "23 Jan 2019",
      total: "$60",
      status: "Unpaid",
    },
  ];

  const payments = [
    {
      id: "#INV-0001",
      client: "Global Technologies",
      paymentType: "Paypal",
      paidDate: "11 Mar 2019",
      paidAmount: "$380",
    },
    {
      id: "#INV-0002",
      client: "Delta Infotech",
      paymentType: "Paypal",
      paidDate: "8 Feb 2019",
      paidAmount: "$500",
    },
    {
      id: "#INV-0003",
      client: "Cream Inc",
      paymentType: "Paypal",
      paidDate: "23 Jan 2019",
      paidAmount: "$60",
    },
  ];
  const [clients, setClients] = useState([
    {
      name: "Barry Cuda",
      email: "barrycuda@example.com",
      role: "CEO",
      avatar: "https://via.placeholder.com/100x100?text=Hi+Hi",
      status: "Active",
    },
    {
      name: "Terry Tebbs",
      email: "terrytebbs@example.com",
      role: "Manager",
      avatar: "https://via.placeholder.com/100x100?text=Hi+Hi",
      status: "Inactive",
    },
    {
      name: "Nicolette Lang",
      email: "nicolette.lang@example.com",
      role: "HR Manager",
      avatar: "https://via.placeholder.com/100x100?text=Hi+Hi",
      status: "Active",
    },
    {
      name: "John Smith",
      email: "johnsmith@example.com",
      role: "Developer",
      avatar: "https://via.placeholder.com/100x100?text=Hi+Hi",
      status: "Inactive",
    },
    {
      name: "Jessica Doe",
      email: "jessica.doe@example.com",
      role: "Team Lead",
      avatar: "https://via.placeholder.com/100x100?text=Hi+Hi",
      status: "Active",
    },
  ]);

  const projects = [
    {
      name: "Office Management",
      openTasks: 1,
      completedTasks: 9,
      progress: 65,
    },
    {
      name: "Project Management",
      openTasks: 2,
      completedTasks: 5,
      progress: 50,
    },
    {
      name: "Video Calling App",
      openTasks: 3,
      completedTasks: 3,
      progress: 40,
    },
    {
      name: "Hospital Administration",
      openTasks: 12,
      completedTasks: 4,
      progress: 30,
    },
    {
      name: "Digital Marketplace",
      openTasks: 7,
      completedTasks: 14,
      progress: 70,
    },
  ];

  return (
    <div>
      <div className="row">
        {/* Invoices Table */}
        <div className="col-md-6 d-flex">
          <div
            className="card-body card-table flex-fill"
            style={{
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <div className="card-header">
              <h3
                style={{
                  margin: "10px 0 0 15px",
                  color: "#212529",
                  fontSize: "20px",
                }}
              >
                Invoices
              </h3>
            </div>
            <div>
              <div className="table-responsive">
                <table className="table table-nowrap custom-table mb-0">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Client</th>
                      <th>Due Date</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, index) => (
                      <tr key={index}>
                        <td
                          className="d-flex align-items-center"
                          style={{ height: "64px" }}
                        >
                          <a
                            className="text-decoration-none"
                            style={{ color: "#212529" }}
                            href="#"
                          >
                            {invoice.id}
                          </a>
                        </td>
                        <td>
                          <h2>
                            <a
                              className="text-decoration-none"
                              style={{ color: "#4f648e", fontSize: "15px" }}
                              href="#"
                            >
                              {invoice.client}
                            </a>
                          </h2>
                        </td>
                        <td
                          className="d-flex align-items-center"
                          style={{ height: "64px" }}
                        >
                          {invoice.dueDate}
                        </td>
                        <td className="" style={{ height: "64px" }}>
                          {invoice.total}
                        </td>
                        <td>
                          <span
                            className={` badge ${
                              invoice.status === "Paid"
                                ? "bg-success text-light"
                                : invoice.status === "Unpaid"
                                ? "bg-danger text-light"
                                : invoice.status === "Partially Paid"
                                ? "bg-warning text-dark"
                                : ""
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer ">
              <a
                className="d-flex justify-content-center align-items-center  text-decoration-none "
                style={{ color: "#212529", height: "50px" }}
                href="#"
              >
                View all invoices
              </a>
            </div>
          </div>
        </div>
        {/* Payments Table */}
        <div className="col-md-6 d-flex">
          <div
            className="card-body card-table flex-fill"
            style={{
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <div className="card-header">
              <h3
                style={{
                  margin: "10px 0 0 15px",
                  color: "#212529",
                  fontSize: "20px",
                }}
              >
                Payments
              </h3>
            </div>
            <div>
              <div className="table-responsive">
                <table className="table custom-table table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Client</th>
                      <th>Payment Type</th>
                      <th>Paid Date</th>
                      <th>Paid Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr key={index}>
                        <td
                          className="d-flex align-items-center"
                          style={{ height: "65px" }}
                        >
                          <a
                            className="text-decoration-none"
                            style={{ color: "#212529" }}
                            href="#"
                          >
                            {payment.id}
                          </a>
                        </td>
                        <td>
                          <h2>
                            <a
                              className="text-decoration-none"
                              style={{ color: "#4f648e", fontSize: "15px" }}
                              href="#"
                            >
                              {payment.client}
                            </a>
                          </h2>
                        </td>
                        <td
                          className="d-flex text-between"
                          style={{ height: "53px" }}
                        >
                          {payment.paymentType}
                        </td>
                        <td className="text-between">{payment.paidDate}</td>
                        <td>{payment.paidAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" ">
              <a
                className=" d-flex justify-content-center align-items-center text-decoration-none"
                style={{ color: "#212529", height: "50px" }}
                href="#"
              >
                View all payments
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "40px" }}> {/* Added marginTop for gap */}
        {/* Clients Table */}
        <div className="col-md-6 d-flex">
          <div
            className="card-body card-table flex-fill"
            style={{
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
           <div className="card-header">
           <h3
              style={{
                margin: "10px 0 0 15px",
                color: "#212529",
                fontSize: "20px",
              }}
            >
              Clients
            </h3>
           </div>
            <div className="table-responsive">
              <table className="table custom-table mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={client.avatar}
                            alt={client.name}
                            style={{
                              borderRadius: "50%",
                              border: "1px solid #ff7849",
                              height: "50px",
                              width: "50px",
                              padding: "2px",
                            }}
                          />
                          <div className="p-2">
                            <div style={{ color: "#4f648e" }}>
                              {client.name}
                            </div>
                            <div style={{ color: "#ff7849" }}>
                              {client.role}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{client.email}</td>
                      <td>
                        <div
                          className="dropdown action-label"
                          ref={statusDropdownRef}
                        >
                          <button
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle d-flex align-items-center justify-content-start"
                            onClick={() =>
                              setActiveStatusDropdown(
                                activeStatusDropdown === client.name
                                  ? null
                                  : client.name
                              )
                            }
                          >
                            <i
                              className={`fa fa-dot-circle-o text-${
                                client.status === "Active"
                                  ? "success"
                                  : "danger"
                              }`}
                              style={{ marginRight: "5px" }}
                            ></i>
                            <span>{client.status}</span>
                          </button>
                          <ul
                            className={`dropdown-menu ${
                              activeStatusDropdown === client.name ? "show" : ""
                            }`}
                          >
                            <li style={{ marginLeft: "10px" }}>
                              <a
                                className="text-decoration-none text-dark dropdown-item"
                                href="#"
                                onClick={() => handleStatusChange(client)}
                              >
                                <i className="fa fa-dot-circle-o text-success"></i>
                                Active
                              </a>
                            </li>
                            <li>
                              <a
                                style={{ marginLeft: "10px" }}
                                className="text-decoration-none text-dark dropdown-item"
                                href="#"
                                onClick={() => handleStatusChange(client)}
                              >
                                <i className="fa fa-dot-circle-o text-danger"></i>
                                Inactive
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-end">
                        <div ref={actionDropdownRef}>
                          <a
                            style={{ cursor: "pointer" }}
                            className="d-flex justify-content-center text-dark"
                            onClick={() =>
                              setActiveActionDropdown(
                                activeActionDropdown === client.name
                                  ? null
                                  : client.name
                              )
                            }
                          >
                            <HiOutlineDotsVertical size={25} />
                          </a>

                          <div
                            style={{ marginRight: "500px", cursor: "pointer" }}
                            className={`dropdown-menu ${
                              activeActionDropdown === client.name ? "show" : ""
                            } `}
                          >
                            <a className="dropdown-item" href="#">
                              <i className=""></i> Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className=""></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" ">
              <a
                className=" d-flex justify-content-center align-items-center text-decoration-none"
                style={{ color: "#212529", height: "80px" }}
                href="#"
              >
                View all payments
              </a>
            </div>
          </div>
        </div>

        {/* Recent Projects Table */}
        <div className="col-md-6 d-flex">
      <div className="card-body card-table flex-fill" style={{
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}>
        <div className="card-header">
          <h3 style={{
            margin: "10px 0 0 15px",
            color: "#212529",
            fontSize: "20px",
          }}>Recent Projects</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table custom-table mb-0">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Progress</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>
                      <h2>
                        <a className="text-decoration-none" style={{ color: "#4f648e", fontSize: "17px" }} href="#">{project.name}</a>
                      </h2>
                      <small className="block text-ellipsis">
                        <span>{project.openTasks}</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span>{project.completedTasks}</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                    </td>
                    <td>
                      <div className="progress progress-xs progress-striped" style={{ height: "5px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          data-bs-toggle="tooltip"
                          title={`${project.progress}%`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="text-end" ref={actionDropdownRef}>
                      <div className="dropdown dropdown-action">
                        <a
                          style={{ cursor: "pointer" }}
                          className="d-flex justify-content-center text-dark"
                          onClick={() => setActiveProjectDropdown(activeProjectDropdown === index ? null : index)}
                        >
                          <HiOutlineDotsVertical />
                        </a>

                        <div className={`dropdown-menu dropdown-menu-right ${activeProjectDropdown === index ? "show" : ""}`}>
                          <a className="dropdown-item">Edit</a>
                          <a className="dropdown-item">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" ">
              <a
                className=" d-flex justify-content-center align-items-center text-decoration-none"
                style={{ color: "#212529", height: "50px" }}
                href="#"
              >
                View all payments
              </a>
            </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AdminTable;
