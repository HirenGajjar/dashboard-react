import React from "react";
import Header from "../Components/Common/Header";
import StatCard from "../Components/Common/StatCard";
import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../Components/Overview/SalesOverviewChart";
//
const stat_data = [
  { name: "Total Sales", icon: Zap, value: "$100", color: "#6366f1" },
  { name: "New Users", icon: Users, value: "20", color: "#8b5cf6" },
  {
    name: "Total Products",
    icon: ShoppingBag,
    value: "300",
    color: "#ec4899",
  },
  {
    name: "Conversion Rate",
    icon: BarChart2,
    value: "0.9",
    color: "10b981",
  },
];
function OverviewPage() {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Header title="Overview" />
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {stat_data.map((item) => (
              <StatCard
                key={item.name}
                name={item.name}
                icon={item.icon}
                value={item.value}
                color={item.color}
              />
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SalesOverviewChart />
          </div>
        </main>
      </div>
    </>
  );
}

export default OverviewPage;
