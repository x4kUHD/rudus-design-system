import { useState, type ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./PanelHeader.module.css";

export interface PanelHeaderProps {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  children: ReactNode;
}

export function PanelHeader({
  collapsed,
  defaultCollapsed = false,
  onToggle,
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
      className={`${styles.header} text-subheader`}
      onClick={handleClick}
      aria-expanded={!current}
    >
      <IconChevronDown
        size={16}
        stroke={1}
        className={`${styles.chevron} ${current ? styles.collapsed : ""}`}
      />
      <span className={styles.label}>{children}</span>
    </button>
  );
}
