import React from "react";
import { motion } from "framer-motion";
//
import {
  BarChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  YAxis,
  XAxis,
  Bar,
  Cell,
} from "recharts";

//
const sales_channel_data = [
  { name: "Website", value: 2000 },
  { name: "App", value: 3500 },
  { name: "Market Place", value: 1800 },
  { name: "Social Media", value: 2200 },
  { name: "Other", value: 1600 },
];
const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
function SalesChannelChart() {
  return (
    <>
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-lg font-medium mb-4 text-gray-100">
          Sales by Channel
        </h2>

        <div className="h-80">
          <ResponsiveContainer>
            <BarChart data={sales_channel_data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
              <XAxis dataKey="name" stroke="#9ca3af" />
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
              <Legend />
              <Bar dataKey={"value"} fill="#8884d8">
                {sales_channel_data.map((item, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </>
  );
}

export default SalesChannelChart;
