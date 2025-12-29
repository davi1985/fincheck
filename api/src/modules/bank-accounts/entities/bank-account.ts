export const bankAccountType = {
  CHECKING: 'CHECKING',
  INVESTMENT: 'INVESTMENT',
  CASH: 'CASH',
} as const;

export type BankAccountType =
  (typeof bankAccountType)[keyof typeof bankAccountType];
