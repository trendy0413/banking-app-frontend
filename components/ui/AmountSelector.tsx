import { STYLES, predefinedAmounts } from "@/constants/operation";

interface AmountSelectorProps {
  selectedAmount: string;
  isCustomAmount: boolean;
  customAmount: string;
  onAmountSelect: (value: string) => void;
  onCustomAmountChange: (value: string) => void;
  error?: string;
}

export const AmountSelector = ({
  selectedAmount,
  isCustomAmount,
  customAmount,
  onAmountSelect,
  onCustomAmountChange,
  error,
}: AmountSelectorProps) => (
  <div className="space-y-3">
    <p className="text-gray-600">Choose amount</p>
    <div className="grid grid-cols-3 gap-3">
      {predefinedAmounts.map((amount) => (
        <button
          key={amount.value}
          onClick={() => onAmountSelect(amount.value)}
          className={STYLES.amountButton(selectedAmount === amount.value)}
        >
          {amount.label}
        </button>
      ))}
    </div>
    {isCustomAmount && (
      <input
        type="number"
        value={customAmount}
        onChange={(e) => onCustomAmountChange(e.target.value)}
        placeholder="Enter amount"
        className={STYLES.input}
        min="0"
        step="0.01"
      />
    )}
    {error && <p className={STYLES.error}>{error}</p>}
  </div>
);
