import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import chartPic from "../Assets/emg&orm.png";
const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      labels: [""],
      dataLabels: {
        enabled: false,
      },

      title: {
        text: "40%",
        align: "center",
        margin: 0,
        offsetX: 0,
        offsetY: 90,
        floating: false,
        style: {
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#f3f4f5",
        },
      },
      colors: ["#fcb000", "#d9d9d9"],
      grid: {
        padding: {
          bottom: -100,
        },
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className=" card">
      <h2>Goal reached</h2>
      <div className="flex-box">
        <div className="" id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
          />
        </div>
        <div>
          <img src={chartPic} alt="usericon" width={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
