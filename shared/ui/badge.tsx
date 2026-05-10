import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type BadgeVariant = "default" | "safe" | "warning" | "blocked";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantClassNames: Record<BadgeVariant, string> = {
  default: "border-slate-200 bg-slate-50 text-slate-700",
  safe: "border-emerald-200 bg-emerald-50 text-emerald-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  blocked: "border-red-200 bg-red-50 text-red-700",
};

export default function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variantClassNames[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
