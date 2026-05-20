import type { ReactNode } from "react";
import styles from "./Button.module.css";

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
  const variantClass = variant === "primary" ? styles.primary : styles.ghost;

  return (
    <button
      type="button"
      className={`${styles.button} ${variantClass} text-body`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
