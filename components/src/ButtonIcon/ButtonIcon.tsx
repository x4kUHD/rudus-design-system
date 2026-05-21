import type { ReactNode } from "react";
import styles from "./ButtonIcon.module.css";

export interface ButtonIconProps {
  icon: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel: string;
}

export function ButtonIcon({
  icon,
  selected = false,
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonIconProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${selected ? styles.selected : ""}`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
