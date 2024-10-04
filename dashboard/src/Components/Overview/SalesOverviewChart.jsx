import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
//
const sales_data = [
  { name: "January", sales: 8523.67 },
  { name: "February", sales: 4768.23 },
  { name: "March", sales: 9351.12 },
  { name: "April", sales: 6892.47 },
  { name: "May", sales: 1256.98 },
  { name: "June", sales: 7823.1 },
  { name: "July", sales: 9012.45 },
  { name: "August", sales: 6752.84 },
  { name: "September", sales: 2897.5 },
  { name: "October", sales: 5648.39 },
  { name: "November", sales: 8457.22 },
  { name: "December", sales: 9641.89 },
];

//
function SalesOverviewChart() {
  return (
    <>
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-medium mb-4 text-gray-100">
          Sales Overview
        </h2>
        <div className="h-80">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={sales_data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
              <XAxis dataKey={"name"} stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31,41,55,0.8)",
                  borderColor: "#4b5563",
                }}
                itemStyle={{
                  color: "#e5e7eb",
                }}
              />
              <Line
                type="monotone"
                dataKey={"sales"}
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
                activeDor={{ r: 8, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </>
  );
}

export default SalesOverviewChart;
