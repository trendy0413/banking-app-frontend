interface LoadingSpinnerProps {
  text?: string;
}

export const LoadingSpinner = ({ text }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
      {text && <span>{text}</span>}
    </div>
  );
}; 