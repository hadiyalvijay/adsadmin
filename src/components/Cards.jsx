import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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
const Cards = () => {
  return (
    <>
      <div className="mt-5 d-flex flex-wrap justify-content-between" style={{ width: "auto",}}>
        {employeeData.map((employee, index) => (
          <Card key={index} style={{ width: "18rem", marginBottom: "1rem" }}>
            <div className="text-center">
              <div className="mt-3">
                <Card.Img
                  className="rounded-circle"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    border: "1px solid blue",
                    padding: "5px" // Added padding to create space between the image and border
                  }}
                  src={employee.imageSrc}
                  alt={`Image of ${employee.name}`}
                />
              </div>
              <div>
                <Card.Body>
                  <h5>
                    <Card.Text style={{ color: "blue" }}>
                      {employee.name}
                    </Card.Text>
                  </h5>
                  <Card.Text>{employee.role}</Card.Text>
                  <Card.Text
                    className="btn btn-primary"
                    style={{ borderRadius: "200px" }}
                  >
                    {employee.skills.join(", ")}
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <ListGroup className="list-group-flush">
              <div className="d-flex justify-content-between p-3">
                <span>Employee ID:</span>
                <span>{employee.id}</span>
              </div>
              <div className="d-flex justify-content-between p-3">
                <span>Date of Join:</span>
                <span>{employee.dateOfJoin}</span>
              </div>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" className="btn btn-primary w-100">
                View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
