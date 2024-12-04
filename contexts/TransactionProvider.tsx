'use client'

import { ReactNode, useState } from 'react';
import { Transaction } from '@/types/transaction';
import { get } from '@/lib/apiUtils';
import { TransactionContext } from './TransactionContext';

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async (accountId: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await get<{ transactions: Transaction[] }>(
        `/api/accounts/${accountId}/statement`
      );
      if (response.data?.transactions) {
        setTransactions(response.data.transactions);
      }
    } catch (err) {
      setError('Failed to fetch transactions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TransactionContext.Provider 
      value={{ transactions, setTransactions, isLoading, error, fetchTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
