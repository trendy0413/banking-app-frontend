"use client";

import React, { useEffect } from "react";

import BalanceDonut from "@/components/charts/BalanceDonut";
import BalanceActivity from "@/components/charts/BalanceActivity";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

import { get } from "@/lib/apiUtils";
import { User } from "@/types/user";
import { Transaction } from "@/types/transaction";

import { useUser } from "@/hooks/useUser";
import { useTransactions } from "@/hooks/useTransactions";

const DashboardPage = () => {
  const { user, setUser } = useUser();
  const { setTransactions } = useTransactions();

  useEffect(() => {
    if (!user) return;

    const fetchTransactions = async () => {
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
    };

    fetchTransactions();
  }, [user, setTransactions]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await get<{ user: User }>(`/api/accounts/current`);
        const user = response.data?.user;
        setUser(user);
      } catch (e) {
        console.log(e)
        setUser(null);
      }
    };
    fetchCurrentUser();
  }, [setUser]);

  return (
    <div className="w-full flex flex-col mx-auto justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:mb-6 mb-2">
        <BalanceDonut />
        <BalanceActivity />
      </div>
      <div className="w-full">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default DashboardPage;
