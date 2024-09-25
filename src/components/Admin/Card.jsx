import React from "react";

const CardItem = ({ number, label }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="d-flex align-items-center justify-content-center rounded"
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%", 
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          marginRight: "0px",
        }}
      >
        <div className="card-header">
          <div className="text-center w-100 p-3">
            <h3 className="bl-text mb-1" style={{ color: "#ff7849" ,fontSize:"22px"}}>
              {number}
            </h3>
            <h2 style={{fontSize:"25px"}}>{label}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const cardsData = [
    { number: 112, label: "Projects" },
    { number: 44, label: "Clients" },
    { number: 37, label: "Tasks" },
    { number: 218, label: "Employees" },
  ];

  return (
    // Use container-fluid for full width and a custom background color
    <div className="container-fluid" style={{padding: "20px" }}>
      <div className="row" style={{color:"#4f648e"}}>
        {cardsData.map((card, index) => (
          <CardItem key={index} number={card.number} label={card.label}  />
        ))}
      </div>
    </div>
  );
};

export default Card;
