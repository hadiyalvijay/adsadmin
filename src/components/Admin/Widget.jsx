import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MdAlarmOn } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";

const Widget = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [75], 
    options: {
      chart: {
        type: "radialBar",
        height: 280,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "22px",
              color: "#111",
              formatter: function (val) {
                return `${val}%`;
              },
            },
          },
          track: {
            background: "#f0f0f0", 
            strokeWidth: "100%",
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 6,
              opacity: 0.2,
              color: "#000",
            },
          },
        },
      },
      fill: {
        colors: ["#ff7849"],
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#f54b42"], 
          stops: [0, 100],
        },
        dropShadow: {
          enabled: true,
          top: 2,
          left: 5,
          blur: 10,
          color: "rgba(0, 0, 0, 0.4)", 
          opacity: 0.75, 
        },
      },
      labels: ["Completed Tasks"],
      tooltip: {
        // Added tooltip configuration
        enabled: true,
        formatter: function (val) {
          return `${val}%`;
        },
      },
    },
  });

  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xl-5 d-flex">
        <div className="card-body" style={{backgroundColor:"white",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px",padding:"10px"}}>
          <h4 style={{ fontSize: "18px" }}>Statistics</h4>
          <div className="row" > 
            <div className="col-md-6">
             <div className="card-body pt-2" style={{backgroundColor:"white",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px",height:"150px"}}>
                 <div className="card-body st-card st-c2" style={{borderRadius:"10px",height:"120px",marginLeft:"10px",marginRight:"10px", border:"solid 1px #e6f2fb",padding:"20px"}}>
                <div className="stats-info">
                  <div className="text-start">
                    <h6 style={{color:"#4f648e"}}>Today</h6> 
                    <h5 style={{color:"#ff7849"}}>3.45 / 8 hrs</h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "31%",backgroundColor:"#ff7849" }}
                      aria-valuenow="31"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
             </div>
            </div>
            <div className="col-md-6" >
             <div className="card-body pt-2" style={{backgroundColor:"white",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px",height:"150px"}}>
                 <div className="card-body st-card st-c2" style={{borderRadius:"10px",height:"120px",marginLeft:"10px",marginRight:"10px", border:"solid 1px #e6f2fb",padding:"20px"}}>
                <div className="stats-info">
                    <h6 style={{color:"#4f648e"}}>This Month</h6>
                    <h5 style={{color:"#55ce63"}}>3.45 / 8 hrs</h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "87%", backgroundColor: "#55ce63" }}
                      aria-valuenow="87"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ marginTop: "10px" }}>
             <div className="card-body pt-2" style={{backgroundColor:"white",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px",height:"150px"}}>
                 <div className="card-body st-card st-c2" style={{borderRadius:"10px",height:"120px",marginLeft:"10px",marginRight:"10px", border:"solid 1px #e6f2fb",padding:"20px"}}>
                <div className="stats-info">
                    <h6 style={{color:"#4f648e"}}>This Week</h6>
                    <h5 style={{color:"#004be2"}}>3.45 / 8 hrs</h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "47%" ,backgroundColor:"#004be2"}}
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ marginTop: "10px" }}>
             <div className="card-body pt-2" style={{backgroundColor:"white",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px",height:"150px"}}>
                 <div className="card-body st-card st-c2" style={{borderRadius:"10px",height:"120px",marginLeft:"10px",marginRight:"10px", border:"solid 1px #e6f2fb",padding:"20px"}}>
                <div className="stats-info">
                    <h6 style={{color:"#4f648e"}}>Remaining</h6>
                    <h5 style={{color:"#f62d51"}}>3.45 / 8 hrs</h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      backgroundColor="#ff7849"
                      role="progressbar"
                      style={{ width: "87%",backgroundColor:"#f62d51" }}
                      aria-valuenow="87"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-12 col-xl-7 d-flex">
        <div className="card-body project-card flex-fill" style={{backgroundColor:"#ffffff", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",borderRadius:"10px"}}>
          <h4
            style={{ marginLeft: "15px", marginTop: "10px", fontSize: "17px" }}
          >
            Projects
          </h4>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="radialBar"
                height={300}
              />
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="task-box color-one">
                    <div className="task-info d-flex justify-content-around w-100 align-items-center gap-5">
                      <div className="d-flex gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center mt-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#fcebe5",
                          }}
                        >
                          <MdAlarmOn size={25} color="#ff8b63" />
                        </div>
                        <div>
                          <h5>Pending Tasks</h5>
                          <h2>55</h2>
                        </div>
                      </div>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#ff8b63",
                          color: "white",
                        }}
                      >
                        <i className="fas fa-long-arrow-alt-right" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="task-box color-two">
                    <div className="task-info d-flex justify-content-around w-100 align-items-center gap-5">
                      <div className="d-flex gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center mt-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#fff5e3",
                          }}
                        >
                          <BiTask size={25} color="#fdc45e" />
                        </div>
                        <div>
                          <h5>Completed Tasks</h5>
                          <h2>55</h2>
                        </div>
                      </div>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#fdc45e",
                          color: "white",
                        }}
                      >
                        <i className="fas fa-long-arrow-alt-right" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="task-box color-three">
                    <div className="task-info d-flex justify-content-around w-100 align-items-center gap-5">
                      <div className="d-flex gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center mt-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#ffe6f0",
                          }}
                        >
                          <FaDatabase size={25} color="#ff0065" />
                        </div>
                        <div>
                          <h5>Total Projects</h5>
                          <h2>55</h2>
                        </div>
                      </div>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#ff0065",
                          color: "white", // Match the background color of the icon circles
                        }}
                      >
                        <i className="fas fa-long-arrow-alt-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
