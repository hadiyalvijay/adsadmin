import React, { useState, useEffect, useRef } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Common chart theme colors
const themeColors = {
  building1: 'rgba(255, 99, 132, 0.6)', // Pink for building 1
  building2: 'rgba(255, 159, 64, 0.6)', // Orange for building 2
  border1: 'rgba(255, 99, 132, 1)',     // Pink border
  border2: 'rgba(255, 159, 64, 1)',     // Orange border
};

// Default Data for Bar chart (Total Revenue)
const defaultBarChartData = {
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  datasets: [
    {
      label: 'Building 1',
      data: [30, 25, 35, 20, 50, 60, 40],
      backgroundColor: themeColors.building1,
      borderColor: themeColors.border1,
      borderWidth: 1,
    },
    {
      label: 'Building 2',
      data: [20, 30, 25, 30, 40, 55, 45],
      backgroundColor: themeColors.building2,
      borderColor: themeColors.border2,
      borderWidth: 1,
    },
  ],
};

// Data for Heartbeat-style Line chart (Sales Overview)
const defaultLineChartData = {
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  datasets: [
    {
      label: 'Sales Heartbeat 1',
      data: [60, 40, 75, 50, 85, 60, 90],
      fill: false,
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 2,
      tension: 0.5,
      pointRadius: 5,
      pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
    },
    {
      label: 'Sales Heartbeat 2',
      data: [45, 60, 70, 55, 80, 65, 85],
      fill: false,
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 2,
      tension: 0.5,
      pointRadius: 5,
      pointBackgroundColor: 'rgba(0, 123, 255, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba(0, 123, 255, 1)',
    },
  ],
};

