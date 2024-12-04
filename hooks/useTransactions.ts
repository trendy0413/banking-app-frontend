import { useContext } from 'react';
import { TransactionContext } from '@/contexts/TransactionContext';

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
} 