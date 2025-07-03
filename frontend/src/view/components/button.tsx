import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={cn(
      "bg-teal-900 hover:bg-teal-800 text-white disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 px-6 h-12 rounded-2xl font-medium transition-all",
      className
    )}
  />
);
