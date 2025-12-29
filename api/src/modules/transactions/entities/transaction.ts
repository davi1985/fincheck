export const transactionType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
} as const;

export type TransactionType =
  (typeof transactionType)[keyof typeof transactionType];
