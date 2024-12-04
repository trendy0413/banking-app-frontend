"use client";

const OperationButton = ({
  operation,
  selectedOperation,
  setSelectedOperation,
}: {
  operation: string;
  selectedOperation: string;
  setSelectedOperation: (operation: string) => void;
}) => (
  <button
    onClick={() => setSelectedOperation(operation)}
    className={`w-full py-3 px-6 rounded-full transition-colors mb-2 ${
      selectedOperation === operation
        ? "bg-violet-100 text-violet-600 border-2 border-violet-500"
        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
    }`}
  >
    {operation.charAt(0).toUpperCase() + operation.slice(1)}
  </button>
);

export default OperationButton;
