import { cn } from "@/shared/lib/cn";

interface SpinnerProps {
  className?: string;
  label?: string;
}

export default function Spinner({ className, label = "로딩 중" }: SpinnerProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900",
          className
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
