"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

const cardVariants = cva("rounded-2xl transition-all duration-300", {
  variants: {
    variant: {
      glass: "glass-card",
      dark: "bg-surface-2 border border-surface-border hover:border-brand-400/30",
      elevated: "bg-surface-3 border border-surface-border shadow-premium hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:border-brand-400/20",
      gradient:
        "gradient-border bg-surface-2",
      flat: "bg-surface-2/50",
      outline: "border border-surface-border bg-transparent",
      feature: "bg-surface-2 border border-surface-border hover:border-brand-400/30 hover:bg-surface-3 group",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    hover: {
      none: "",
      lift: "hover:-translate-y-1 hover:shadow-card-hover cursor-pointer",
      glow: "hover:shadow-glow",
      scale: "hover:scale-[1.02] cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "glass",
    padding: "md",
    hover: "none",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  animate?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, animate = false, children, ...props }, ref) => {
    const classes = cn(cardVariants({ variant, padding, hover }), className);

    if (animate) {
      return (
        <MotionDiv
          ref={ref}
          className={classes}
          whileHover={
            hover === "lift"
              ? { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }
              : hover === "scale"
              ? { scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }
              : undefined
          }
          {...props}
        >
          {children}
        </MotionDiv>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5 mb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg font-semibold text-white leading-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-brand-100/60 leading-relaxed", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-3 mt-4 pt-4 border-t border-surface-border", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
