import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
//
const sidebar_items = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", path: "/" },
  { name: "Products", icon: ShoppingBag, color: "#6366f1", path: "/products" },
  { name: "Users", icon: Users, color: "#6366f1", path: "/users" },
  { name: "Sales", icon: DollarSign, color: "#6366f1", path: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#6366f1", path: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#6366f1", path: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6366f1", path: "/settings" },
];

function Sidebar() {
  return <div>Sidebar</div>;
}

export default Sidebar;
