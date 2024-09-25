import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Data and options for the charts
const newEmployeesChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "New Employees",
      data: [10, 20, 15, 25],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const newEmployeesChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Employees: ${tooltipItem.raw}`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Employees",
      },
    },
  },
};

const earningsChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Earnings",
      data: [10000, 12000, 11000, 13000],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ],
};

const earningsChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `Earnings: $${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Amount ($)",
      },
    },
  },
};

const expensesChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Expenses",
      data: [5000, 6000, 5500, 7000],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const expensesChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `Expenses: $${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Amount ($)",
      },
    },
  },
};

const profitChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Profit",
      data: [7000, 8000, 6000, 6000],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const profitChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Profit: $${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Amount ($)",
      },
    },
  },
};

const marketingChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Marketing Performance",
      data: [3000, 4000, 3500, 5000],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderWidth: 2,
      tension: 0.1,
    },
  ],
};

const marketingChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `Performance: $${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Amount ($)",
      },
    },
  },
};

const Graphprofit = () => {
  return (
    <div className="row">
      {/* New Employees Card */}
      <div className="col-md-6 col-lg-3 ">
        <div
          className=" card-body  "
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="card-header">
            <div className="d-flex justify-content-around gap-5">
              <div className="mt-2">
                <h2 style={{ fontSize: "20px",color:"#4f648e" }}>New Employees </h2>
                <h3 className="bl-text fs-5" style={{color:"#ff7849"}}>112</h3>
              </div>
              <h6 className="mt-2">+10%</h6>
            </div>
          </div>
          <div style={{ height: "200px" }}>
            <Line
              data={newEmployeesChartData}
              options={newEmployeesChartOptions}
            />
          </div>
        </div>
      </div>

      {/* Earnings Card */}
      <div className="col-md-6 col-lg-3 ">
        <div
          className=" card-body  "
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="card-header">
            <div className="d-flex justify-content-around gap-5">
              <div className="mt-2">
                <h2 style={{ fontSize: "20px",color:"#4f648e" }}>Earnings</h2>
                <h3 className="bt-text fs-5" style={{color:"#ff7849"}}>$1,42,300</h3>
              </div>
              <h6 className="mt-2">+10%</h6>
            </div>
          </div>
          <div style={{ height: "200px" }}>
            <Line data={earningsChartData} options={earningsChartOptions} />
          </div>
        </div>
      </div>

      {/* Expenses Card */}
      <div className="col-md-6 col-lg-3 ">
        <div
          className=" card-body  "
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="card-header">
            <div className="d-flex justify-content-around gap-5">
              <div className="mt-2">
                <h2 style={{ fontSize: "20px",color:"#4f648e" }}>Expenses</h2>
                <h3 className="bt-text fs-5" style={{color:"#ff0000"}}>$8,500</h3>
              </div>
              <h6 className="mt-2">+10%</h6>
            </div>
          </div>
          <div style={{ height: "200px" }}>
            <Line data={expensesChartData} options={expensesChartOptions} />
          </div>
        </div>
      </div>

      {/* Profit Card */}
      <div className="col-md-6 col-lg-3 ">
        <div
          className=" card-body  "
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="card-header">
            <div className="d-flex justify-content-around gap-5">
              <div className="mt-2">
                <h2 style={{ fontSize: "20px",color:"#4f648e"}}>Profit</h2>
                <h3 className="bt-text fs-5">$1,12,000</h3>
              </div>
              <h6 className="mt-2">-10%</h6>
            </div>
          </div>
          <div style={{ height: "200px" }}>
            <Line data={profitChartData} options={profitChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphprofit;
