import type { ReactNode } from "react";
import "./ButtonRibbon.css";

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
  return (
    <button
      type="button"
      className={`rudus-ribbon rudus-ribbon-${variant} ${selected ? "rudus-ribbon-selected" : ""} text-body`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="rudus-ribbon-icon">{icon}</span>
      {children && (
        <span
          className={`rudus-ribbon-label ${variant === "secondary" ? "text-body" : "text-tool"}`}
        >
          {children}
        </span>
      )}
    </button>
  );
}
