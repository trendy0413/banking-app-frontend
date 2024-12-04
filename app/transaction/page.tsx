"use client";

import React, { useEffect } from "react";
import TransactionItem from "@/components/ui/TransactionItem";

import { useTransactions } from "@/hooks/useTransactions";
import { useUser } from "@/hooks/useUser";
import { Transaction } from "@/types/transaction";
import { get } from "@/lib/apiUtils";
import { User } from "@/types/user";

const TransactionPage = () => {
  const { transactions, setTransactions } = useTransactions();
  const { user, setUser } = useUser();

  useEffect(() => {
    const fetchTransactions = async () => {
      if (user) {
        try {
          const response = await get<{
            balance: number;
            transactions: Transaction[];
          }>(`/api/accounts/${user.id}/statement`);
          const transactions = response.data?.transactions as Transaction[];
          setTransactions(transactions);
        } catch (e) {
          console.log(e)
          setTransactions([]);
        }
      }
    };
    fetchTransactions();
  }, [user]);

  useEffect(() => {
    if(user) return
    const fetchCurrentUser = async () => {
      try {
        const response = await get<{ user: User }>(`/api/accounts/current`);
        const user = response.data?.user as User;
        setUser(user);
      } catch (e) {
        console.log(e)
        setUser(null);
      }
    };
    fetchCurrentUser();
  }, []);

  return (
    <div className="w-full flex flex-col mx-auto justify-center items-center">
      <div className="bg-white rounded-xl shadow-sm w-full">
        <div className="md:p-6 p-2">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Total Balance</h2>
            <h2 className="text-xl font-semibold mb-4">${user?.balance}</h2>
          </div>
          {transactions.length &&
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
