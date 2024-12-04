"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const balanceData = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 58000 },
  { month: "Apr", amount: 63000 },
  { month: "Jun", amount: 75000 },
];

const BalanceActivity = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Balance Activity</h2>
      </div>
      <div className="h-[250px] flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={balanceData}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} />
            <YAxis
              axisLine={false}
              tickLine={false}
              dx={-10}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              fill="url(#colorGradient)"
              stroke="transparent"
              fillOpacity={1}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#818cf8"
              strokeWidth={2}
              dot={{ fill: "#818cf8", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceActivity;
