import { useCallback, useState } from "react";

export const useFiltersModal = () => {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const handleChangeYear = useCallback((step: number) => {
    setSelectedYear((prev) => prev + step);
  }, []);

  const handleSelectBankAccountId = useCallback((bankAccountId: string) => {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId
    );
  }, []);

  return {
    selectedBankAccountId,
    handleSelectBankAccountId,
    selectedYear,
    handleChangeYear,
  };
};
