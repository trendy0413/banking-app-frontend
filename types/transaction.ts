type MenuItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  link: string;
};

type TransactionType = "withdraw" | "deposit" | "transfer";

interface Transaction {
  id: number;
  amount: number;
  title: string;
  status?: "success" | "pending" | "failed";
  type: TransactionType;
  date: string;
}

interface BalanceDataPoint {
  month: string;
  amount: number;
}



export type { MenuItem, Transaction, BalanceDataPoint, TransactionType };
