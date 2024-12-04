import { OPERATION_STYLES } from "@/constants/styles";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
  className?: string;
  maxLength?: number;
}

export const InputField = ({
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  className = "",
  maxLength,
}: InputFieldProps) => (
  <div>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${OPERATION_STYLES.input} ${className}`}
      maxLength={maxLength}
    />
    {error && <p className={OPERATION_STYLES.error}>{error}</p>}
  </div>
);
