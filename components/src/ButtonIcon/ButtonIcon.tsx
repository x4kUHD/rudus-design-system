import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./ButtonIcon.css";

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  selected?: boolean;
  ariaLabel: string;
}

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, selected = false, ariaLabel, className, type = "button", ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`rudus-button-icon ${selected ? "rudus-button-icon-selected" : ""}${className ? ` ${className}` : ""}`}
      aria-pressed={selected}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </button>
  )
);
ButtonIcon.displayName = "ButtonIcon";
