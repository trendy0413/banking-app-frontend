"use client";

import React from "react";
import { Transaction } from "@/types/transaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => (
  <div className="w-full flex items-center justify-between md:py-4 py-2 border-b border-gray-100 last:border-0">
    <div className="flex items-center md:gap-4 gap-2">
      <div
        className={`w-12 h-12 rounded-xl ${
          transaction.type === "withdraw"
            ? "bg-emerald-400"
            : transaction.type === "deposit"
            ? "bg-orange-400"
            : "bg-pink-500"
        } flex items-center justify-center`}
      ></div>
      <div>
        <h3 className="font-medium mb-1">{transaction.title}</h3>
        {transaction.status && (
          <span
            className={`text-sm ${
              transaction.status === "success"
                ? "text-blue-500"
                : transaction.status === "pending"
                ? "text-gray-500"
                : "text-red-500"
            }`}
          >
            {transaction.status}
          </span>
        )}
      </div>
    </div>
    <div className="flex w-[35%] md:justify-between justify-end">
      <div className="text-sm text-gray-500 text-right hidden md:flex">
        {transaction.date}
      </div>
      <div
        className={`font-medium ${
          transaction.amount > 0 ? "text-blue-600" : "text-red-500"
        }`}
      >
        {transaction.type === "deposit" ? "+" : "-"} $
        {Math.abs(transaction.amount)}
      </div>
    </div>
  </div>
);

export default TransactionItem;
