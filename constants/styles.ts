export const OPERATION_STYLES = {
  input:
    "w-full px-6 py-3 rounded-full border border-gray-100 text-gray-600 placeholder-gray-400 focus:outline-none bg-white",
  error: "text-red-500 text-sm mt-1 pl-2",
  amountButton: (isSelected: boolean) => `
      py-3 rounded-full border transition-colors 
      ${
        isSelected
          ? "border-violet-500 bg-violet-50 text-violet-600"
          : "border-gray-100 text-gray-500 hover:border-gray-200"
      }
    `,
  submitButton:
    "w-full py-3 bg-violet-100 text-violet-600 rounded-full hover:bg-violet-200 transition-colors",
} as const;
