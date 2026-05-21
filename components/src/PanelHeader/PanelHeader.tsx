import { useState, type ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "./PanelHeader.css";

export interface PanelHeaderProps {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  icon?: ReactNode;
  children: ReactNode;
}

export function PanelHeader({
  collapsed,
  defaultCollapsed = false,
  onToggle,
  icon,
  children,
}: PanelHeaderProps) {
  const isControlled = collapsed !== undefined;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const current = isControlled ? collapsed : internalCollapsed;

  const handleClick = () => {
    const next = !current;
    if (!isControlled) setInternalCollapsed(next);
    onToggle?.(next);
  };

  return (
    <button
      type="button"
      className="rudus-panel-header text-subheader"
      onClick={handleClick}
      aria-expanded={!current}
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
