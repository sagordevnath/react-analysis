import React from "react";
import { XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";

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

const MyAreaChart = () => {
  return (
    <div>
      <h4>Month with sell</h4>
      <AreaChart width={600} height={300} data={data}>
        <Area dataKey="investment" fill="#8884d8" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip></Tooltip>
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
