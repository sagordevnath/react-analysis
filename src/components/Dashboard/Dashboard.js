import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MyLineChart />
      <MyBarChart />
      <MyAreaChart />
      <MyPieChart />
    </div>
  );
};

export default Dashboard;
