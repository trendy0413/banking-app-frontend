"use client";

import React from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Money from "@/public/images/money.png";
import OperationButton from "@/components/ui/OperationButton";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { STYLES } from "@/constants/operation";
import { AmountSelector } from "@/components/ui/AmountSelector";
import { useOperationForm } from "@/hooks/useOperation";

const OperationPage = () => {
  const {
    formData,
    errors,
    isLoading,
    updateFormData,
    formatIBAN,
    handleSubmit,
  } = useOperationForm();

  const handleAmountSelect = (selectedValue: string) => {
    const isOther = selectedValue === "other";
    updateFormData("selectedAmount", selectedValue);
    updateFormData("isCustomAmount", isOther);
    updateFormData("amount", isOther ? "" : selectedValue);
    
  };

  const onSubmit = async () => {
    try {
      await handleSubmit();
    } catch (error) {
      console.log(error)
      toast.error("Failed to complete operation. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col mx-auto justify-center items-center">
      <div className="w-full mx-auto p-6 bg-white flex flex-col justify-center items-center">
        <div className="flex justify-center my-8">
          <Image
            src={Money}
            alt="Withdraw illustration"
            className="w-full h-72 object-contain"
          />
        </div>

        <div className="space-y-4 lg:w-[60%] w-full">
          <div className="md:flex gap-2 w-full max-md:flex-col">
            {["withdraw", "deposit", "transfer"].map((operation) => (
              <OperationButton
                key={operation}
                operation={operation}
                selectedOperation={formData.selectedOperation}
                setSelectedOperation={(op) => {
                  updateFormData("selectedOperation", op);
                  toast.success(`Operation type changed to ${op}`);
                }}
              />
            ))}
          </div>

          {/* Form fields */}
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateFormData("title", e.target.value)}
            placeholder="Title"
            className={STYLES.input}
          />
          {errors.title && <p className={STYLES.error}>{errors.title}</p>}

          {formData.selectedOperation === "transfer" && (
            <div>
              <input
                type="text"
                value={formData.iban}
                onChange={(e) =>
                  updateFormData("iban", formatIBAN(e.target.value))
                }
                placeholder="IBAN"
                maxLength={34}
                className={STYLES.input}
              />
              {errors.iban && <p className={STYLES.error}>{errors.iban}</p>}
            </div>
          )}

          <div>
            <PhoneInput
              international
              defaultCountry="US"
              value={formData.phoneNumber}
              onChange={(phoneNumber) =>
                updateFormData("phoneNumber", phoneNumber)
              }
              placeholder="Enter phone number"
              className={STYLES.input}
            />
            {errors.phone && <p className={STYLES.error}>{errors.phone}</p>}
          </div>

          <AmountSelector
            selectedAmount={formData.selectedAmount}
            isCustomAmount={formData.isCustomAmount}
            customAmount={formData.customAmount}
            onAmountSelect={handleAmountSelect}
            onCustomAmountChange={(value) => {
              updateFormData("customAmount", value);
              updateFormData("amount", value);
            }}
            error={errors.amount}
          />

          <button
            onClick={onSubmit}
            className={STYLES.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              "Verify"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperationPage;
