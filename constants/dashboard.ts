import {
  LayoutDashboard,
  ArrowLeftRight,
  FileText,
} from "lucide-react";
import type {
  MenuItem,
  BalanceDataPoint,
  Transaction,
} from "@/types/transaction";

export const MENU_ITEMS: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", link: "dashboard" },
  { icon: ArrowLeftRight, label: "Operations", link: "operations" },
  { icon: FileText, label: "Transaction", link: "transaction", badge: "2" },
];

export const BALANCE_DATA: BalanceDataPoint[] = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 58000 },
  { month: "Apr", amount: 63000 },
  { month: "Jun", amount: 75000 },
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    title: "Water Bill",
    status: "pending",
    type: "withdraw",
    amount: -280,
    date: "03-Dec-2024",
  },
  {
    id: 2,
    title: "Income: Salary Nov",
    amount: 1200,
    date: "02-Dec-2024",
    status: "success",
    type: "transfer",
  },
  {
    id: 3,
    title: "Electric Bill",
    amount: -480,
    date: "02-Dec-2024",
    status: "failed",
    type: "deposit",
  },
  {
    id: 4,
    title: "Income : Jane transfers",
    amount: 500,
    date: "02-Dec-2024",
    status: "success",
    type: "withdraw",
  },
  {
    id: 5,
    title: "Internet Bill",
    status: "success",
    type: "deposit",
    amount: -100,
    date: "02-Dec-2024",
  },
  {
    id: 6,
    title: "Income: Salary Oct",
    amount: 1200,
    date: "02-Dec-2024",
    status: "success",
    type: "deposit",
  },
  {
    id: 7,
    title: "Electric Bill",
    status: "success",
    type: "transfer",
    amount: -480,
    date: "02-Dec-2024",
  },
  {
    id: 8,
    title: "Income : Jane transfers",
    amount: 500,
    date: "02-Dec-2024",
    status: "success",
    type: "withdraw",
  },
  {
    id: 9,
    title: "Internet Bill",
    status: "success",
    type: "withdraw",
    amount: -100,
    date: "02-Dec-2024",
  },
];
