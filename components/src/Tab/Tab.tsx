import { forwardRef, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { IconX } from "@tabler/icons-react";
import "./Tab.css";

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: ReactNode;
  onClose?: () => void;
  children: ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ active = false, icon, onClose, disabled, children, className, type = "button", ...rest }, ref) => {
    const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      if (!disabled) onClose?.();
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`rudus-tab ${active ? "rudus-tab-active" : ""} text-body${className ? ` ${className}` : ""}`}
        disabled={disabled}
        aria-pressed={active}
        {...rest}
      >
        {icon && <span className="rudus-tab-icon">{icon}</span>}
        <span className="rudus-tab-label">{children}</span>
        {onClose && (
          <span
            className="rudus-tab-close"
            onClick={handleClose}
            role="button"
            aria-label="Close tab"
          >
            <IconX size={14} stroke={1.5} />
          </span>
        )}
      </button>
    );
  }
);
Tab.displayName = "Tab";
