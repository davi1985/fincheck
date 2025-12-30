import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../app/utils/cn";
import type { ReactNode } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

export type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose?: () => void;
  rightAction?: ReactNode;
};

export const Modal = ({
  open,
  title,
  children,
  rightAction,
  onClose,
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
          "data-[state=open]:animate-overlay-show"
        )}
      />

      <Dialog.Content
        className={cn(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none",
          "data-[state=open]:animate-content-show"
        )}
      >
        <Dialog.Title className="sr-only">{title}</Dialog.Title>

        <header className="h-12 flex items-center justify-between text-gray-800">
          <button
            className="h-12 w-12 outline-none flex items-center justify-center hover:bg-gray-50 rounded-lg transition-all"
            onClick={onClose}
          >
            <Cross2Icon className="w-6 h-6" />
          </button>

          <span className="text-lg tracking-[-1px] font-bold">{title}</span>

          <div className="h-12 w-12 flex items-center justify-center">
            {rightAction}
          </div>
        </header>

        <div>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
