import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const imgSize = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  const textSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/images/favicon.png"
        alt="TechCrew logo"
        className={cn("w-auto object-contain", imgSize[size])}
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-bold tracking-tight text-zinc-900 dark:text-white",
              textSize[size]
            )}
          >
            TechCrew
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Empowering Through Technology
          </span>
        </div>
      )}
    </div>
  );
}
