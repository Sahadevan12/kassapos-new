"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionButton = motion.button as any;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "btn-gradient text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]",
        secondary:
          "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-300 hover:text-slate-900",
        outline:
          "border border-slate-200 text-slate-700 bg-transparent hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900",
        ghost:
          "text-slate-600 bg-transparent hover:bg-slate-100 hover:text-slate-900",
        glass:
          "bg-white/80 border border-slate-200 text-slate-800 hover:border-brand-400/40 hover:bg-white",
        destructive:
          "bg-red-600 text-white hover:bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]",
        success:
          "bg-emerald-600 text-white hover:bg-emerald-500",
        white:
          "bg-white text-brand-700 hover:bg-blue-50 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_20px_rgba(37,99,235,0.06)]",
      },
      size: {
        xs: "h-7 px-3 text-xs rounded-lg",
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-15 px-10 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0 rounded-lg",
        "icon-lg": "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "onDrag" | "onDragEnd" | "onDragStart" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDragCapture" | "onDragEndCapture" | "onDragEnterCapture" | "onDragLeaveCapture" | "onDragOverCapture" | "onDragStartCapture"
    >,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <MotionButton
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={16} />
        ) : leftIcon ? (
          <span className="flex items-center">{leftIcon}</span>
        ) : null}
        {children}
        {!loading && rightIcon && (
          <span className="flex items-center">{rightIcon}</span>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
