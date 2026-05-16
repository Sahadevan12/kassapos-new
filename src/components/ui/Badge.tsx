import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "bg-brand-400/15 text-brand-300 border border-brand-400/20",
        blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
        green: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
        red: "bg-red-500/10 text-red-400 border border-red-500/20",
        purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
        glass: "glass text-white/80",
        solid: "bg-brand-400 text-white",
        outline: "border border-brand-400/40 text-brand-300 bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "green" && "bg-emerald-400",
            variant === "red" && "bg-red-400",
            variant === "amber" && "bg-amber-400",
            (!variant || variant === "default" || variant === "blue") && "bg-brand-400",
            variant === "cyan" && "bg-cyan-400"
          )}
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
