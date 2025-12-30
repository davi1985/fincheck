import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

export const DropdownMenuTrigger = ({ children }: { children: ReactNode }) => (
  <RdxDropdownMenu.Trigger className="outline-none" asChild>
    {children}
  </RdxDropdownMenu.Trigger>
);