// Calculate total revenue and percentage
const calculatePercentageData = (data, total) => ({
  labels: data.labels,
  datasets: data.datasets.map((dataset) => ({
    ...dataset,
    data: dataset.data.map((value) => ((value / total) * 100).toFixed(2)),
  })),
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          const { dataset, raw } = tooltipItem;
          const formattedIncome = (raw * 75).toFixed(2); // Assuming 1 USD = 75 INR
          if (dataset.label.includes('Building')) {
            const totalIncome = dataset.data.reduce((a, b) => a + b, 0) * 75; // Convert total income to INR
            return [
              `Income: ₹${formattedIncome}`,
              `Total Income: ₹${totalIncome}`,
              `Percentage: ${((raw / totalIncome) * 100).toFixed(2)}%`,
            ];
          }
          if (dataset.label.includes('Sales Heartbeat')) {
            const totalSales = dataset.data.reduce((a, b) => a + b, 0) * 75; // Convert total sales to INR
            return [
              `Sales: ₹${formattedIncome}`,
              `Total Sales: ₹${totalSales}`,
              `Percentage: ${((raw / totalSales) * 100).toFixed(2)}%`,
            ];
          }
          return [`Value: ₹${formattedIncome}`];
        },
        title: (tooltipItems) => {
          const year = tooltipItems[0].label;
          return `Year: ${year}`;
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
  layout: {
    padding: 20,
  },
  scales: {
    x: {
      ticks: {
        callback: (value) => {
          if (value === '2007' || value === '2009' || value === '2011') {
            return '';
          }
          return value;
        },
      },
    },
    y: {
      min: 0,
      ticks: {
        stepSize: 25,
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
    },
    line: {
      tension: 0.5,
    },
  },
};

const Graph = () => {
  const [barTimePeriod, setBarTimePeriod] = useState('6m');
  const [lineTimePeriod, setLineTimePeriod] = useState('6m');
  const [barDropdownOpen, setBarDropdownOpen] = useState(false); // State for bar chart dropdown
  const [lineDropdownOpen, setLineDropdownOpen] = useState(false); // State for line chart dropdown
  const barDropdownRef = useRef(null); // Ref for bar chart dropdown
  const lineDropdownRef = useRef(null); // Ref for line chart dropdown

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (barDropdownRef.current && !barDropdownRef.current.contains(event.target)) {
        setBarDropdownOpen(false);
      }
      if (lineDropdownRef.current && !lineDropdownRef.current.contains(event.target)) {
        setLineDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to toggle dropdown visibility
  const toggleBarDropdown = () => {
    setBarDropdownOpen((prev) => !prev);
  };

  const toggleLineDropdown = () => {
    setLineDropdownOpen((prev) => !prev);
  };

  // Example data updates based on time period
  const updateData = (period) => {
    switch (period) {
      case '3m':
        return {
          barData: {
            labels: ['2022', '2023', '2024'],
            datasets: [
              {
                label: 'Building 1',
                data: [40, 45, 55],
                backgroundColor: themeColors.building1,
                borderColor: themeColors.border1,
                borderWidth: 1,
              },
              {
                label: 'Building 2',
                data: [30, 35, 40],
                backgroundColor: themeColors.building2,
                borderColor: themeColors.border2,
                borderWidth: 1,
              },
            ],
          },
          lineData: {
            labels: ['2022', '2023', '2024'],
            datasets: [
              {
                label: 'Sales Heartbeat 1',
                data: [70, 75, 80],
                fill: false,
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                tension: 0.5,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                pointBorderColor: 'rgba(255, 255, 255, 1)',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
              },
              {
                label: 'Sales Heartbeat 2',
                data: [60, 65, 70],
                fill: false,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                tension: 0.5,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                pointBorderColor: 'rgba(255, 255, 255, 1)',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(0, 123, 255, 1)',
              },
            ],
          },
        };
      case '1m':
        return {
          barData: {
            labels: ['2024'],
            datasets: [
              {
                label: 'Building 1',
                data: [50],
                backgroundColor: themeColors.building1,
                borderColor: themeColors.border1,
                borderWidth: 1,
              },
              {
                label: 'Building 2',
                data: [45],
                backgroundColor: themeColors.building2,
                borderColor: themeColors.border2,
                borderWidth: 1,
              },
            ],
          },
          lineData: {
            labels: ['2024'],
            datasets: [
              {
                label: 'Sales Heartbeat 1',
                data: [80],
                fill: false,
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                tension: 0.5,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                pointBorderColor: 'rgba(255, 255, 255, 1)',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
              },
              {
                label: 'Sales Heartbeat 2',
                data: [70],
                fill: false,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                tension: 0.5,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                pointBorderColor: 'rgba(255, 255, 255, 1)',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(0, 123, 255, 1)',
              },
            ],
          },
        };
      default:
        return {
          barData: defaultBarChartData,
          lineData: defaultLineChartData,
        };
    }
  };

  const { barData, lineData } = updateData(barTimePeriod);
  const totalRevenue = barData.datasets.reduce((acc, dataset) => acc + dataset.data.reduce((a, b) => a + b, 0), 0);
  const totalSales = lineData.datasets.reduce((acc, dataset) => acc + dataset.data.reduce((a, b) => a + b, 0), 0);

  const handleBarDropdownClick = (period) => {
    setBarTimePeriod(period);
    setBarDropdownOpen(false);
  };

  const handleLineDropdownClick = (period) => {
    setLineTimePeriod(period);
    setLineDropdownOpen(false);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row jb-dashboard">
          {/* Total Revenue Bar Chart */}
          <div className="col-md-6 text-center">
            <div className="card-body flex-fill" style={{backgroundColor:"white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px"}}>
              <div className="card-header d-flex justify-content-around gap-5">
                <h3 className="card-title mt-2">Total Revenue</h3>
                <div className="dropdown mt-2" ref={barDropdownRef}>
                  <a
                    className="text-decoration-none text-dark dropdown-toggle"
                    style={{cursor:"pointer"}}
                    // type="button"
                    onClick={toggleBarDropdown}
                    aria-haspopup="true"
                    aria-expanded={barDropdownOpen ? 'true' : 'false'}
                  >
                    {barTimePeriod === '6m' ? 'Last 6 months' : barTimePeriod === '3m' ? 'Last 3 months' : 'Last 1 month'}
                  </a>
                  <div className='d-flex justify-content-center mt-1'>
                  {barDropdownOpen && (
                    <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item" onClick={() => handleBarDropdownClick('6m')}>Last 6 months</button></li>
                      <li><button className="dropdown-item" onClick={() => handleBarDropdownClick('3m')}>Last 3 months</button></li>
                      <li><button className="dropdown-item" onClick={() => handleBarDropdownClick('1m')}>Last 1 month</button></li>
                    </ul>
                  )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div style={{ position: 'relative', height: '400px' }}>
                  <Bar
                    data={calculatePercentageData(barData, totalRevenue)}
                    options={chartOptions}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sales Overview Heartbeat Charts */}
          <div className="col-md-6 text-center">
            <div className="card-body flex-fill" style={{backgroundColor:"white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px"}}>
              <div className="card-header d-flex justify-content-around gap-5">
                <h3 className="card-title mt-2">Sales Overview</h3>
                <div className="dropdown mt-2" ref={lineDropdownRef}>
                  <a
                    className="text-decoration-none text-dark dropdown-toggle mt-2"
                    style={{cursor:'pointer'}}
                    // type="button"
                    onClick={toggleLineDropdown}
                    aria-haspopup="true"
                    aria-expanded={lineDropdownOpen ? 'true' : 'false'}
                  >
                    {lineTimePeriod === '6m' ? 'Last 6 months' : lineTimePeriod === '3m' ? 'Last 3 months' : 'Last 1 month'}
                  </a>
                  <div className='d-flex justify-content-center mt-1'>
                  {lineDropdownOpen && (
                    <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item" onClick={() => handleLineDropdownClick('6m')}>Last 6 months</button></li>
                      <li><button className="dropdown-item" onClick={() => handleLineDropdownClick('3m')}>Last 3 months</button></li>
                      <li><button className="dropdown-item" onClick={() => handleLineDropdownClick('1m')}>Last 1 month</button></li>
                    </ul>
                  )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div style={{ position: 'relative', height: '400px' }}>
                  <Line
                    data={calculatePercentageData(lineData, totalSales)}
                    options={chartOptions}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Graph;
