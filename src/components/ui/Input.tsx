import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-brand-100/80"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3.5 text-brand-100/40 pointer-events-none flex items-center">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              "w-full h-11 rounded-xl border bg-surface-2 text-white placeholder:text-brand-100/30",
              "px-4 py-3 text-sm",
              "border-surface-border",
              "focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 focus:outline-none",
              "transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500 focus:border-red-400 focus:ring-red-400/20",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3.5 text-brand-100/40 flex items-center">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="text-xs text-red-400 flex items-center gap-1">⚠ {error}</p>}
        {hint && !error && <p className="text-xs text-brand-100/40">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }
>(({ className, label, error, id, ...props }, ref) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-brand-100/80">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        ref={ref}
        className={cn(
          "w-full min-h-[120px] rounded-xl border bg-surface-2 text-white placeholder:text-brand-100/30",
          "px-4 py-3 text-sm resize-none",
          "border-surface-border",
          "focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 focus:outline-none",
          "transition-all duration-200",
          error && "border-red-500 focus:border-red-400",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400">⚠ {error}</p>}
    </div>
  );
});
Textarea.displayName = "Textarea";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }
>(({ className, label, error, id, children, ...props }, ref) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-brand-100/80">
          {label}
        </label>
      )}
      <select
        id={selectId}
        ref={ref}
        className={cn(
          "w-full h-11 rounded-xl border bg-surface-2 text-white",
          "px-4 py-2 text-sm appearance-none",
          "border-surface-border",
          "focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 focus:outline-none",
          "transition-all duration-200",
          error && "border-red-500",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-400">⚠ {error}</p>}
    </div>
  );
});
Select.displayName = "Select";

export { Input, Textarea, Select };
