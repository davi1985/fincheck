import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

export const DropdownMenuRoot = ({ children }: { children: ReactNode }) => (
  <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>
);
