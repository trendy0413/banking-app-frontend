"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PieChart, Pie, Cell } from "recharts";

// Dynamic import of the chart component with SSR disabled
const DynamicPieChart = dynamic(() => Promise.resolve(PieChart), {
  ssr: false,
});

const balanceData = [
  { name: "Balance", value: 58, color: "#22c55e" },
  { name: "Pending", value: 35, color: "#fb923c" },
  { name: "Empty", value: 7, color: "#f1f5f9" },
];

const BalanceDonut = () => {
  return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Available Balance</h2>
          <div className="w-full flex justify-center items-center relative">
            <DynamicPieChart width={300} height={250}>
              <Pie
                data={balanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
              >
                {balanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </DynamicPieChart>

            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold">80%</div>
              <div className="text-sm text-gray-500">Total Count</div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Balance 58%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span className="text-sm">Pending 35%</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BalanceDonut;
