import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "cyan" | "amber";
}

export function SectionLabel({ children, className, variant = "default" }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
        variant === "default" && "text-brand-700 border",
        variant === "cyan" && "text-accent-600 border",
        variant === "amber" && "text-amber-700 border border-amber-500/20",
        className
      )}
      style={
        variant === "default"
          ? { background: "rgba(37,99,235,0.06)", borderColor: "rgba(37,99,235,0.15)" }
          : variant === "cyan"
          ? { background: "rgba(6,182,212,0.06)", borderColor: "rgba(6,182,212,0.18)" }
          : undefined
      }
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full",
        variant === "default" && "bg-brand-500",
        variant === "cyan" && "bg-accent-500",
        variant === "amber" && "bg-amber-400",
      )} />
      {children}
    </div>
  );
}
