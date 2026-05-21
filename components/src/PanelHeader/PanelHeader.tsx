import { forwardRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "./PanelHeader.css";

export interface PanelHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  icon?: ReactNode;
  children: ReactNode;
}

export const PanelHeader = forwardRef<HTMLButtonElement, PanelHeaderProps>(
  (
    {
      collapsed,
      defaultCollapsed = false,
      onToggle,
      icon,
      children,
      className,
      type = "button",
      onClick,
      ...rest
    },
    ref
  ) => {
    const isControlled = collapsed !== undefined;
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const current = isControlled ? collapsed : internalCollapsed;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const next = !current;
      if (!isControlled) setInternalCollapsed(next);
      onToggle?.(next);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`rudus-panel-header text-subheader${className ? ` ${className}` : ""}`}
        onClick={handleClick}
        aria-expanded={!current}
        {...rest}
      >
        <IconChevronDown
          size={16}
          stroke={1}
          className={`rudus-panel-chevron ${current ? "rudus-panel-collapsed" : ""}`}
        />
        {icon && <span className="rudus-panel-icon">{icon}</span>}
        <span className="rudus-panel-label">{children}</span>
      </button>
    );
  }
);
PanelHeader.displayName = "PanelHeader";
