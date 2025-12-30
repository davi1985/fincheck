import { useState } from "react";

export const useFiltersTransactionsModal = () => {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const handleChangeYear = (step: number) =>
    setSelectedYear((prev) => prev + step);

  const handleSelectBankAccountId = (bankAccountId: string) =>
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId
    );

  return {
    selectedBankAccountId,
    handleSelectBankAccountId,
    selectedYear,
    handleChangeYear,
  };
};
