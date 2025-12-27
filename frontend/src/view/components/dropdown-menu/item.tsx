import type { ReactNode } from "react";
import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../app/utils/cn";

type DropdownMenuItemProps = {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
};

export const DropdownMenuItem = ({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) => (
  <RdxDropdownMenu.Item
    onSelect={onSelect}
    className={cn(
      "min-h-[40px] outline-none flex items-center px-4 py-2 text-gray-800 text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer",
      className,
    )}
  >
    {children}
  </RdxDropdownMenu.Item>
);
