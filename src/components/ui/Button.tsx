import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: string;
  variant?: ButtonVariant;
  className?: string;
};

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
  secondary:
    "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800/60",
  ghost:
    "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
