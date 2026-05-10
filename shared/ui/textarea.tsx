import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export default function Textarea({ className, hasError = false, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-40 w-full resize-y rounded-2xl border bg-white p-4 text-sm leading-6 text-slate-900 outline-none transition",
        hasError
          ? "border-red-300 focus:border-red-500"
          : "border-slate-300 focus:border-slate-900",
        className
      )}
      {...props}
    />
  );
}
