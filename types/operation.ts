import type { E164Number } from "libphonenumber-js";

export type OperationType = "withdraw" | "deposit" | "transfer";

export interface PredefinedAmount {
  value: string;
  label: string;
}

export interface FormErrors {
  iban?: string;
  phone?: string;
  amount?: string;
  account?: string;
  title?: string;
}

export interface FormData {
  title: string;
  iban: string;
  phoneNumber: E164Number | undefined;
  amount: string;
  selectedAmount: string;
  selectedAccount: string;
  selectedOperation: OperationType;
  customAmount: string;
  isCustomAmount: boolean;
}