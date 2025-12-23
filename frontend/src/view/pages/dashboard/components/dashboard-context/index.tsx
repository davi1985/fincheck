/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: VoidFunction;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(
    () => setAreValuesVisible((prev) => !prev),
    []
  );

  const value = useMemo(
    () => ({
      areValuesVisible,
      toggleValuesVisibility,
    }),
    [areValuesVisible, toggleValuesVisibility]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
