import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./ButtonRibbon.css";

export type ButtonRibbonVariant = "primary" | "secondary";

export interface ButtonRibbonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonRibbonVariant;
  icon: ReactNode;
  children?: ReactNode;
  selected?: boolean;
}

export const ButtonRibbon = forwardRef<HTMLButtonElement, ButtonRibbonProps>(
  (
    { variant = "primary", icon, children, selected = false, className, type = "button", ...rest },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={`rudus-ribbon rudus-ribbon-${variant} ${selected ? "rudus-ribbon-selected" : ""} text-body${className ? ` ${className}` : ""}`}
      aria-pressed={selected}
      {...rest}
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
  )
);
ButtonRibbon.displayName = "ButtonRibbon";
