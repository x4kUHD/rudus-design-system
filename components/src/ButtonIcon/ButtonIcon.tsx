import type { ReactNode } from "react";
import "./ButtonIcon.css";

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
      className={`rudus-button-icon ${selected ? "rudus-button-icon-selected" : ""}`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
