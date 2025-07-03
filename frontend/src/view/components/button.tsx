import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./spinner";

type ButtonProps = ComponentProps<"button"> & { loading?: boolean };

export const Button = ({
  className,
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={disabled || loading}
    className={cn(
      "bg-teal-900 hover:bg-teal-800 text-white disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 px-6 h-12 rounded-2xl font-medium transition-all flex items-center justify-center",
      className
    )}
  >
    {!loading && children}
    {loading && <Spinner className="w-6 h-6" />}
  </button>
);
