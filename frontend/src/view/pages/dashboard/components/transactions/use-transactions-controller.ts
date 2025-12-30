import { useState } from "react";
import { useDashboard } from "../dashboard-context/useDashboard";

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(true);

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };
  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };
  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
    isFilterModalOpen,
    handleOpenFilterModal,
    handleCloseFilterModal,
  };
};
