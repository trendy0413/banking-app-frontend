"use client";

import React from "react";
import TransactionItem from "../ui/TransactionItem";

import { useTransactions } from "@/hooks/useTransactions";

const RecentTransactions = () => {
  const { transactions } = useTransactions();

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full">
      <h2 className="text-xl font-semibold mb-4">Recent Transaction</h2>
      <div className="space-y-4">
        {transactions &&
          transactions.length &&
          transactions
            .slice(0, 5)
            .map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
