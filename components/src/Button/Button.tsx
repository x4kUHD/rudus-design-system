import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, type = "button", ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`rudus-button rudus-${variant} text-body${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
