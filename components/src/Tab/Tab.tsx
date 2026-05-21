import type { MouseEvent, ReactNode } from "react";
import { IconX } from "@tabler/icons-react";
import "./Tab.css";

export interface TabProps {
  active?: boolean;
  icon?: ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export function Tab({
  active = false,
  icon,
  onClose,
  onClick,
  disabled = false,
  children,
}: TabProps) {
  const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (!disabled) onClose?.();
  };

  return (
    <button
      type="button"
      className={`rudus-tab ${active ? "rudus-tab-active" : ""} text-body`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={active}
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
