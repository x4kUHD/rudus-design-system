import type { ReactNode } from "react";
import styles from "./ButtonRibbon.module.css";

export type ButtonRibbonVariant = "primary" | "secondary";

export interface ButtonRibbonProps {
  variant?: ButtonRibbonVariant;
  icon: ReactNode;
  children?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function ButtonRibbon({
  variant = "primary",
  icon,
  children,
  selected = false,
  disabled = false,
  onClick,
}: ButtonRibbonProps) {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button
      type="button"
      className={`${styles.ribbon} ${variantClass} ${selected ? styles.selected : ""} text-body`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className={styles.icon}>{icon}</span>
      {children && (
        <span
          className={`${styles.label} ${variant === "secondary" ? "text-body" : "text-tool"}`}
        >
          {children}
        </span>
      )}
    </button>
  );
}
