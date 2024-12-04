import { useState } from "react";
import { FormData, FormErrors } from "../types/operation";
import { useUser } from "./useUser";
import { useTransactions } from "./useTransactions";
import { post } from "@/lib/apiUtils";
import { Transaction } from "@/types/transaction";
import { toast } from "react-hot-toast";

export const useOperationForm = () => {
  const { user } = useUser();
  const { transactions, setTransactions } = useTransactions();

  const initialFormData: FormData = {
    title: "",
    iban: "",
    phoneNumber: undefined,
    amount: "",
    selectedAmount: "",
    selectedAccount: "",
    selectedOperation: "withdraw",
    customAmount: "",
    isCustomAmount: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatIBAN = (value: string): string => {
    const cleaned = value.replace(/[^A-Z0-9]/gi, "").toUpperCase();
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const validateIBAN = (value: string): boolean => {
    if (!value) return false;
    const cleaned = value.replace(/\s/g, "");
    if (cleaned.length < 15 || cleaned.length > 34) return false;
    if (!/^[A-Z]{2}/i.test(cleaned)) return false;
    return true;
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const { iban, phoneNumber, amount, title, selectedOperation } = formData;

    if (selectedOperation === "transfer" && !validateIBAN(iban))
      newErrors.iban = "Invalid IBAN";
    if (!title) newErrors.title = "Title is required";
    if (!phoneNumber) newErrors.phone = "Phone number is required";
    if (!amount) newErrors.amount = "Please select an amount";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const response = await post<any>(`/api/transactions`, {
          ...formData,
          userId: user?.id,
          type: formData.selectedOperation,
        });
        if (response.data) {
          setTransactions([...transactions, response.data]);
          toast.success("Operation completed successfully!");
        }
        if (response.error) {
          toast.error(response.error);
        }
      } catch (e) {
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
        setFormData(initialFormData);
        setErrors({});
      }
    }
  };

  return {
    formData,
    errors,
    isLoading,
    updateFormData,
    formatIBAN,
    handleSubmit,
  };
};
