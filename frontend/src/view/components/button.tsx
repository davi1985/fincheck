import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./spinner";

type ButtonProps = ComponentProps<"button"> & { isLoading?: boolean };

export const Button = ({
  className,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={disabled || isLoading}
    className={cn(
      "bg-teal-900 hover:bg-teal-800 text-white disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 px-6 h-12 rounded-2xl font-medium transition-all flex items-center justify-center",
      className
    )}
  >
    {!isLoading && children}
    {isLoading && <Spinner className="w-6 h-6" />}
  </button>
);
