import type { ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "ghost";

export interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`rudus-button rudus-${variant} text-body`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
