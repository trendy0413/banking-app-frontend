'use client'

import { createContext } from 'react';
import { Transaction } from '@/types/transaction';

interface TransactionContextType {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  isLoading: boolean;
  error: string | null;
  fetchTransactions: (accountId: number) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);