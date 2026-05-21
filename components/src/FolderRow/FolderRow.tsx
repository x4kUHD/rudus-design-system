import { useState, type ReactNode } from "react";
import { IconChevronDown, IconFolder } from "@tabler/icons-react";
import styles from "./FolderRow.module.css";

export interface FolderRowProps {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  icon?: ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  children: ReactNode;
}

export function FolderRow({
  collapsed,
  defaultCollapsed = false,
  onToggle,
  icon,
  selected = false,
  onSelect,
  children,
}: FolderRowProps) {
  const isControlled = collapsed !== undefined;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const current = isControlled ? collapsed : internalCollapsed;

  const handleClick = () => {
    const next = !current;
    if (!isControlled) setInternalCollapsed(next);
    onToggle?.(next);
    onSelect?.();
  };

  return (
    <div
      className={`${styles.row} ${selected ? styles.selected : ""} text-body`}
      onClick={handleClick}
      role="button"
      aria-expanded={!current}
    >
      <IconChevronDown
        size={16}
        stroke={1}
        className={`${styles.chevron} ${current ? styles.collapsed : ""}`}
      />
      <span className={styles.icon}>
        {icon ?? <IconFolder size={16} stroke={1} />}
      </span>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
