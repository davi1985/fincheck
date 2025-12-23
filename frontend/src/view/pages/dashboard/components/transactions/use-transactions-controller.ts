import { useDashboard } from "../dashboard-context/useDashboard";

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
  };
};
