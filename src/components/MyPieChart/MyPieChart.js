import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const MyPieChart = () => {
  return (
    <div className="">
      <h4>Month with sell</h4>
      <PieChart width={800} height={500}>
        <Pie
          dataKey="investment"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        {/* <CartesianGrid stroke="#ccc" strokeDasharray="0" /> */}
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default MyPieChart;
