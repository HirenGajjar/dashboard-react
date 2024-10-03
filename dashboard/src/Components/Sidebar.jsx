import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
//
const sidebar_items = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", path: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5cf6", path: "/products" },
  { name: "Users", icon: Users, color: "#ec4899", path: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10b981", path: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#f59e0b", path: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3b82f6", path: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6ee7b7", path: "/settings" },
];

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <motion.div
        className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
        animation={{ width: isSidebarOpen ? 256 : 80 }}
      >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
